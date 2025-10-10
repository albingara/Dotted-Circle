import React, { useState, useEffect, useMemo, useCallback } from "react";
import PropTypes from "prop-types";
import "./DottedCircle.scss";

// LineCap enum for better type safety and IntelliSense
export const LineCap = {
  SQUARE: "square",
  ROUND: "round",
};

const DottedCircle = ({ numberOfLines, activeLines, lineCap, strokeWidth }) => {
  const [count, setCount] = useState(0);

  // Memoize constants to avoid recalculation on every render
  const { startingLinePoint, lineLength, angleStep } = useMemo(
    () => ({
      startingLinePoint: 20,
      lineLength: 45,
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
    const interval = setInterval(animateCounter, 20);
    return () => clearInterval(interval);
  }, [animateCounter]);

  // Reset counter when activeLines changes
  useEffect(() => {
    setCount(0);
  }, [activeLines]);

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
          x1="250"
          x2="250"
          y1={startingLinePoint}
          y2={lineLength}
          transform={`rotate(${angle})`}
          className={isActive ? "active" : ""}
          strokeWidth={currentStrokeWidth}
        />
      );
    });
  }, [
    numberOfLines,
    activeLines,
    angleStep,
    startingLinePoint,
    lineLength,
    strokeWidth,
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
      >
        {count}
      </text>
      <text
        className="range"
        x="50%"
        y="62%"
        textAnchor="middle"
        aria-hidden="true"
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
};

DottedCircle.defaultProps = {
  numberOfLines: 30,
  activeLines: 12,
  strokeWidth: 10,
  lineCap: LineCap.SQUARE,
};

export default DottedCircle;
