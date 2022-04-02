import React, { useContext } from 'react';
import { GiftContext } from '../GrandPa/GrandPa';

const Special = () => {

    const gift = useContext(GiftContext)
    return (
        <div>
            <h3>Girlfriend</h3>
            <h4>house: {gift}</h4>

        </div>
    );
};

export default Special;