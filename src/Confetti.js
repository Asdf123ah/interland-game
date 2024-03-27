import React from "react";
import Confetti from "react-confetti";
import useWindowSize from "./useWindowSize.js";

const ConfettiEffect = ({ numberOfPieces }) => {
  const { width, height } = useWindowSize();

  return (
    <Confetti width={width} height={height} numberOfPieces={numberOfPieces} />
  );
};

export default ConfettiEffect;
