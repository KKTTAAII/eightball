import React, { useState } from "react";
import "./EightBall.css";

const EightBall = ({ answers }) => {
  const random = Math.floor(Math.random() * answers.length);
  const [msg, getMsg] = useState("Think of a question");
  const [color, getColor] = useState("black");
  const randomizeObj = () => (getMsg(answers[random]["msg"]), getColor(answers[random]["color"]));
  return (
    <div>
      <div
        onClick={randomizeObj}
        className="EightBall-ball"
        style={{backgroundColor: color }}
      >
        <p className="EightBall-msg">{msg}</p>
      </div>
    </div>
  );
};

export default EightBall;
