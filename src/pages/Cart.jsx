import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
    const { carrito, setCarrito } = useContext(CartContext);

    const calcularPrecioTotal = (item) => {
        return item.cantidad * item.price;
    };

    const calcularTotalGlobal = () => {
        return carrito.reduce((total, item) => total + calcularPrecioTotal(item), 0);
    };

    const handleRemoveFromCart = (productId) => {
        setCarrito(prevCarrito => prevCarrito.filter(item => item.id !== productId));
    };

    return (
        <div className='containerCarrito'>
            <h1 className="titleP">Checkout</h1>
            {carrito.length === 0 ? (
                <p className="paragraphDP">Tu carrito esta vacío</p>
            ) : (
                <div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Imagen</th>
                                <th>Nombre</th>
                                <th>Precio Unitario</th>
                                <th>Cantidad</th>
                                <th>Precio Total</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {carrito.map((item) => (
                                <tr key={item.id}>
                                    <td>
                                        <img src={item.thumbnail} alt={item.title} style={{ width: '50px', height: 'auto' }} />
                                    </td>
                                    <td>{item.title}</td>
                                    <td>${item.price.toFixed(2)}</td>
                                    <td>{item.cantidad}</td>
                                    <td>${calcularPrecioTotal(item).toFixed(2)}</td>
                                    <td>
                                        <button className="verMasB textsButton" onClick={() => handleRemoveFromCart(item.id)}>Quitar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p className="paragraphDP">Total de ítems en el carrito: {carrito.reduce((total, item) => total + item.cantidad, 0)}</p>
                    <p className="paragraphDP">Total Global: ${calcularTotalGlobal().toFixed(2)}</p>
                </div>
            )}
        </div>
    );
};

export default Cart;