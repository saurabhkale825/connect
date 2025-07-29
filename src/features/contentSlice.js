import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchContent = createAsyncThunk(
  "content/fetchContent",
  async (_, { getState }) => {
    const { page, limit } = getState().content;
    const response = await axios.get("https://closet-recruiting-api.azurewebsites.net/api/data");

    const start = (page - 1) * limit;
    const end = page * limit;
    return response.data.slice(start, end);
  }
);

const contentSlice = createSlice({
  name: "content",
  initialState: {
    content: [],
    status: "idle",
    error: null,
    page: 1,
    limit: 1,
  },
  reducers: {
    incrementPage: (state) => {
      state.page += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContent.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchContent.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.content = [...state.content, ...action.payload];
      
      })
      .addCase(fetchContent.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { incrementPage } = contentSlice.actions;
export const selectContent = (state) => state.content.content;
export const selectContentStatus = (state) => state.content.status;
export const selectContentError = (state) => state.content.error;
export default contentSlice.reducer;
