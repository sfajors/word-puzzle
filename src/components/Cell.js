import React from 'react';

const Cell = ({ letter, row, col, onMouseDown, onMouseEnter, isFound, isSelected, isOxygen, hasOutline }) => {
  const handleMouseDown = (e) => {
    e.preventDefault(); // Prevents unwanted behaviors like text selection or scrolling
    onMouseDown(row, col);
  };

  const handleMouseEnter = () => {
    onMouseEnter(row, col);
  };

  let className = 'cell';
  if (isFound) {
    className += ' found';
  }
  if (isSelected) {
    className += ' selected';
  }
  if (isOxygen) {
    className += ' oxygen';
  }
  if (hasOutline) {
    className += ' outline';
  }

  return (
    <div
      className={className}
      onMouseDown={handleMouseDown}
      onMouseEnter={handleMouseEnter}
      onTouchStart={handleMouseDown}
      onTouchMove={handleMouseEnter}
      onTouchEnd={(e) => e.preventDefault()} // Prevents touchend from triggering unwanted behaviors
    >
      {letter}
    </div>
  );
};

export default Cell;
