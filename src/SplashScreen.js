import React from 'react';
import { useNavigate } from 'react-router-dom';
import gamePictureLogo from './Photos/gamePictureLogo.png';

function SplashScreen() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/login-form');
  };

  const styleSheet = (
    <style>
      {`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      `}
    </style>
  );

  return (
    <div style={splashStyle} onClick={handleStart}>
      {styleSheet}
      <img src={gamePictureLogo} alt="Game Logo" style={imageStyle} />
    </div>
  );
}

const splashStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
  height: '100vh',
  backgroundColor: '#84BCC8',
  cursor: 'pointer',
};

const imageStyle = {
  width: '50%',
  height: 'auto',
  animation: 'pulse 3s infinite',
};

export default SplashScreen;
