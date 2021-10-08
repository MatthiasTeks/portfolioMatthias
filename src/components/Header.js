import React from 'react'
import Logo from '../assets/images/logo.png'
import '../styles/header.css'

let Header = () => {
    return (
        <div className="header">
            <img src={Logo} alt="Matthias Vimbert brand" />
            <p>Developpeur front React junior</p>
        </div>
    )
}

export default Header
