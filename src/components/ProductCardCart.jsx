import React from 'react';
import QuantityButtons from './QuantityButtons';

const ProductCardCart = ({ product }) => {
    return (
        <li key={product.id} className='cart-item'>
            <img src={product.imageSrc} alt={product.name} className='cart-image' />
            <div className="product-details">
                <h3>{product.name}</h3>
                <p>Total Price: {product.price} x {product.quantity} = ${(product.price * product.quantity).toFixed(2)}</p>
                <div className="quantity-container">
                    <QuantityButtons id={product.id} />
                </div>
            </div>
        </li>
    );
};

export default ProductCardCart;
