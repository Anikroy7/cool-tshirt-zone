import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h1>Welcome to Cool-TShirt-Zone</h1>
            <nav className='navbar'>
                <Link to={'/home'}>Home</Link>
                <Link to={'/orderreview'}>Order Review</Link>
                <Link to={'/grandpa'}>Grandpa</Link>
            </nav>
        </div>
    );
};

export default Header;