import React from 'react';
import '../styles/sideBloc.css';

let SideBloc = (props) => {
    return (
        <div className={`sideBloc ${props.isActive ? "active" : ""}`} >
                <div className="sideLayout"></div> {/* Drop black filter to imgSpace */}
                <img className="sideSrc" src={props.image} alt='represent code source from this page'/>
        </div>
    )
}

export default SideBloc