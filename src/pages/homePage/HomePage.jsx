import React, { useContext } from 'react';
import ProductCard from '../../components/ProductCard';
import './HomePage.css';
import { ProductContext } from '../../context/ProductManagement';

const HomePage = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} id={product.id} name={product.name} imageSrc={product.imageSrc} price={product.price} />
      ))}
    </div>
  );
}

export default HomePage;
