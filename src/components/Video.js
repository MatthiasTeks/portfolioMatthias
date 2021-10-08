import React, { useEffect, useRef } from 'react'
import VideoSource from '../assets/video.mp4'
import '../styles/video.css'

let Video = (props) => {

    const speed = useRef(null);

    useEffect(() => {
        speed.current.playbackRate = props.spd;
     }, [props.spd]);

    return (
        <div className="videoContainer"><video loop ref={speed} autoPlay muted src={VideoSource}/></div>
    )
}

export default Video