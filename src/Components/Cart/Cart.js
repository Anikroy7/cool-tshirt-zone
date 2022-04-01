import React from 'react';
import './Cart.css';
const Cart = ({ products, removeFromCart }) => {
    return (
        <div className='cart'>
            <h5>{products.name} <button onClick={() => removeFromCart(products)}>delete</button></h5>

        </div>
    );
};

export default Cart;