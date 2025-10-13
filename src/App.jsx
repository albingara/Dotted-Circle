import React, { useState } from "react";
import "./style/main.scss";
import DottedCircle from "./components/DottedCircle.jsx";
import ControlPanel from "./components/ControlPanel.jsx";
import { LineCap } from "./components/DottedCircle.jsx";

const App = () => {
  const [numberOfLines, setNumberOfLines] = useState(28);
  const [activeLines, setActiveLines] = useState(24);
  const [strokeWidth, setStrokeWidth] = useState(10);
  const [lineCap, setLineCap] = useState(LineCap.SQUARE);
  const [activeColor, setActiveColor] = useState("#2faa8d");
  const [inactiveColor, setInactiveColor] = useState("#525b58");
  const [animationSpeed, setAnimationSpeed] = useState(20);
  const [startingLinePoint, setStartingLinePoint] = useState(20);
  const [lineLength, setLineLength] = useState(45);

  return (
    <div className="container">
      <div className="wrapper">
        <h1>Task Completion Goal</h1>
        <DottedCircle 
          numberOfLines={numberOfLines} 
          activeLines={activeLines}
          strokeWidth={strokeWidth}
          lineCap={lineCap}
          activeColor={activeColor}
          inactiveColor={inactiveColor}
          animationSpeed={animationSpeed}
          startingLinePoint={startingLinePoint}
          lineLength={lineLength}
        />
        <h2>
          You have completed <span>{activeLines}</span> of{" "}
          <span>{numberOfLines}</span> tasks that were assigned to you today!
        </h2>
      </div>
      <ControlPanel
        numberOfLines={numberOfLines}
        setNumberOfLines={setNumberOfLines}
        activeLines={activeLines}
        setActiveLines={setActiveLines}
        strokeWidth={strokeWidth}
        setStrokeWidth={setStrokeWidth}
        lineCap={lineCap}
        setLineCap={setLineCap}
        activeColor={activeColor}
        setActiveColor={setActiveColor}
        inactiveColor={inactiveColor}
        setInactiveColor={setInactiveColor}
        animationSpeed={animationSpeed}
        setAnimationSpeed={setAnimationSpeed}
        startingLinePoint={startingLinePoint}
        setStartingLinePoint={setStartingLinePoint}
        lineLength={lineLength}
        setLineLength={setLineLength}
      />
    </div>
  );
};

export default App;
