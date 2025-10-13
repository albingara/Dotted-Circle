import React from "react";
import PropTypes from "prop-types";
import "./ControlPanel.scss";

const ControlPanel = ({
  numberOfLines,
  setNumberOfLines,
  activeLines,
  setActiveLines,
  strokeWidth,
  setStrokeWidth,
  lineCap,
  setLineCap,
  activeColor,
  setActiveColor,
  inactiveColor,
  setInactiveColor,
  animationSpeed,
  setAnimationSpeed,
  startingLinePoint,
  setStartingLinePoint,
  lineLength,
  setLineLength,
  lineX1,
  setLineX1,
}) => {
  return (
    <div className="control-panel">
      <h3>Controls</h3>
      <div className="control-panel-content">
        {/* Circle Properties Section */}
      <div className="control-section">
        <h4>Circle Properties</h4>
        
        <div className="control-group">
          <label htmlFor="numberOfLines">
            Number of Lines: <span className="value-display">{numberOfLines}</span>
          </label>
          <input
            id="numberOfLines"
            type="range"
            min="10"
            max="100"
            value={numberOfLines}
            onChange={(e) => setNumberOfLines(parseInt(e.target.value))}
            className="slider"
          />
        </div>

        <div className="control-group">
          <label htmlFor="activeLines">
            Active Lines: <span className="value-display">{activeLines}</span>
          </label>
          <input
            id="activeLines"
            type="range"
            min="0"
            max={numberOfLines}
            value={Math.min(activeLines, numberOfLines)}
            onChange={(e) => setActiveLines(parseInt(e.target.value))}
            className="slider"
          />
        </div>

        <div className="control-group">
          <label htmlFor="startingLinePoint">
            Line Start Point: <span className="value-display">{startingLinePoint}px</span>
          </label>
          <input
            id="startingLinePoint"
            type="range"
            min="10"
            max="50"
            value={startingLinePoint}
            onChange={(e) => setStartingLinePoint(parseInt(e.target.value))}
            className="slider"
          />
        </div>

        <div className="control-group">
          <label htmlFor="lineLength">
            Line Length: <span className="value-display">{lineLength}px</span>
          </label>
          <input
            id="lineLength"
            type="range"
            min="1"
            max="80"
            value={lineLength}
            onChange={(e) => setLineLength(parseInt(e.target.value))}
            className="slider"
          />
        </div>

        <div className="control-group">
          <label htmlFor="lineX1">
            Line X Position: <span className="value-display">{lineX1}px</span>
          </label>
          <input
            id="lineX1"
            type="range"
            min="150"
            max="350"
            value={lineX1}
            onChange={(e) => setLineX1(parseInt(e.target.value))}
            className="slider"
          />
        </div>
      </div>

      {/* Stroke Settings Section */}
      <div className="control-section">
        <h4>Stroke Settings</h4>
        
        <div className="control-group">
          <label htmlFor="strokeWidth">
            Stroke Width: <span className="value-display">{strokeWidth}px</span>
          </label>
          <input
            id="strokeWidth"
            type="range"
            min="5"
            max="30"
            value={strokeWidth}
            onChange={(e) => setStrokeWidth(parseInt(e.target.value))}
            className="slider"
          />
        </div>

        <div className="control-group">
          <label>Line Cap:</label>
          <div className="toggle-buttons">
            <button
              className={`toggle-btn ${lineCap === "square" ? "active" : ""}`}
              onClick={() => setLineCap("square")}
            >
              Square
            </button>
            <button
              className={`toggle-btn ${lineCap === "round" ? "active" : ""}`}
              onClick={() => setLineCap("round")}
            >
              Round
            </button>
          </div>
        </div>
      </div>

      {/* Colors Section */}
      <div className="control-section">
        <h4>Colors</h4>
        
        <div className="color-controls-row">
          <div className="control-group">
            <label htmlFor="activeColor">Active Color:</label>
            <div className="color-input-group">
              <input
                id="activeColor"
                type="color"
                value={activeColor}
                onChange={(e) => setActiveColor(e.target.value)}
                className="color-picker"
              />
              <span className="color-value">{activeColor}</span>
            </div>
          </div>

          <div className="control-group">
            <label htmlFor="inactiveColor">Inactive Color:</label>
            <div className="color-input-group">
              <input
                id="inactiveColor"
                type="color"
                value={inactiveColor}
                onChange={(e) => setInactiveColor(e.target.value)}
                className="color-picker"
              />
              <span className="color-value">{inactiveColor}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Section */}
      <div className="control-section">
        <h4>Animation</h4>
        
        <div className="control-group">
          <label htmlFor="animationSpeed">
            Animation Speed: <span className="value-display">{animationSpeed}ms</span>
          </label>
          <input
            id="animationSpeed"
            type="range"
            min="5"
            max="100"
            value={animationSpeed}
            onChange={(e) => setAnimationSpeed(parseInt(e.target.value))}
            className="slider"
          />
          <small className="help-text">Lower values = faster animation</small>
        </div>
      </div>
      </div>
    </div>
  );
};

ControlPanel.propTypes = {
  numberOfLines: PropTypes.number.isRequired,
  setNumberOfLines: PropTypes.func.isRequired,
  activeLines: PropTypes.number.isRequired,
  setActiveLines: PropTypes.func.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  setStrokeWidth: PropTypes.func.isRequired,
  lineCap: PropTypes.string.isRequired,
  setLineCap: PropTypes.func.isRequired,
  activeColor: PropTypes.string.isRequired,
  setActiveColor: PropTypes.func.isRequired,
  inactiveColor: PropTypes.string.isRequired,
  setInactiveColor: PropTypes.func.isRequired,
  animationSpeed: PropTypes.number.isRequired,
  setAnimationSpeed: PropTypes.func.isRequired,
  startingLinePoint: PropTypes.number.isRequired,
  setStartingLinePoint: PropTypes.func.isRequired,
  lineLength: PropTypes.number.isRequired,
  setLineLength: PropTypes.func.isRequired,
  lineX1: PropTypes.number.isRequired,
  setLineX1: PropTypes.func.isRequired,
};

export default ControlPanel;
