import React, { useState, useEffect } from 'react';
import GameBoard from './components/GameBoard';
import Hint from './components/Hint';
import Question from './components/Question';
import InputBox from './components/InputBox';
import Congratulations from './components/Congratulations';
import './styles.css';

const App = () => {
  const grid = [
    ['F', 'O', 'S', 'S', 'I', 'L', 'Q', 'E'],
    ['E', 'X', 'T', 'I', 'N', 'C', 'T', 'E'],
    ['Z', 'Y', 'O', 'U', 'N', 'G', 'E', 'N'],
    ['B', 'G', 'E', 'N', 'E', 'S', 'G', 'Z'],
    ['P', 'E', 'C', 'O', 'L', 'O', 'G', 'Y'],
    ['T', 'N', 'E', 'E', 'D', 'P', 'L', 'V'],
  ];

  // Define the cells that spell "Oxygen" (rows 0-5, column 1)
  const oxygenCells = [
    { row: 0, col: 1 },
    { row: 1, col: 1 },
    { row: 2, col: 1 },
    { row: 3, col: 1 },
    { row: 4, col: 1 },
    { row: 5, col: 1 },
  ];

  // Initialize words with additional fields
  const initialWords = [
    { 
      word: 'FOSSIL', 
      hint: 'This is something left behind by a plant or animal from a long time ago, often found in rock.',
      additionalHint: 'It is made up of hard parts like bones or shells.',
      cells: [
        {row: 0, col: 0},
        {row: 0, col: 1},
        {row: 0, col: 2},
        {row: 0, col: 3},
        {row: 0, col: 4},
        {row: 0, col: 5},
      ],
      found: false,
      failedAttempts: 0,
      showAdditionalHint: false,
      hasOutline: false
    },
    { 
      word: 'EXTINCT', 
      hint: 'This means there are no more of a certain kind of animal or plant left on Earth.',
      additionalHint: 'These creatures no longer exist anywhere.',
      cells: [
        {row: 1, col: 0},
        {row: 1, col: 1},
        {row: 1, col: 2},
        {row: 1, col: 3},
        {row: 1, col: 4},
        {row: 1, col: 5},
        {row: 1, col: 6},
      ],
      found: false,
      failedAttempts: 0,
      showAdditionalHint: false,
      hasOutline: false
    },
    { 
      word: 'YOUNG', 
      hint: 'This word describes something that is new or just starting out, like a baby animal or a plant sprout.',
      additionalHint: 'Often associated with being fresh or immature.',
      cells: [
        {row: 2, col: 1},
        {row: 2, col: 2},
        {row: 2, col: 3},
        {row: 2, col: 4},
        {row: 2, col: 5},
      ],
      found: false,
      failedAttempts: 0,
      showAdditionalHint: false,
      hasOutline: false
    },
    { 
      word: 'GENES', 
      hint: 'These are tiny instructions inside living things that help decide what they look like.',
      additionalHint: 'They are segments of DNA.',
      cells: [
        {row: 3, col: 1},
        {row: 3, col: 2},
        {row: 3, col: 3},
        {row: 3, col: 4},
        {row: 3, col: 5},
      ],
      found: false,
      failedAttempts: 0,
      showAdditionalHint: false,
      hasOutline: false
    },
    { 
      word: 'ECOLOGY', 
      hint: 'This is how animals, plants, and their environment all work together.',
      additionalHint: 'It studies the relationships between organisms and their surroundings.',
      cells: [
        {row: 4, col: 1},
        {row: 4, col: 2},
        {row: 4, col: 3},
        {row: 4, col: 4},
        {row: 4, col: 5},
        {row: 4, col: 6},
        {row: 4, col: 7},
      ],
      found: false,
      failedAttempts: 0,
      showAdditionalHint: false,
      hasOutline: false
    },
    { 
      word: 'NEED', 
      hint: 'This word describes something that living things must have to survive, like food or water.',
      additionalHint: 'Essential for life.',
      cells: [
        {row: 5, col: 1},
        {row: 5, col: 2},
        {row: 5, col: 3},
        {row: 5, col: 4},
      ],
      found: false,
      failedAttempts: 0,
      showAdditionalHint: false,
      hasOutline: false
    },
  ];

  const [words, setWords] = useState(initialWords);
  const [currentHintIndex, setCurrentHintIndex] = useState(0);
  const [showCongrats, setShowCongrats] = useState(false);
  const [oxygenHighlighted, setOxygenHighlighted] = useState(false);

  // New state variables for "Oxygen"
  const [oxygenFailedAttempts, setOxygenFailedAttempts] = useState(0);
  const [oxygenShowAdditionalHint, setOxygenShowAdditionalHint] = useState(false);
  const [oxygenHasOutline, setOxygenHasOutline] = useState(false);

  // Handle when a word is successfully found
  const handleWordFound = (wordName, cells) => {
    setWords(prevWords => prevWords.map(word => {
      if (word.word === wordName) {
        return { ...word, found: true };
      }
      return word;
    }));
    setCurrentHintIndex(currentHintIndex + 1);
  };

  // Handle failed attempt for the current word
  const handleFailedAttempt = () => {
    setWords(prevWords => prevWords.map((word, index) => {
      if (index === currentHintIndex && !word.found) { // Only current word
        const newFailedAttempts = word.failedAttempts + 1;
        let updatedWord = { ...word, failedAttempts: newFailedAttempts };
        if (newFailedAttempts === 3) {
          updatedWord.showAdditionalHint = true;
        }
        if (newFailedAttempts === 5) {
          updatedWord.hasOutline = true;
        }
        return updatedWord;
      }
      return word;
    }));
  };

  // Reset hints and outlines for previous word when moving to next word
  const resetPreviousWordState = (previousIndex) => {
    setWords(prevWords => prevWords.map((word, index) => {
      if (index === previousIndex) {
        return {
          ...word,
          showAdditionalHint: false,
          hasOutline: false,
          failedAttempts: 0, // Reset failed attempts if needed
        };
      }
      return word;
    }));
  };

  // Handle final answer submission
  const handleFinalAnswer = (answer) => {
    if (answer.trim().toUpperCase() === 'OXYGEN') {
      setOxygenHighlighted(true);
      // After 5 seconds, navigate to the congratulations page
      setTimeout(() => {
        setShowCongrats(true);
      }, 5000);
    } else {
      // Increment failed attempts for "Oxygen"
      const newFailedAttempts = oxygenFailedAttempts + 1;
      setOxygenFailedAttempts(newFailedAttempts);
      if (newFailedAttempts === 3) {
        setOxygenShowAdditionalHint(true);
      }
      if (newFailedAttempts === 5) {
        // Reveal the oxygen cells after 5 failed attempts
        setOxygenHasOutline(true);
        setOxygenHighlighted(true);
      }
      alert('Incorrect answer. Please try again.');
    }
  };  

  // Reset previous word's hints and outlines when moving to next word
  useEffect(() => {
    if (currentHintIndex > 0 && currentHintIndex <= words.length) {
      resetPreviousWordState(currentHintIndex - 1);
    }
  }, [currentHintIndex]);

  return (
    <div className="app">
      {!showCongrats ? (
        <>
          <h1>Word Finding Game</h1>
          {currentHintIndex < words.length ? (
            <Hint 
              hint={words[currentHintIndex].hint} 
              additionalHint={words[currentHintIndex].showAdditionalHint ? words[currentHintIndex].additionalHint : null}
            />
          ) : (
            // Final question with possible additional hint for "Oxygen"
            <Hint 
              hint="What is essential for life and is represented by the highlighted words?"
              additionalHint={oxygenShowAdditionalHint ? 'It is a gas that supports respiration in living organisms.' : null}
            />
          )}
          <GameBoard
            grid={grid}
            words={words}
            onWordFound={handleWordFound}
            onFailedAttempt={handleFailedAttempt}
            oxygenHighlighted={oxygenHighlighted}
            oxygenCells={oxygenCells}
            oxygenHasOutline={oxygenHasOutline}
          />
          {currentHintIndex === words.length && (
            <>
              <Question />
              <InputBox onSubmit={handleFinalAnswer} enabled={oxygenHighlighted} />
            </>
          )}
        </>
      ) : (
        <Congratulations />
      )}
    </div>
  );
};

export default App;