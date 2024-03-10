import React from 'react';
import Confetti from 'react-confetti';
import useWindowSize from './useWindowSize.js'; // Import the custom hook from the local file

const ConfettiEffect = ({ numberOfPieces  }) => {
  const { width, height } = useWindowSize();

  return <Confetti width={width} height={height} numberOfPieces={numberOfPieces}/>;
};

export default ConfettiEffect;
