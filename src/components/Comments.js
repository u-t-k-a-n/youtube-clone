import React from 'react'
import "../styles/css/Comments.css"
import Comment from './Comment'

export default function Comments() {
    return (
        <div>
            <div className='new-comment'>
                <img className='new-comment-img' alt="new comment" src='https://i2.ytimg.com/i/zRJMLe36PT0Q2mhlmbU2OQ/1.jpg' />
                <input className='new-comment-input' placeholder='Add a commment...' />
            </div>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </div>
    )
}
