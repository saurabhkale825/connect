import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ProductFilterContainer,
  PriceOptionContainer,
  PriceOptionInput,
  PriceSliderContainer,
  CheckboxLabel,
  ResetButton,
  PriceSlider,
  PriceOptionTitle,
} from "./ProductFilter.styles";
import {
  setPricingOptions,
  resetFilters,
  selectPricingOptions,
  setFiltersFromQuery,
} from "../../features/filterSlice";
import { useSearchParams } from "react-router-dom";

const ProductFilter = () => {
  const dispatch = useDispatch();
  const options = ["Paid", "Free", "View Only"];
  const selectedOptions = useSelector(selectPricingOptions);
  const [searchParams, setSearchParams] = useSearchParams();

  // Initialize filter options from URL parameters
  useEffect(() => {
    const filterParam = searchParams.get("filter");
    if (filterParam) {
      const optionsFromUrl = filterParam.split(",");
      dispatch(setFiltersFromQuery({ pricingOptions: optionsFromUrl }));
    }
  }, [dispatch, searchParams]);

  const handleCheckboxChange = (option) => {
    dispatch(setPricingOptions(option));
  };

  const handleReset = () => {
    dispatch(resetFilters());
    searchParams.delete("filter");
    searchParams.delete("search");
    setSearchParams(searchParams);
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

      {/* <PriceSliderContainer>
        <p>0</p>
        <PriceSlider type="range" min="0" max="999" />
        <p>999</p>
      </PriceSliderContainer> */}

      <ResetButton onClick={handleReset}>RESET</ResetButton>
    </ProductFilterContainer>
  );
};

export default ProductFilter;
