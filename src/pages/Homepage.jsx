import React from "react";
import KeywordSearch from "../Component/KeywordSearch/KeywordSearch";
import Content from "../Component/Content/Content";
import ProductFilter from "../Component/ProductFilter/ProductFilter";

const Homepage = () => {
  return (
    <div className="homepage">
      <KeywordSearch />
      <ProductFilter />
      <Content />
    </div>
  );
};

export default Homepage;
