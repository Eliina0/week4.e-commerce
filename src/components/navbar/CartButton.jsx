import React, { useContext } from 'react';
import { PiShoppingCart } from "react-icons/pi";
import { ProductContext } from '../../context/ProductManagement';

const CartButton = () => {
    const { getTotalItems } = useContext(ProductContext);

    return (
        <div className="cart_button">
        <p>{getTotalItems()}</p>
        <PiShoppingCart/>
    </div>
    )
};

export default CartButton;
