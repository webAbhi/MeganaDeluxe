// components/Product.js
import React from 'react';
import styled from 'styled-components';

const ProductCard = styled.div`
  width: 350px;
  padding: 1em;
  border: 1px solid #ddd;
  border-radius: 8px;
  text-align: center;
  overflow: hidden;
  position: relative;
  
  &:hover .overlay {
    opacity: 1;
  }
`;

const ProductImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 257px;
  overflow: hidden;
  border-radius: 8px 8px 0 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.3s ease;
    margin: 0 !important;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  flex-direction: column;
  opacity: 0;
  transition: opacity 0.3s ease;
  gap: 1em;
`;

const OverlayButton = styled.button`
  background: transparent;
  color: #EAEBED;
  padding: 0.5em 1em;
  border: 1px solid #EAEBED;
  border-radius: 2px;
  font-weight: bold;
  cursor: pointer;
  transition: opacity 0.8s ease;

  &:hover {
    opacity: 0.7;
    background-color: #10263C;
    border: none;
  }
`;

const ProductDetails = styled.div`
  padding: 1em;
  margin: 0;
  text-align: left;
  background-color: #DFDFDF;
  
  h4 {
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: -5px;
    margin-top: 0;
  }

  p {
    font-size: 1em;
    color: #555;
    margin: 0
  }

  .price {
    font-weight: bold;
    color: #000;
    font-size: 1.1em;
  }
`;

const Product = ({ image, heading, subheading, price }) => (
  <ProductCard>
    <ProductImageWrapper>
      <img src={image} alt={heading} />
      <Overlay className="overlay">
        <OverlayButton>
            Add to Cart 
        </OverlayButton>
        <OverlayButton>View Details</OverlayButton>
      </Overlay>
    </ProductImageWrapper>
    <ProductDetails>
      <h4>{heading}</h4>
      <p>{subheading}</p>
      <p className="price">${price}</p>
    </ProductDetails>
  </ProductCard>
);

export default Product;
