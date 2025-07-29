import { styled } from 'styled-components';

export const ProductFilterContainer = styled.div`
    widtgh: 100%;
    height: 7vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
`


export const PriceOptionContainer = styled.div`
    width : 40%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const ResetButton = styled.button`
  margin-left: auto;
  padding: 6px 12px;
  color: white;
  border: none;
  background-color: transparent;
  border-radius: 4px;
  cursor: pointer;
`;

export const PriceSliderContainer = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
    align-items: center;
    margin: 0 10px;
`

export const PriceSlider = styled.input`
    width: 100%;    
    height: 5px;
    -webkit-appearance: none;   
    background: #ddd;
    border-radius: 5px;
    outline: none;
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background: #4CAF50;
        cursor: pointer;
    }
        `
