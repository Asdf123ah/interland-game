import React from 'react';
import { useNavigate } from 'react-router-dom';
import gamePictureLogo from './Photos/gamePictureLogo.png';
import './SplashScreen.css';

function SplashScreen() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/login-form');
  };

  return (
    <div className='splash-screen' onClick={handleStart}>
      <img className='image-splash' src={gamePictureLogo} alt="Game Logo" />
    </div>
  );
}

export default SplashScreen;
