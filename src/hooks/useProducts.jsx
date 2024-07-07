import React from "react";
import { getAllProducts } from "../services/products";

export const useProducts = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    getAllProducts()
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.error(error);
      })
  }, []);

  return { products };
};
