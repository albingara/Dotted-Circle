import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const DottedCircle = ({ numberOfLines, activeLines }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < activeLines) {
        setCount(count + 1);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [count, activeLines]);

  const startingLinePoint = 30; // In SVG, lines have a starting point and an ending point in both the vertical (y1, y2) and horizontal (x1, x2) directions. In this case, we are setting the starting point for the vertical direction (y1). Keep in mind that the viewBox is currently set to 500x500, but you can adjust it to your desired dimensions.
  const lineLength = startingLinePoint + 15; // To determine the ending point (y2) of the line, we add the desired length to the starting vertical point (y1). This ensures that the line extends to the desired length in the vertical direction.
  return (
    <svg viewBox="0 0 500 500">
      {[...Array(numberOfLines).keys()].map(i => {
        const isActive = activeLines > i;
        const angle = 360 / numberOfLines;
        return (
          <line
            key={i}
            x1="250"
            x2="250"
            y1={startingLinePoint}
            y2={lineLength}
            // strokeWidth={20} You can adjust the stroke width here, or with CSS/SCSS
            // strokeLinecap={'round'} You can adjust the stroke linecap here, or with CSS/SCSS
            transform={`rotate(${angle * i})`}
            className={isActive ? "active" : ""}
          />
        );
      })}
      <text className="value" x="50%" y="50%" textAnchor="middle">{count}</text>
      <text className="range" x="50%" y="60%" textAnchor="middle">OF {numberOfLines}</text>
    </svg>
  );
};

DottedCircle.propTypes = {
  numberOfLines: PropTypes.number,
  activeLines: PropTypes.number
};

DottedCircle.defaultProps = {
  numberOfLines: 30,
  activeLines: 12
}

export default DottedCircle;