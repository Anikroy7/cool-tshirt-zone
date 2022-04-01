import React from 'react';
import useShirts from '../../hooks/useShirts';
import Shirt from '../Shirt/Shirt'
import './Home.css';
const Home = () => {

    const [shirts, setShirts] = useShirts();

    return (
        <div>
            <div className="home-container">
                <div className="tshirts-container">

                    {
                        shirts.map(shirt => <Shirt shirt={shirt}></Shirt>)
                    }
                </div>
                <div className="cart">
                    <h1>ordered cart</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;