import React from 'react';
import Special from '../Special/Special';

const Myself = ({ house, ornament }) => {
    return (
        <div>
            <h3>Myself</h3>
            <h4>House: {house}</h4>
            <Special house={house} ornament={ornament}></Special>
        </div>
    );
};

export default Myself;