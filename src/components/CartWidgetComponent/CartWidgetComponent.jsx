import React, { useContext } from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';

const CartWidget = () => {
  const { carrito } = useContext(CartContext);

  const totalCantidad = carrito.reduce((total, item) => total + item.cantidad, 0);

  return (
    <div>
      <Link className="cartPage" to="/cart/">
        <AiOutlineShopping className="cartWidget" />
        <span className="numberWidget">{totalCantidad}</span>
      </Link>
    </div>
  );
};

export default CartWidget
