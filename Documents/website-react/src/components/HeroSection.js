import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import VideoHome from '../video/videoHome.mp4';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video  autoPlay loop muted >
      <source src= {VideoHome}  type="video/mp4" />

      </video>
      <h1>Você Merece boas memórias!</h1>
      <p>O que você está esperando?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          SABER MAIS
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          ASSISTIR VIDEO <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
