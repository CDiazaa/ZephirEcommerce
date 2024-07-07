import React, { useContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

const ItemDetailContainer = ({ product }) => {
  const { carrito, setCarrito } = useContext(CartContext);

  const handleAddToCart = (cantidad) => {
    console.log(`Agregado al carrito: ${product.title}, Cantidad: ${cantidad}`);

    setCarrito(prevCarrito => {
      const existingProductIndex = prevCarrito.findIndex(item => item.id === product.id);
      let updatedCarrito;
      if (existingProductIndex >= 0) {

        updatedCarrito = [...prevCarrito];
        const existingProduct = updatedCarrito[existingProductIndex];
        console.log(`Cantidad antes: ${existingProduct.cantidad}`);
        existingProduct.cantidad += cantidad;
        console.log(`Cantidad después: ${existingProduct.cantidad}`);
      } else {

        updatedCarrito = [...prevCarrito, { ...product, cantidad }];
        console.log('Producto nuevo añadido al carrito');
      }


      updatedCarrito.forEach(item => {
        console.log(`Producto: ${item.title}, Cantidad: ${item.cantidad}`);
      });

      return updatedCarrito;
    });
  };
  return (
    <div className="itemDet">
      <img src={product.thumbnail} alt={product.title} />
      <div style={{ marginLeft: 100 }}>
        <h1 className="titleP">{product.title}</h1>
        <p className="paragraphDP" >{product.description}</p>
        <p className="paragraphDP">${product.price}</p>
        <ItemCount onAdd={handleAddToCart} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
