import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pricingOptions : [],
    keyword:"",
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        setPricingOptions: (state, action) => {
            if(state.pricingOptions.includes(action.payload)) {
                state.pricingOptions = state.pricingOptions.filter(option => option !== action.payload);
            }
            else {
                state.pricingOptions.push(action.payload);
            }
        },
        setKeyword: (state, action) => {
            state.keyword = action.payload;
        },
        resetFilters: (state) => {
            state.pricingOptions = [];
            state.keyword = "";
        }   
    }
});

export const { setPricingOptions, setKeyword, resetFilters } = filterSlice.actions;
export const selectPricingOptions = (state) => state.filter.pricingOptions;
export const selectKeyword = (state) => state.filter.keyword;       

export default filterSlice.reducer;
// This slice manages the filter state for pricing options and keyword search in the application.
