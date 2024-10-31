import React from 'react';
import { Routes as AppRoutes, Route} from 'react-router-dom';
import HomePage from '../pages/homePage/HomePage';
import CartPage from '../pages/cartPage/CartPage';
import DetailsPage from '../pages/detailsPage/DetailsPage';

const Routes = () => {
  return (
    <AppRoutes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/cart" element={<CartPage />}/>
        <Route path="/product/:id" element={<DetailsPage />}/>
    </AppRoutes>
  )
}

export default Routes