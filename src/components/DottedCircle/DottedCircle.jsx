import { useState, useEffect, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import "./DottedCircle.scss";

// LineCap enum for better type safety and IntelliSense
export const LineCap = {
  SQUARE: "square",
  ROUND: "round",
};

const DottedCircle = ({
  numberOfLines,
  activeLines,
  lineCap,
  strokeWidth,
  activeColor,
  inactiveColor,
  animationSpeed,
  startingLinePoint,
  lineLength,
  lineX1,
}) => {
  const [count, setCount] = useState(0);

  // Memoize constants to avoid recalculation on every render
  const { angleStep } = useMemo(
    () => ({
      angleStep: 360 / numberOfLines,
    }),
    [numberOfLines]
  );

  // Optimized counter animation with useCallback
  const animateCounter = useCallback(() => {
    if (count < activeLines) {
      setCount((prevCount) => prevCount + 1);
    }
  }, [count, activeLines]);

  useEffect(() => {
    const interval = setInterval(animateCounter, animationSpeed);
    return () => clearInterval(interval);
  }, [animateCounter, animationSpeed]);

  // Reset counter when activeLines or numberOfLines changes
  useEffect(() => {
    setCount(0);
  }, [activeLines, numberOfLines]);

  // Memoize the lines array to avoid recreating on every render
  const lines = useMemo(() => {
    return Array.from({ length: numberOfLines }, (_, i) => {
      const isActive = activeLines > i;
      const angle = angleStep * i;

      // Calculate stroke width
      const activeStrokeWidth = Math.round(strokeWidth * 1.5);
      const currentStrokeWidth = isActive ? activeStrokeWidth : strokeWidth;

      return (
        <line
          key={i}
          x1={lineX1}
          x2={lineX1}
          y1={startingLinePoint}
          y2={startingLinePoint + lineLength}
          transform={`rotate(${angle})`}
          className={isActive ? "active" : ""}
          strokeWidth={currentStrokeWidth}
          style={{
            stroke: isActive ? activeColor : inactiveColor,
          }}
        />
      );
    });
  }, [
    numberOfLines,
    activeLines,
    angleStep,
    startingLinePoint,
    lineLength,
    lineX1,
    strokeWidth,
    activeColor,
    inactiveColor,
  ]);

  return (
    <svg
      className={`dotted-circle ${lineCap}`}
      viewBox="0 0 500 500"
      role="img"
      aria-label={`Progress circle showing ${count} of ${numberOfLines} tasks completed`}
    >
      {lines}
      <text
        className="value"
        x="50%"
        y="52%"
        textAnchor="middle"
        aria-hidden="true"
        style={{ fill: activeColor }}
      >
        {count}
      </text>
      <text
        className="range"
        x="50%"
        y="62%"
        textAnchor="middle"
        aria-hidden="true"
        style={{ fill: inactiveColor }}
      >
        OF {numberOfLines}
      </text>
    </svg>
  );
};

DottedCircle.propTypes = {
  numberOfLines: PropTypes.number.isRequired,
  activeLines: PropTypes.number.isRequired,
  lineCap: PropTypes.oneOf([LineCap.SQUARE, LineCap.ROUND]),
  strokeWidth: PropTypes.number,
  activeColor: PropTypes.string,
  inactiveColor: PropTypes.string,
  animationSpeed: PropTypes.number,
  startingLinePoint: PropTypes.number,
  lineLength: PropTypes.number,
  lineX1: PropTypes.number,
};

DottedCircle.defaultProps = {
  numberOfLines: 30,
  activeLines: 12,
  strokeWidth: 10,
  lineCap: LineCap.SQUARE,
  activeColor: "#2faa8d",
  inactiveColor: "#525b58",
  animationSpeed: 20,
  startingLinePoint: 20,
  lineLength: 45,
  lineX1: 250,
};

export default DottedCircle;
