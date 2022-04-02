import React from 'react';
import Brother from '../Brother/Brother';
import MySelf from '../MySelf/Myself';
import Sister from '../Sister/Sister';
import './Father.css';
const Father = ({ house, ornament }) => {
    return (
        <div>
            <h3>Father</h3>
            <h4>House: {house}</h4>
            <div className='father' style={{ display: 'flex' }}>
                <MySelf ornament={ornament} house={house}></MySelf>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </div>
        </div >
    );
};

export default Father;