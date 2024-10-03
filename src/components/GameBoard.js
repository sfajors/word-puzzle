import React, { useState } from 'react';
import Cell from './Cell';

const GameBoard = ({ grid, words, onWordFound, onFailedAttempt, oxygenHighlighted, oxygenCells }) => {
  const [selectedPath, setSelectedPath] = useState([]);
  const [isTouching, setIsTouching] = useState(false); // Keep track of touch state

  const currentWord = words.find(word => !word.found);
  const outlineCells = currentWord && currentWord.hasOutline
    ? currentWord.cells.map(cell => `${cell.row}-${cell.col}`)
    : [];

  // Helper to check adjacency
  const isAdjacent = (a, b) => {
    return Math.abs(a.row - b.row) <= 1 && Math.abs(a.col - b.col) <= 1;
  };

  // Handle starting a selection path (mouse or touch)
  const handleCellMouseDown = (row, col) => {
    setSelectedPath([{ row, col }]);
  };

  // Handle adding to the selection path (mouse or touch move)
  const handleCellMouseEnter = (row, col) => {
    if (selectedPath.length > 0) {
      const last = selectedPath[selectedPath.length - 1];
      if (isAdjacent(last, { row, col }) && !selectedPath.some(cell => cell.row === row && cell.col === col)) {
        setSelectedPath([...selectedPath, { row, col }]);
      }
    }
  };

  // Handle finalizing selection (mouse or touch up)
  const handleMouseUp = () => {
    if (selectedPath.length > 1 && currentWord) {
      const selectedWord = selectedPath.map(cell => grid[cell.row][cell.col]).join('').toUpperCase();
      const reversedWord = selectedWord.split('').reverse().join('');

      if (selectedWord === currentWord.word.toUpperCase() || reversedWord === currentWord.word.toUpperCase()) {
        onWordFound(currentWord.word.toUpperCase(), selectedPath);
      } else {
        onFailedAttempt();
      }
    }
    setSelectedPath([]);
    setIsTouching(false); // Reset touch state
  };

  // Handle touch start
  const handleTouchStart = (e, row, col) => {
    e.preventDefault();
    setIsTouching(true);
    handleCellMouseDown(row, col);
  };

  // Handle touch move (detect movement across the board)
  const handleTouchMove = (e) => {
    if (isTouching) {
      const touch = e.touches[0];
      const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);

      if (targetElement) {
        const row = targetElement.getAttribute('data-row');
        const col = targetElement.getAttribute('data-col');

        if (row !== null && col !== null) {
          handleCellMouseEnter(parseInt(row, 10), parseInt(col, 10));
        }
      }
    }
  };

  return (
    <div
      className="game-board"
      onMouseUp={handleMouseUp}
      onTouchEnd={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {grid.map((rowData, rowIndex) => (
        <div key={rowIndex} className="row">
          {rowData.map((letter, colIndex) => {
            const isFound = words.some(word => word.found && word.cells.some(cell => cell.row === rowIndex && cell.col === colIndex));
            const isSelected = selectedPath.some(cell => cell.row === rowIndex && cell.col === colIndex);
            const isOxygen = oxygenHighlighted && oxygenCells.some(cell => cell.row === rowIndex && cell.col === colIndex);
            const hasOutline = outlineCells.includes(`${rowIndex}-${colIndex}`);

            return (
              <Cell
                key={colIndex}
                letter={letter}
                row={rowIndex}
                col={colIndex}
                onMouseDown={() => handleCellMouseDown(rowIndex, colIndex)}
                onMouseEnter={() => handleCellMouseEnter(rowIndex, colIndex)}
                onTouchStart={(e) => handleTouchStart(e, rowIndex, colIndex)}
                isFound={isFound}
                isSelected={isSelected}
                isOxygen={isOxygen}
                hasOutline={hasOutline}
                data-row={rowIndex}
                data-col={colIndex}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
