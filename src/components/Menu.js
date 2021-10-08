import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import axios from 'axios';
import Cv from '../assets/cv.pdf'
import '../styles/menu.css'

let Menu = (props) => {

    const {funcMenu} = props;

    function download(){ /* function that will allow you to download the resume on click (connected to axios). */
        axios({
            url: Cv, 
            method: 'GET',
            responseType: 'blob'
        })
            .then((response) => {
                const url = window.URL 
                    .createObjectURL(new Blob([response.data])); 
                const link = document.createElement('a'); 
                link.href = url; 
                link.setAttribute('download', 'cv.pdf'); 
                document.body.appendChild(link); 
                link.click(); 
                document.body.removeChild(link); 
            })
    }


    return (
        <div className="userMenu">
                <Link to="/about"><button className="buttonUser" autoFocus>Home</button></Link>
                <Link to="/skill"><button className="buttonUser">Skill</button></Link>
                <Link to="/portfolioPage"><button className="buttonUser">Portfolio</button></Link>
                <Link to="/contact"><button className="buttonUser">Contact</button></Link>
                <button className="buttonUser" onClick={() => download()}>CV</button>
        </div>
    )
}

export default Menu