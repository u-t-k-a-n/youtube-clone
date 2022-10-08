import React from 'react'
import "../styles/css/Navbar.css"
import SearchLogo from "../img/search.png"
import AccountCircleLogo from "../img/account_circle.png"
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (

        <div className='navbar-container'>
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search" className='input' />
                    <img src={SearchLogo} alt="search" className='img' />
                </div>
                <Link to='/signin' style={{ textDecoration: "none", color: "inherit"}}>
                    <div className='sign-btn'>
                        <img src={AccountCircleLogo} alt="home" className='img' />
                        SIGN IN
                    </div>
                </Link>
            </div>
        </div>

    )
}
