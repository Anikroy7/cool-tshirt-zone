import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './GrandPa.css';


export const GiftContext = createContext('cat');

const GrandPa = () => {
    const [house, setHouse] = useState(1);

    const ornament = 'diamond';

    const addHouseHandeler = () => {
        setHouse(house + 1);
    }

    return (
        <GiftContext.Provider value={house}>
            <div className='main'>
                <button onClick={addHouseHandeler}>Add House</button>
                <h4> Grandpa</h4>
                <h3>house: {house}</h3>
                <div className='grandpa'>
                    <Father ornament={ornament} house={house}></Father>
                    <Uncle house={house}></Uncle>
                    <Aunty house={house}></Aunty>
                </div>

            </div >
        </GiftContext.Provider >
    );
};

export default GrandPa;