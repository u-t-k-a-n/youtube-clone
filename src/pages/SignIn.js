import React from 'react'
import "../styles/css/SignIn.css"

export default function SignIn() {
    return (
        <div className='sign-in-container'>
            <div className="sign-in-wrapper">
                <h1 className='title'>Sign in</h1>
                <h2 className='subtitle'>to your account</h2>
                <input type="text" placeholder='Username' className='sign-in-input' />
                <input type="password" placeholder='Password' className='sign-in-input' />
                <button className='sign-in-button'>Sign in</button>
                <h1 className='title'>or</h1>
                <input type="text" placeholder='Username' className='sign-in-input' />
                <input type="email" placeholder='Email' className='sign-in-input' />
                <input type="password" placeholder='Password' className='sign-in-input' />
                <button className='sign-in-button'>Sign up</button>
            </div>
            <div className="more">
                English (United States)
                <div className="links">
                    <span className='link'>Help</span>
                    <span className='link'>Privacy</span>
                    <span className='link'>Terms</span>
                    </div>
            </div>
        </div>
    )
}
