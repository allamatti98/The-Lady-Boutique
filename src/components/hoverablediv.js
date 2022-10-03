import React, { useState } from "react";
import { render } from "react-dom";

const HoverableDiv = ({ handleMouseOver, handleMouseOut }) => {
  return (
    <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      Hover Me
    </div>
  );
};

const HoverText = () => {
  return (
    <div>
      Hovering right meow!
      <span role="img" aria-label="cat">
        🐱
      </span>
    </div>
  );
};

const HoverExample = () => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div>
      {/* Hover over this div to hide/show <HoverText /> */}
      <HoverableDiv
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
      />
      {isHovering && <HoverText />}
    </div>
  );
};