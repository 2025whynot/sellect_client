import React from "react";
import styled from "styled-components";
import { ProductCard } from "./ProductCard";

const products = [
  {
    image: "🖤",
    name: "Wireless Headphones",
    description: "Premium sound with noise cancellation",
    price: "129.99",
  },
  {
    image: "⌚",
    name: "Smart Watch",
    description: "Track your fitness and stay connected",
    price: "199.99",
  },
  {
    image: "🎒",
    name: "Laptop Backpack",
    description: "Water-resistant with multiple compartments",
    price: "59.99",
  },
  {
    image: "⚡",
    name: "Wireless Charger",
    description: "Fast charging for all devices",
    price: "39.99",
  },
  {
    image: "⚡",
    name: "Wireless Charger",
    description: "Fast charging for all devices",
    price: "39.99",
  },
  {
    image: "⚡",
    name: "Wireless Charger",
    description: "Fast charging for all devices",
    price: "39.99",
  },
  {
    image: "⚡",
    name: "Wireless Charger",
    description: "Fast charging for all devices",
    price: "39.99",
  },
  {
    image: "⚡",
    name: "Wireless Charger",
    description: "Fast charging for all devices",
    price: "39.99",
  },
  {
    image: "⚡",
    name: "Wireless Charger",
    description: "Fast charging for all devices",
    price: "39.99",
  },
];

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 한 줄에 4개 */
  gap: 20px;
  justify-content: start;
`;

export const ProductList = () => {
  return (
    <Grid>
      {products.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          name={product.name}
          description={product.description}
          price={product.price}
        />
      ))}
    </Grid>
  );
};