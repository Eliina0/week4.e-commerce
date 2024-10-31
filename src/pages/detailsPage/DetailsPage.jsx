import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import './DetailsPage.css';
import { ProductContext } from '../../context/ProductManagement';
import QuantityButtons from '../../components/QuantityButtons';

const DetailsPage = () => {
  const { getOneProduct } = useContext(ProductContext);
  const { id } = useParams();
  const product = getOneProduct(id);
  
 if(!product) {
  return (
    <div className='not-found'>
      <h2>Product Not Found</h2>
      <p>Sorry, we couldn't find the product you were looking for.</p>
    </div>
  )
 }

  return (
    <div className="details-page"> 
    <img src={product.imageSrc} alt={product.name} className="details-image" /> 
      <div className="details-info"> 
        <h2>{product.name}</h2>
        <p>Price: ${product.price.toFixed(2)}</p>
        <p>{product.description}</p>
        <QuantityButtons id={product.id} />
      </div>

    </div>
  );
}

export default DetailsPage