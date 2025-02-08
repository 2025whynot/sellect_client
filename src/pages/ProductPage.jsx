import React from "react";
import styled from "styled-components";
import { SearchBar } from "../components/SearchBar";
import { ProductList } from "../components/ProductList";

const PageContainer = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 20px;
`;

export const ProductPage = () => {
  return (
    <PageContainer>
      <SearchBar />
      <ProductList />
    </PageContainer>
  );
};