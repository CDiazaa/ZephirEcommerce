import React, { useContext, useState } from 'react'

const ItemCount = ({ onAdd }) => {

    const [cantidad, setCantidad] = useState(1);
    const [mensaje, setMensaje] = useState('');

    const handleRestar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
            if (cantidad <= 10) {
                setMensaje('');
            }
        }
    };

    const handleSumar = () => {
        if (cantidad < 10) {
            setCantidad(cantidad + 1);
            setMensaje('');
        } else {
            setMensaje('Límite alcanzado');
        }
    };

    const handleAgregar = () => {
        onAdd(cantidad);
    }

        ; return (
            <div>
                <div className='item-count'>
                    <button className='verMasB textsButton' onClick={handleRestar}>-</button>
                    <p className="paragraphDP">{cantidad}</p>
                    <button className='verMasB textsButton' onClick={handleSumar}>+</button>
                    {mensaje && <p>{mensaje}</p>}
                </div>
                <button className='verMasB textsButton' onClick={handleAgregar}>Agregar al carrito</button>
            </div>
        )
}

export default ItemCount