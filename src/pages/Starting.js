import React from "react";
import { Link } from 'react-router-dom'
import CurvedText from "../components/CurvedText";
import Logo from '../assets/images/logo.png';
import '../style.css'

export default function Starting (props) {

  const {funcGame} = props;

  return (
    <>
        <div className='wrapper'>
            <CurvedText text="Portfolio Matthias" arc={100} radius={435} />
            <img src={Logo} alt='Matthias Vimbert' />
            <p>Do you want to play?</p>
            <Link to ="/about"><button className="buttonPlay" onClick={funcGame}>PLAY!</button></Link>
        </div>
    </>
  );
}