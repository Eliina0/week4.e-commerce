import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductManagement';

const ClearCartButton = () => {
    const { cleanCart } = useContext(ProductContext);
  return (
    <button onClick={cleanCart} className='clear-cart-button'>Clean Cart</button>
  )
}

export default ClearCartButton