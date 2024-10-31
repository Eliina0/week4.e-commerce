import React, { useContext } from 'react';
import { ProductContext } from '../../context/ProductManagement';
import './CartPage.css';
import ClearCartButton from '../../components/ClearCartButton';
import ProductCardCart from '../../components/ProductCardCart';

const CartPage = () => {
  const { getProductsInCart, getTotalPrice } = useContext(ProductContext);
  const productList = getProductsInCart();
  const totalPrice = getTotalPrice();

  if (productList.length === 0) {
    return (
      <div className='not-found'>
        <h2>No Products in Cart</h2>
        <p>Your cart is currently empty. Start adding products!</p>
      </div>
    );
  }

  return (
    <div className='cart-page'>
      <h2 className='cart-title'>Cart Summary</h2>
      <div className='cart-grid'>
        {productList.map((product) => (
          <ProductCardCart key={product.id} product={product} />
        ))}
      </div>
      <p>Total Price: ${totalPrice}</p>
      <ClearCartButton />
    </div>
  );
}

export default CartPage;
