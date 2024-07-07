import React from "react";
import { getProductById } from "../services/products";

export const useProductById = (id) => {
  const [product, setProduct] = React.useState({});
  const [error, setError] = React.useState(false);
  React.useEffect(() => {
    getProductById(id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        setError(true)
      })
  }, [id]);

  return { product };
};
