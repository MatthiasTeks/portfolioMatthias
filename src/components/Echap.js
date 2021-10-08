import React from 'react'
import { Link } from 'react-router-dom'
import { BsPower } from "react-icons/bs";
import '../styles/echap.css'

let Echap = (props) => {

    let {funcLeave} = props;

    return (
        <Link to="/portfolioMatthias/">
            <div className='echap' onClick={funcLeave}>
            <h1>ECHAP</h1> <BsPower />
            </div>
        </Link>
    )
}

export default Echap