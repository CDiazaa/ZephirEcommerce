import React from "react";
import { useProductById } from "../hooks/useProductById";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import { useParams } from "react-router-dom";

const Item = () => {
  const { id } = useParams();
  const { product } = useProductById(id);

  return <ItemDetailContainer product={product} />
};

export default Item;
