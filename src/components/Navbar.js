import React from 'react'
import "../styles/css/Navbar.css"
import SearchLogo from "../img/search.png"
import AccountCircleLogo from "../img/account_circle.png"

export default function Navbar() {
    return (

        <div className='navbar-container'>
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search" className='input' />
                    <img src={SearchLogo} alt="search" className='img' />
                </div>
                <div className='sign-btn'>
                    <img src={AccountCircleLogo} alt="home" className='img' />
                    SIGN IN
                </div>
            </div>
        </div>

    )
}
