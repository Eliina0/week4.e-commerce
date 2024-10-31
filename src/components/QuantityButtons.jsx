import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductManagement';

const QuantityButtons = ({ id }) => {
    const { addItem, removeItem, getQuantity } = useContext(ProductContext);
    const quantity = getQuantity(id);

    return (
        <div className="cart-controls">
            <button className="cart-button" onClick={() => addItem(id)}>+</button>
            <span className="quantity-display">Added to cart: {quantity}</span>
            <button className="cart-button" onClick={() => removeItem(id)}>-</button>
        </div>
    );
};

export default QuantityButtons;
