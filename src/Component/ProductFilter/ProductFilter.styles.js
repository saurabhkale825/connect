import { styled } from 'styled-components';

export const ProductFilterContainer = styled.div`
    widtgh: 100%;
    height: 7vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #000000dd;

    @media (max-width: 768px) {
     
    }
`


export const PriceOptionContainer = styled.div`
    width : 25%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: 1200px) {

    }
`

export const PriceOptionTitle = styled.p`
  
       @media (max-width: 1200px) {
    font-size: 0.8rem;
    }

    @media (max-width: 768px) {
    font-size: 0.6rem;  
}
    @media (max-width: 480px) {
    font-size: 0.4rem;  
}
`

export const PriceOptionInput = styled.input`
    font-size: 1.2rem;

       @media (max-width: 1200px) {
    font-size: 1rem;
    }

    @media (max-width: 768px) {
    font-size: 0.8rem;  
}
    @media (max-width: 480px) {
    font-size: 0.6rem;  
}
`

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
        @media (max-width: 1200px) {
    font-size: 1rem;
    }

    @media (max-width: 768px) {
    font-size: 0.8rem;  
}
    @media (max-width: 480px) {
    font-size: 0.6rem;  
}
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
  margin: 0 10%;

  @media (max-width: 768px) {
  margin: 0 20%;
  }
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
