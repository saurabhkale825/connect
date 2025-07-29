import React from "react";
import {
  ProductCardContainer,
  ProductImage,
  ProductContentContainer,
  ProductTitleContainer,
  ProductTitle,
  ProductCreator,
  ProductPriceContainer,
  ProductCardImageContainer,
} from "./ProductCard.styles";

const ProductCard = ({ data }) => {
  return (
    <ProductCardContainer>
      <ProductCardImageContainer>
        <ProductImage src={data.imagePath} alt="Product" />
      </ProductCardImageContainer>

      <ProductContentContainer>
        <ProductTitleContainer>
          <ProductTitle>{data.title}</ProductTitle>
          <ProductCreator>{data.creator}</ProductCreator>
        </ProductTitleContainer>

        <ProductPriceContainer>
          {data.pricingOption === 0
            ? `$ ${data.price}`
            : (data.pricingOption === 1
            ? "FREE"
            : "View Only")}
        </ProductPriceContainer>
      </ProductContentContainer>
    </ProductCardContainer>
  );
};

export default ProductCard;
