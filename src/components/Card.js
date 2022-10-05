import React from 'react'
import "../styles/css/Card.css"
import { Link } from "react-router-dom";

export default function Card() {
    return (
        <Link to="/video/test" style={{textDecoration:"none"}}>
        <div className='card-container'>
            <img src='https://i.ytimg.com/vi/2g811Eo7K8U/maxresdefault.jpg' alt='img' className='card-img' />
            <div className='details'>
                <div className='channel-img'>
                    <img src="https://i2.ytimg.com/i/zRJMLe36PT0Q2mhlmbU2OQ/1.jpg" alt="img" className='channel-img'/>
                </div>
                <div>
                    <h1 className='video-title'>Test Video</h1>
                    <h2 className='channel-name'>Test Channel</h2>
                    <div className='info'>1M views • 1 day ago</div>
                </div>
            </div>
        </div>
        </Link>
    )
}
