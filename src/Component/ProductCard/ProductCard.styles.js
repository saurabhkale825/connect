import { styled } from 'styled-components';

export const ProductCardContainer = styled.div`
width: auto;
height: auto;   
margin: 20px;   
`

export const ProductCardImageContainer = styled.div`
width: 100%;    
height: 100%;
border-radius: 10px;
overflow-clip-margin: content-box;
overflow: clip;
`


export const ProductImage = styled.img`
width: 100%;    
height: 100%;
object-fit: cover;
cursor: pointer;

&:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease-in-out;
}
`

export const ProductContentContainer = styled.div`
width: 100%;
height: auto;
display: flex;
justify-content: space-between;
align-items: center;
color: #ffffff;
font-weight: 600;
font-size: 16px;
`

export const ProductTitleContainer = styled.div`
width: 70%;
height: 100%;
text-align: left;
text-overflow: hidden;
`

export const ProductTitle = styled.h3`
margin: 0;
font-size: 18px;
font-weight: 600;

@media (max-width: 768px) {
width: 100%;
overflow: hidden;    
font-size: 14px;
}

@media (max-width: 480px) {
width: 100%;
overflow: hidden;    
font-size: 14px;
}
`

export const ProductCreator = styled.p`
margin: 0;
font-size: 12px;
font-weight: 400;
`

export const ProductPriceContainer = styled.div`
width: 30%;     
height: 100%;
font-size: 16px;
font-weight: 600;
color: #ffffff;
text-align: right;


@media (max-width: 480px) {
    font-size: 14px;
}

@media (max-width: 768px) {
    font-size: 14px;
}
`