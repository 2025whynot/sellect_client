import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 200px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 왼쪽 정렬 */
  position: relative;
`;

const ProductImage = styled.div`
  background-color: #e5e5e5;
  border-radius: 8px;
  height: 150px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

const ProductName = styled.h3`
  font-size: 16px;
  font-weight: bold;
  width: 90%;
  margin: 8px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 8px; /* 왼쪽 여백 추가 */
`;

const Price = styled.div`
  font-size: 16px;
  margin: 8px 0;
  padding-left: 8px; /* 왼쪽 여백 추가 */
`;

export const ProductCard = ({ image, name, price }) => {
  return (
    <Card>
      <ProductImage>{image}</ProductImage>
      <ProductName>{name}</ProductName>
      <Price>${price}</Price>
    </Card>
  );
};
