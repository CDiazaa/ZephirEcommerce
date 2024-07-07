import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {

        const storedCart = JSON.parse(localStorage.getItem('carrito'));
        if (storedCart) {
            setCarrito(storedCart);
        }
        console.log('Carrito cargado desde localStorage:', storedCart);
    }, []);

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
        console.log('Carrito guardado en localStorage:', carrito);
    }, [carrito]);

    return (
        <CartContext.Provider value={{ carrito, setCarrito }}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
