import React from 'react';
import './Shirt.css'
const Shirt = (props) => {

    const { name, picture, price } = props.shirt;
    return (
        <div className='shirt-container'>
            <img src={picture} alt="" />
            <h3>Name: {name}</h3>
            <p>price: {price}</p>
            <button className='cart-btn'>add to cart</button>
        </div>
    );
};

export default Shirt;