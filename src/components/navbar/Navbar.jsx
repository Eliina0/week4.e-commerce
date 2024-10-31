import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CartButton from './CartButton';
import ThemeSwitchButton from './ThemeSwitchButton';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="layout_nav">
            <div className="nav_project_name">ShoppingApp</div> 
            <div className="nav_links">
                <Link to="/" className={`nav_link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                <Link to="/cart" className={`nav_link ${location.pathname === '/cart' ? 'active' : ''}`}>Cart</Link>
            </div>
            <div className="nav_actions">
                <CartButton />
                <ThemeSwitchButton />
            </div>
        </nav>
    );
}

export default Navbar;
