import React from 'react'
import "../styles/css/Comment.css"

export default function Comment() {
    return (
        <div className='comment-container'>
            <img className='comment-img' alt='comment' src='https://i2.ytimg.com/i/zRJMLe36PT0Q2mhlmbU2OQ/1.jpg' />
            <div className='comment-details'>
                <span className='comment-name'>
                    Test Channel
                    <span className='comment-date'> 1 day ago</span>
                </span>
                <span className='comment-text'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, ex
                    laboriosam ipsam aliquam voluptatem perferendis provident modi, sequi
                    tempore reiciendis quod, optio ullam cumque?
                </span>
            </div>
        </div>
    )
}
