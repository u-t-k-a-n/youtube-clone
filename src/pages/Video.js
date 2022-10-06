import React from 'react'
import "../styles/css/Video.css"
import Card from "../components/Card"
import Comments from '../components/Comments'
import ThumbUpLogo from "../img/thumb_up.png"
import ThumbDownLogo from "../img/thumb_down.png"
import ShareLogo from "../img/share.png"
import SaveLogo from "../img/save.png"

export default function Video() {
  return (
    <div className='video-container'>
      <div className='video-content'>
        <div>
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/2g811Eo7K8U"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; 
            autoplay;
            clipboard-write;
            encrypted-media;
            gyroscope; 
            picture-in-picture"
            allowfullscreen>
          </iframe>
        </div>
        <h1 className='video-title'>Video Title</h1>
        <div className='video-details'>
          <span className='video-info'>1.275.720 views</span>
          <span className='video-info' style={{ marginLeft: "-100px" }}>Jun 22 2022</span>
          <div className='video-buttons'>
            <div className='video-button'>
              <img src={ThumbUpLogo} alt="Like" className='button-logo' />
              519
            </div>
            <div className='video-button'>
              <img src={ThumbDownLogo} alt="Dislike" className='button-logo' />
              Dislike
            </div>
            <div className='video-button'>
              <img src={ShareLogo} alt="Share" className='button-logo' />
              Share
            </div>
            <div className='video-button'>
              <img src={SaveLogo} alt="Save" className='button-logo' />
              Save
            </div>
          </div>
        </div>
        <hr className='video-seperator' />
        <div className='channel'>
          <div className='channel-info'>
            <img className='channel-img' src='https://i2.ytimg.com/i/zRJMLe36PT0Q2mhlmbU2OQ/1.jpg' alt='channel'></img>
            <div className='channel-details'>
              <span className='channel-name'>Test Channel</span>
              <span className='channel-subscribers'>1.27 M subscribers</span>
              <p className='description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates, quibusdam. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptates, quibusdam. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Voluptates, quibusdam. Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
                quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Voluptates, quibusdam. Lorem ipsum dolor sit amet
              </p>
            </div>
          </div>
          <button className='subscribe-button'>SUBSCRIBE</button>
        </div>
        <hr className='video-seperator' />
        <Comments />
      </div>
      <div className='recommandation'>
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
        <Card type="sm" />
      </div>
    </div>
  )
}
