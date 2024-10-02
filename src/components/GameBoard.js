import React, { useState, useEffect } from 'react';
import Cell from './Cell';

const GameBoard = ({ grid, words, onWordFound, onFailedAttempt, oxygenHighlighted, oxygenCells }) => {
  const [selectedPath, setSelectedPath] = useState([]);

  // Determine the current word based on the currentHintIndex
  const currentWord = words.find(word => !word.found);

  // Generate a set of all cells that should have dashed outlines
  const outlineCells = currentWord && currentWord.hasOutline
    ? currentWord.cells.map(cell => `${cell.row}-${cell.col}`)
    : [];

  // Generate a set of all cells that are part of words with additional hints
  // Not required for this implementation since hints are managed in Hint component

  const handleCellMouseDown = (row, col) => {
    setSelectedPath([{ row, col }]);
  };

  const handleCellMouseEnter = (row, col) => {
    if (selectedPath.length > 0) {
      const last = selectedPath[selectedPath.length - 1];
      if (isAdjacent(last, { row, col }) && !selectedPath.some(cell => cell.row === row && cell.col === col)) {
        setSelectedPath([...selectedPath, { row, col }]);
      }
    }
  };

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
  };

  const isAdjacent = (a, b) => {
    return Math.abs(a.row - b.row) <= 1 && Math.abs(a.col - b.col) <= 1;
  };

  return (
    <div
      className="game-board"
      onMouseUp={handleMouseUp}
      onTouchEnd={handleMouseUp}
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
                onMouseDown={handleCellMouseDown}
                onMouseEnter={handleCellMouseEnter}
                isFound={isFound}
                isSelected={isSelected}
                isOxygen={isOxygen}
                hasOutline={hasOutline}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
