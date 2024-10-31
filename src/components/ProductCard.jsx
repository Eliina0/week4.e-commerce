import React from 'react';
import { useNavigate } from 'react-router-dom';
import QuantityButtons from './QuantityButtons';

const ProductCard = ({id, name, imageSrc, price }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${id}`)
    }
  return (
    <div className="product-card">
      <img src={imageSrc} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">${price.toFixed(2)}</p>
      <div className='quantity-buttons-container'><QuantityButtons id={id} /></div>
      <button onClick={handleClick}>View More</button>
    </div>
  );
}

export default ProductCard;
