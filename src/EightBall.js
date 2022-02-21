import React, { useState, setState } from "react";
import "./EightBall.css";

const EightBall = ({ answers }) => {
  const random = Math.floor(Math.random() * answers.length);
  const [greenCount, getGreenCount] = useState(0);
  const [redCount, getRedCount] = useState(0);
  const [goldenrodCount, getGoldenrodCount] = useState(0);
  const [msg, getMsg] = useState("Think of a question");
  const [color, getColor] = useState("black");
  const countColor = color =>
    color === "green" ? getGreenCount(greenCount + 1)
    : color === "red" ? getRedCount(redCount + 1)
    : color === "goldenrod" ? getGoldenrodCount(goldenrodCount + 1)
    : null;
  const throwBall = () => (
    getMsg(answers[random]["msg"]),
    getColor(answers[random]["color"]),
    countColor(color)
  );
  const restart = () => {
    getMsg("Think of a question");
    getColor("black");
    getGreenCount(0);
    getRedCount(0);
    getGoldenrodCount(0);
  };
  return (
    <div className="EightBall">
      <div
        onClick={throwBall}
        className="EightBall-ball"
        style={{ backgroundColor: color }}
      >
        <p className="EightBall-msg">{msg}</p>
      </div>
      <button onClick={restart} className="EightBall-reset-button">
        Restart
      </button>
      <div className="EightBall-color-count-container">
        <div className="EightBall-color-count-green">{greenCount}</div>
        <div className="EightBall-color-count-red">{redCount}</div>
        <div className="EightBall-color-count-goldenrod">{goldenrodCount}</div>
      </div>
    </div>
  );
};

export default EightBall;
