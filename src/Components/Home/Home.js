import React, { useState } from 'react';
import useShirts from '../../hooks/useShirts';
import Shirt from '../Shirt/Shirt'
import './Home.css';
import Cart from '../Cart/Cart'
const Home = () => {

    const [shirts, setShirts] = useShirts();

    const [carts, setCarts] = useState([]);

    // let commad;

    // if (carts.length === 4) {
    //     commad = <p>added four items</p>
    // }
    // else if (carts.length === 0) {
    //     commad = <p>please added items...</p>
    // }


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

    const removeAllFromCart = () => {

        setCarts([]);

    }

    const removeFromCart = (product) => {
        const rest = carts.filter(pd => pd._id !== product._id)
        setCarts(rest)
    }

    return (
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
                <h3>ordered item:{carts.length}</h3>
                {/* {commad} */}

                {
                    carts.map(product => <Cart
                        products={product}
                        removeFromCart={removeFromCart}
                    ></Cart>)
                }
                {
                    carts.length > 4 ? <button onClick={removeAllFromCart}>remove all</button> : <p>please added items...</p>
                }

            </div>
        </div >
    );
};

export default Home;