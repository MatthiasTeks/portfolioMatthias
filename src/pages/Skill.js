import React from 'react';
import '../style.css';
import ReactLog from '../assets/images/react.png'
import HtmlLog from '../assets/images/css.png'
import CssLog from '../assets/images/html.png'
import JsLog from '../assets/images/javascript.png'
import ProgressBar from 'react-bootstrap/ProgressBar'

let Skill = () => {

    const html = 80;
    const css = 80; 
    const js = 65; 
    const reacts = 70; 

    return (
        <>
        <div className='skill'>
            <div className='skillContent' id='skill1'>
                <img src={HtmlLog} alt='Logo of HTML language'/>
                <h2>HTML</h2>
                <ProgressBar variant="success" now={html} />
            </div>
            <div className='skillContent' id='skill2'>
                <img src={CssLog} alt='Logo of CSS language' />
                <h2>CSS</h2>
                <ProgressBar variant="success" now={css} />
            </div>
            <div className='skillContent' id='skill3'>
                <img src={JsLog} alt='Logo of Javascript language' />
                <h2>JS</h2>
                <ProgressBar variant="success" now={js} />
            </div>
            <div className='skillContent' id='skill4'>
                <img src={ReactLog} alt='Logo of React Language' />
                <h2>REACT</h2>
                <ProgressBar variant="success" now={reacts} />
            </div>
        </div>
        <p className="more">Ces compétences ont étaient acquises lors de ma formation à la WildCodeSchool au travers de cours théoriques et travaux pratiques de groupes. Mais, elles ont également étaient renforcées en pratiquant sur des projets personnels disponible sur mon Github. </p>
        </>
    )
}

export default Skill