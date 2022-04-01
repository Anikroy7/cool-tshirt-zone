import React, { useState } from 'react';
import useShirts from '../../hooks/useShirts';
import Shirt from '../Shirt/Shirt'
import './Home.css';
import Cart from '../Cart/Cart'
const Home = () => {

    const [shirts, setShirts] = useShirts();

    const [carts, setCarts] = useState([]);

    const handelAddToCart = cart => {
        const exists = carts.find(pd => pd._id === cart._id);
        if (!exists) {

            const newCart = [...carts, cart];
            setCarts(newCart);
        }
        else {
            alert('already added')
        }

    }

    const removeFromCart = (product) => {
        const rest = carts.filter(pd => pd._id !== product._id)
        setCarts(rest)
    }

    return (
        <div>
            <div className="home-container">
                <div className="tshirts-container">

                    {
                        shirts.map(shirt => <Shirt
                            shirt={shirt}
                            handelAddToCart={handelAddToCart}
                        ></Shirt>)
                    }
                </div>
                <div className="cart-container">
                    <h2>ordered cart:{carts.length}</h2>

                    {
                        carts.map(product => <Cart
                            products={product}
                            removeFromCart={removeFromCart}
                        ></Cart>)
                    }

                </div>
            </div>
        </div >
    );
};

export default Home;