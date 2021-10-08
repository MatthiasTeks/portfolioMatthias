import React from 'react'
import '../styles/footer.css'

/* ICONS IMPORT */
import { SiInstagram } from 'react-icons/si'
import { SiTwitter } from 'react-icons/si'
import { SiGithub } from 'react-icons/si'
import { SiLinkedin } from 'react-icons/si'

let Footer = () => {
    return (
        <div className='footer'>
            <h2>Connection</h2>
            <hr/>
            <div className="socialIcons">
                <a href='https://www.instagram.com/matt.lz/?hl=fr' target='_blank' rel="noreferrer"> <SiInstagram /> </a>
                <a href='https://twitter.com/TeksPL' target='_blank' rel="noreferrer"> <SiTwitter /> </a>
                <a href='https://www.linkedin.com/in/matthias-vimbert-12129b139/' target='_blank' rel="noreferrer"><SiLinkedin /> </a>
                <a href='https://github.com/MatthiasTeks' target='_blank' rel="noreferrer"> <SiGithub /> </a>
            </div>
        </div>
    )
}

export default Footer