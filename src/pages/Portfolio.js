import React from 'react';
import '../style.css';

let Portfolio = () => {
    return (
        <div className='portfolio'>
            <h2>Mes réalisations</h2>
            <hr/>
            <div className='list' id='box1'>
                <div className='box'></div>
                <div className='box' ></div>
            </div>
            <div className='list' id='box2'>
                <div className='box'></div>
                <div className='box'></div>
            </div>
        </div>
    )
}

export default Portfolio