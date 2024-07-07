import React from "react";

import { useProducts } from "../hooks/useProducts";

import ItemListContainerComponent from "../components/ItemListContainerComponent/ItemListContainerComponent";

const Home = () => {
  const { products } = useProducts();

  return (
    <ItemListContainerComponent products={products} />
  )
};

export default Home;
