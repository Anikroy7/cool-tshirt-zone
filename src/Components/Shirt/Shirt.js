import React from 'react';
import './Shirt.css'
const Shirt = ({ handelAddToCart, shirt }) => {
    const { name, picture, price } = shirt;
    return (
        <div className='shirt-container'>
            <img src={picture} alt="" />
            <h3>Name: {name}</h3>
            <p>price: {price}</p>
            <button onClick={() => handelAddToCart(shirt)} className='cart-btn'>add to cart</button>
        </div >
    );
};

export default Shirt;