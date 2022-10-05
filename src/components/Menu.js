import React from 'react'
import YoutubeLogo from "../img/youtube-logo.png"
import "../styles/css/Menu.css"
import { Link } from 'react-router-dom'
import HomeLogo from "../img/home.png"
import ExploreLogo from "../img/explore.png"
import SubscriptionsLogo from "../img/subscriptions.png"
import VideoLibraryLogo from "../img/video_library.png"
import HistoryLogo from "../img/history.png"
import AccountCircleLogo from "../img/account_circle.png"
import GamingLogo from "../img/gaming.png"
import SportsLogo from "../img/sports.png"
import LiveLogo from "../img/live.png"
import SettingsLogo from "../img/settings.png"
import FlagLogo from "../img/flag.png"
import HelpLogo from "../img/help.png"
import SettingsBrightnessLogo from "../img/settings_brightness.png"



export default function Menu({ theme, toggleTheme }) {

    return (
        <div >
            <div className='container' >
                <div>
                    <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                        <div className='d-flex align-items-center' style={{ fontWeight: "bold", marginBottom: "25px", fontSize: "1.2rem", cursor:"pointer" }}>
                            <img src={YoutubeLogo} alt="youtube-logo" style={{ height: "50px" }} />
                            YouTube
                        </div>
                        <div className='item'>
                            <img src={HomeLogo} alt="home" className='img' />
                            Home
                        </div>
                        <div className='item'>
                            <img src={ExploreLogo} alt="home" className='img' />
                            Explore
                        </div>
                        <div className='item'>
                            <img src={SubscriptionsLogo} alt="home" className='img' />
                            Subscriptions
                        </div>
                        <div className='seperator'></div>
                        <div className='item'>
                            <img src={VideoLibraryLogo} alt="home" className='img' />
                            Library
                        </div>
                        <div className='item'>
                            <img src={HistoryLogo} alt="home" className='img' />
                            History
                        </div>
                        <div className='seperator'></div>
                        <div className='login'>
                            Sign in to like videos, comment,
                            <div>and subscribe.</div>
                            <div className='button'>
                                <img src={AccountCircleLogo} alt="home" className='img' />
                                SIGN IN
                            </div>
                        </div>
                        <div className='seperator'></div>
                        <h2 className='title'>BEST OF YOUTUBE</h2>
                        <div className='item'>
                            <img src={GamingLogo} alt="home" className='img' />
                            Gaming
                        </div>
                        <div className='item'>
                            <img src={SportsLogo} alt="home" className='img' />
                            Sports
                        </div>
                        <div className='item'>
                            <img src={LiveLogo} alt="home" className='img' />
                            Live
                        </div>
                        <div className='seperator'></div>
                        <div className='item'>
                            <img src={SettingsLogo} alt="home" className='img' />
                            Settings
                        </div>
                        <div className='item'>
                            <img src={FlagLogo} alt="home" className='img' />
                            Report
                        </div>
                        <div className='item'>
                            <img src={HelpLogo} alt="home" className='img' />
                            Help
                        </div>
                        <div className='item' onClick={toggleTheme}>
                            <img src={SettingsBrightnessLogo} alt="home" className='img' />
                            {theme === "dark" ? "Dark" : "Light"} Mode
                        </div>
                    </Link>
                </div>
            </div>
        </div >
    )
}
