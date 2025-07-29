import React, { useCallback } from "react";
import {
  KeywordSearchContainer,
  KeywordSearchInput,
} from "./KeywordSearch.styles";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { setKeyword } from "../../features/filterSlice";
import { useSearchParams } from "react-router-dom";
import debounce from "lodash.debounce";

const KeywordSearch = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  // Debounced keyword
  const debouncedDispatch = useCallback(
    debounce((value) => {
      dispatch(setKeyword(value));
    }, 500),
    []
  );

  const handleChange = (e) => {
    const value = e.target.value;
    debouncedDispatch(value);
  };

  return (
    <KeywordSearchContainer>
      <KeywordSearchInput
        type="text"
        placeholder="Find the Items you're looking for"
        onChange={(e) => handleChange(e)}
      />
      <SearchIcon />
    </KeywordSearchContainer>
  );
};

export default KeywordSearch;
