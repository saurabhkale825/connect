import React from "react";
import {
  KeywordSearchContainer,
  KeywordSearchInput,
} from "./KeywordSearch.styles";
import SearchIcon from "@mui/icons-material/Search";

const KeywordSearch = () => {
  return (
    <KeywordSearchContainer>
      <KeywordSearchInput
        type="text"
        placeholder="Find the Items you're looking for"
        onChange={(e) => console.log(e.target.value)}
      />
      <SearchIcon />
    </KeywordSearchContainer>
  );
};

export default KeywordSearch;
