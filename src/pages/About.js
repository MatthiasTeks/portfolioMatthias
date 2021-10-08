import React from 'react';
import '../style.css';
import Character from '../assets/images/character.png';

let About = () => {
    return (
        <div className='about'>
            <img src={Character} alt='matthias vimbert'/>
            <div className="aboutme">
                <h2>About me</h2>
                <p>Matthias Vimbert, 25 ans, je réside à Bordeaux et j'ai commencé à taper des lignes de code en novembre 2020. Passionné par le développement web, j'ai entamer une formation à la WildCodeSchool en 2021 afin de me reconvertir en développeur front-end spé React. </p>
            </div>
        </div>
    )
}

export default About 