import React from 'react';
import Brother from '../Brother/Brother';
import MySelf from '../MySelf/Myself';
import Sister from '../Sister/Sister';
import './Father.css';
const Father = ({ house }) => {
    return (
        <div>
            <h3>Father</h3>
            <h4>House: {house}</h4>
            <div className='father' style={{ display: 'flex' }}>
                <MySelf house={house}></MySelf>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </div>
        </div >
    );
};

export default Father;