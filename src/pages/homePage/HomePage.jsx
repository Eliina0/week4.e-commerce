import React, { useContext } from 'react';
import ProductCard from '../../components/ProductCard';
import './HomePage.css';
import { ProductContext } from '../../context/ProductManagement';

const HomePage = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="product-grid">
      {(!products || products.length === 0) ? (
        <div className='not-found'>
          <h2>No Products Available</h2>
          <p>Currently, there are no products to display. Please check back later!</p>
        </div>
      ) : (
        products.map((product) => (
          <ProductCard 
            key={product.id} 
            id={product.id} 
            name={product.name} 
            imageSrc={product.imageSrc} 
            price={product.price} 
          />
        ))
      )}
    </div>
  );
};

export default HomePage;
