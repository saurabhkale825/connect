import React from "react";
import {
  ProductFilterContainer,
  PriceOptionContainer,
  PriceSliderContainer,
  CheckboxLabel,
  ResetButton,
  PriceSlider
} from "./ProductFilter.styles";

const ProductFilter = () => {
  const options = ["Paid", "Free", "View Only"];

  return (
    <ProductFilterContainer>
      <PriceOptionContainer>
        <p>Pricing Option</p>
        {options.map((option) => (
          <CheckboxLabel key={option}>
            <input type="checkbox" />
            {option}
          </CheckboxLabel>
        ))}
      </PriceOptionContainer>

      <PriceSliderContainer>
        <p>0</p>
        <PriceSlider type="range" min="0" max="999" />
        <p>999</p>
      </PriceSliderContainer>

      <ResetButton>RESET</ResetButton>
    </ProductFilterContainer>
  );
};

export default ProductFilter;
