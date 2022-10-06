import React from 'react'
import "../styles/css/Card.css"
import { Link } from "react-router-dom";

export default function Card({ type }) {
    return (
        <Link to="/video/test" style={{ textDecoration: "none" }}>
            <div
                className='card-container'
                style={{
                    width: type === "sm" ? "100%" : "220px",
                    marginBottom: type === "sm" ? "10px" : "40px",
                    display: type === "sm" ? "flex" : "",
                }}>
                <img
                    src='https://i.ytimg.com/vi/2g811Eo7K8U/maxresdefault.jpg'
                    alt='img'
                    className='card-img'
                    style={{
                        height: type === "sm" ? "120px" : "150px",
                        width: type === "sm" ? "120px" : "100%",
                    }}
                />
                <div className='details' style={{
                    marginTop: type === "sm" ? "-22px" : "12px",
                    marginLeft: type === "sm" ? "-35px" : ""
                }}>
                    <div className='channel-img'>
                        <img
                            src="https://i2.ytimg.com/i/zRJMLe36PT0Q2mhlmbU2OQ/1.jpg"
                            alt="img"
                            className='channel-img'
                            style={{ display: type === "sm" ? "none" : "" }}
                        />
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
