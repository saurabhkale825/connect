import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ProductFilterContainer,
  PriceOptionContainer,
  PriceOptionInput,
  PriceSliderContainer,
  CheckboxLabel,
  ResetButton,
  PriceSlider,
  PriceOptionTitle
} from "./ProductFilter.styles";
import {
  setPricingOptions,
  resetFilters,
  selectPricingOptions,
} from "../../features/filterSlice";

const ProductFilter = () => {
  const dispatch = useDispatch();
  const selectedOptions = useSelector(selectPricingOptions);
  const options = ["Paid", "Free", "View Only"];

  const handleCheckboxChange = (option) => {
    dispatch(setPricingOptions(option));
  };

  const handleReset = () => {
    dispatch(resetFilters());
  };

  return (
    <ProductFilterContainer>
      <PriceOptionContainer>
        <PriceOptionTitle>Pricing Option</PriceOptionTitle>
        {options.map((option) => (
          <CheckboxLabel key={option}>
            <PriceOptionInput
              type="checkbox"
              checked={selectedOptions.includes(
                option === "Paid" ? 0 : option === "Free" ? 1 : 2
              )}
              onChange={() =>
                handleCheckboxChange(
                  option === "Paid" ? 0 : option === "Free" ? 1 : 2
                )
              }
            />
            {option}
          </CheckboxLabel>
        ))}
      </PriceOptionContainer>

      <PriceSliderContainer>
        <p>0</p>
        <PriceSlider type="range" min="0" max="999" />
        <p>999</p>
      </PriceSliderContainer>

      <ResetButton onClick={handleReset}>RESET</ResetButton>
    </ProductFilterContainer>
  );
};

export default ProductFilter;
