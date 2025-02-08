import React from "react";
import styled from "styled-components";

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 300px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

export const SearchBar = () => {
  return (
    <SearchContainer>
      <Input type="text" placeholder="Search products..." />
    </SearchContainer>
  );
};