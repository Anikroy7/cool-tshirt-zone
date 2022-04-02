import React, { useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './GrandPa.css'

const GrandPa = () => {
    const [house, setHouse] = useState(1);

    const addHouseHandeler = () => {
        setHouse(house + 1);
    }

    return (
        <div className='main'>
            <button onClick={addHouseHandeler}>Add House</button>
            <h4> Grandpa</h4>
            <div className='grandpa'>
                <Father house={house}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </div>

        </div>
    );
};

export default GrandPa;