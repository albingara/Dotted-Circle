import { useState, useEffect } from "react";
import DottedCircle from "./components/DottedCircle/DottedCircle.jsx";
import ControlPanel from "./components/DottedCircle/ControlPanel/ControlPanel.jsx";
import { LineCap } from "./components/DottedCircle/DottedCircle.jsx";

const App = () => {
  const [numberOfLines, setNumberOfLines] = useState(28);
  const [activeLines, setActiveLines] = useState(24);

  // Handle numberOfLines change with validation
  const handleNumberOfLinesChange = (newNumberOfLines) => {
    setNumberOfLines(newNumberOfLines);
    // If active lines exceed the new number of lines, adjust it
    if (activeLines > newNumberOfLines) {
      setActiveLines(newNumberOfLines);
    }
  };

  // Handle activeLines change with validation
  const handleActiveLinesChange = (newActiveLines) => {
    // Ensure active lines never exceed number of lines
    const clampedActiveLines = Math.min(newActiveLines, numberOfLines);
    setActiveLines(clampedActiveLines);
  };

  // Ensure active lines are valid on component mount
  useEffect(() => {
    if (activeLines > numberOfLines) {
      setActiveLines(numberOfLines);
    }
  }, []);
  const [strokeWidth, setStrokeWidth] = useState(10);
  const [lineCap, setLineCap] = useState(LineCap.SQUARE);
  const [activeColor, setActiveColor] = useState("#2faa8d");
  const [inactiveColor, setInactiveColor] = useState("#525b58");
  const [animationSpeed, setAnimationSpeed] = useState(20);
  const [startingLinePoint, setStartingLinePoint] = useState(20);
  const [lineLength, setLineLength] = useState(45);
  const [lineX1, setLineX1] = useState(250);

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
          lineX1={lineX1}
        />
        <h2>
          You have completed <span>{activeLines}</span> of{" "}
          <span>{numberOfLines}</span> tasks that were assigned to you today!
        </h2>
      </div>
      <ControlPanel
        numberOfLines={numberOfLines}
        setNumberOfLines={handleNumberOfLinesChange}
        activeLines={activeLines}
        setActiveLines={handleActiveLinesChange}
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
        lineX1={lineX1}
        setLineX1={setLineX1}
      />
    </div>
  );
};

export default App;
