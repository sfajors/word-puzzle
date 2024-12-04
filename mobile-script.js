// Define the words and their properties for each board
const boards = [
  {
    gridLetters: [
      ['F', 'O', 'S', 'S', 'I', 'L', 'Q', 'E'],
      ['E', 'X', 'T', 'I', 'N', 'C', 'T', 'E'],
      ['Z', 'Y', 'O', 'U', 'N', 'G', 'E', 'N'],
      ['B', 'G', 'E', 'N', 'E', 'S', 'G', 'Z'],
      ['P', 'E', 'C', 'O', 'L', 'O', 'G', 'Y'],
      ['T', 'N', 'E', 'E', 'D', 'P', 'L', 'V']
    ],
    words: [
      { 
        word: 'FOSSIL', 
        hint: 'Left behind by plants or animals from long ago.', 
        additionalHint: 'Often found in rocks.', 
        attempts: 0, 
        found: false,
        failed: false,
        positions: []
      },
      { 
        word: 'EXTINCT', 
        hint: 'No longer existing on Earth.', 
        additionalHint: 'Examples include the dodo.', 
        attempts: 0, 
        found: false,
        failed: false,
        positions: []
      },
      { 
        word: 'YOUNG', 
        hint: 'Not old; in an early stage.', 
        additionalHint: 'Opposite of mature.', 
        attempts: 0, 
        found: false,
        failed: false,
        positions: []
      },
      { 
        word: 'GENES', 
        hint: 'Units of heredity.', 
        additionalHint: 'Made of DNA.', 
        attempts: 0, 
        found: false,
        failed: false,
        positions: []
      },
      { 
        word: 'ECOLOGY', 
        hint: 'Study of organisms and their environment.', 
        additionalHint: 'Interrelationships in nature.', 
        attempts: 0, 
        found: false,
        failed: false,
        positions: []
      },
      { 
        word: 'NEED', 
        hint: 'Something necessary for survival.', 
        additionalHint: 'A requirement.', 
        attempts: 0, 
        found: false,
        failed: false,
        positions: []
      }
    ],
    oxygenPositions: [
      { row: 0, col: 1 }, // O
      { row: 1, col: 1 }, // X
      { row: 2, col: 1 }, // Y
      { row: 3, col: 1 }, // G
      { row: 4, col: 1 }, // E
      { row: 5, col: 1 }  // N
    ]
  },
  {
    gridLetters: [
      ['G', 'E', 'N', 'O', 'M', 'E', 'N', 'S'],
      ['R', 'T', 'O', 'X', 'I', 'N', 'S', 'E'],
      ['E', 'N', 'Z', 'Y', 'M', 'E', 'S', 'N'],
      ['C', 'O', 'R', 'G', 'A', 'N', 'I', 'C'],
      ['L', 'E', 'N', 'E', 'R', 'G', 'Y', 'T'],
      ['D', 'E', 'D', 'N', 'A', 'P', 'L', 'V']
    ],
    words: [
      { 
        word: 'GENOME', 
        hint: 'This word refers to all the information in an organism\'s DNA.', 
        additionalHint: 'It\'s the full set of genes that make you who you are!', 
        attempts: 0, 
        found: false,
        failed: false,
        positions: []
      },
      { 
        word: 'TOXINS', 
        hint: 'These are harmful substances that can be found in nature or made by living things.', 
        additionalHint: 'Poison from a snake or a plant is called this.', 
        attempts: 0, 
        found: false,
        failed: false,
        positions: []
      },
      { 
        word: 'ENZYMES', 
        hint: 'These special proteins help break down food and speed up chemical reactions in your body.', 
        additionalHint: 'They help digest the food you eat.', 
        attempts: 0, 
        found: false,
        failed: false,
        positions: []
      },
      { 
        word: 'ORGANIC', 
        hint: 'This word is used to describe something that comes from living things or nature.', 
        additionalHint: 'Fruits and vegetables grown without chemicals are often called this.', 
        attempts: 0, 
        found: false,
        failed: false,
        positions: []
      },
      { 
        word: 'ENERGY', 
        hint: 'All living things need this to move, grow, and survive.', 
        additionalHint: 'The sun gives us this, and it helps plants grow.', 
        attempts: 0, 
        found: false,
        failed: false,
        positions: []
      },
      { 
        word: 'DNA', 
        hint: 'It\'s a tiny set of instructions inside every living thing that tells it how to grow and what it will look like, like a recipe book for life.', 
        additionalHint: 'It\'s something inside your body that you got from your parents and it decides things like the color of your eyes or your hair!', 
        attempts: 0,
        found: false,
        failed: false,
        positions: []
      }
    ],
    oxygenPositions: [
      { row: 0, col: 3 }, // O
      { row: 1, col: 3 }, // X
      { row: 2, col: 3 }, // Y
      { row: 3, col: 3 }, // G
      { row: 4, col: 3 }, // E
      { row: 5, col: 3 }  // N
    ]
  },
  {
    gridLetters: [
      ['C', 'A', 'R', 'B', 'O', 'N', 'Q', 'E'],
      ['T', 'X', 'T', 'A', 'X', 'I', 'S', 'E'],
      ['Y', 'X', 'R', 'A', 'Y', 'G', 'E', 'N'],
      ['C', 'H', 'A', 'N', 'G', 'E', 'G', 'Z'],
      ['C', 'Y', 'C', 'L', 'E', 'S', 'G', 'Y'],
      ['N', 'P', 'L', 'A', 'N', 'T', 'L', 'V']
    ],
    words: [
      { 
        word: 'CARBON', 
        hint: 'This element is found in all living things, and it\'s essential for life.', 
        additionalHint: 'This is what diamonds are made of, but it\'s also in the air we breathe out.', 
        attempts: 0, 
        found: false,
        failed: false,
        positions: []
      },
      { 
        word: 'AXIS', 
        hint: 'It\'s an imaginary line that the Earth spins around to make day and night.', 
        additionalHint: 'The Earth\'s tilt on this line gives us seasons like summer and winter.', 
        attempts: 0, 
        found: false,
        failed: false,
        positions: []
      },
      { 
        word: 'XRAY', 
        hint: 'This is a special kind of light that can see through your skin and bones.', 
        additionalHint: 'Doctors use these to look at your bones when you\'re hurt.', 
        attempts: 0, 
        found: false,
        failed: false,
        positions: []
      },
      { 
        word: 'CHANGE', 
        hint: 'This word describes when something becomes different over time, like how animals evolve.', 
        additionalHint: 'Seasons do this from winter to spring.', 
        attempts: 0, 
        found: false,
        failed: false,
        positions: []
      },
      { 
        word: 'CYCLES', 
        hint: 'Nature works in repeating patterns, like the water or life cycle.', 
        additionalHint: 'The life of a butterfly goes in one of these, from egg to adult.', 
        attempts: 0, 
        found: false,
        failed: false,
        positions: []
      },
      { 
        word: 'PLANT', 
        hint: 'These living things make their own food using sunlight, and they grow in the ground.', 
        additionalHint: 'Trees, flowers, and vegetables are all examples of this.', 
        attempts: 0, 
        found: false,
        failed: false,
        positions: []
      }
    ],
    oxygenPositions: [
      { row: 0, col: 4 }, // O
      { row: 1, col: 4 }, // X
      { row: 2, col: 4 }, // Y
      { row: 3, col: 4 }, // G
      { row: 4, col: 4 }, // E
      { row: 5, col: 4 }  // N
    ]
  }
];

// Randomly select one board
const selectedBoardIndex = Math.floor(Math.random() * boards.length);
const selectedBoard = boards[selectedBoardIndex];
const gridLetters = selectedBoard.gridLetters;
const words = selectedBoard.words;
const oxygenPositions = selectedBoard.oxygenPositions;

// Get DOM elements
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const hintElement = document.getElementById('hint');

// Define cell properties
const cellSize = 100;
const radius = cellSize / 2 - 5; // Radius for circles with padding
const cols = gridLetters[0].length;
const rows = gridLetters.length;
const boardOffsetX = (canvas.width - cols * cellSize) / 2;
const boardOffsetY = (canvas.height - rows * cellSize) / 2;

// Game state variables
let currentWordIndex = 0;
let isDrawing = false;
let selectedCells = [];
let selectedWord = [];
let finalLettersRevealed = []; // Initialized as empty array

// Initialize attempt counters
let answerAttempts = 0;
const maxAnswerAttempts = 5;
const correctAnswer = 'oxygen';

// Draw the entire board
function drawBoard() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = '35px sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // First, draw all cell backgrounds and highlights
  for (let row = 0; row < gridLetters.length; row++) {
    for (let col = 0; col < gridLetters[row].length; col++) {
      const x = boardOffsetX + col * cellSize + cellSize / 2;
      const y = boardOffsetY + row * cellSize + cellSize / 2;

      // Draw cell background as circle
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.fillStyle = '#f0f8ff';
      ctx.fill();
      ctx.closePath();

      // Highlight found words
      words.forEach(wordObj => {
        if (wordObj.found) { // Only consider found words
          wordObj.positions.forEach(pos => {
            if (pos.row === row && pos.col === col) {
              ctx.beginPath();
              ctx.arc(x, y, radius, 0, 2 * Math.PI);
              ctx.fillStyle = '#90ee90'; // Green for found words
              ctx.fill();
              ctx.closePath();
            }
          });
        }

        // Highlight failed words
        if (wordObj.failed) {
          wordObj.positions.forEach(pos => {
            if (pos.row === row && pos.col === col) {
              ctx.beginPath();
              ctx.arc(x, y, radius, 0, 2 * Math.PI);
              ctx.fillStyle = '#ffcccc'; // Light red for failed words
              ctx.fill();
              ctx.closePath();
            }
          });
        }
      });

      // Highlight final letters if revealed
      finalLettersRevealed.forEach(pos => {
        if (pos.row === row && pos.col === col) {
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, 2 * Math.PI);
          ctx.fillStyle = '#FFD700'; // Gold color
          ctx.fill();
          ctx.closePath();
        }
      });

      // Highlight selected cells
      selectedCells.forEach(cell => {
        if (cell.row === row && cell.col === col) {
          ctx.beginPath();
          ctx.arc(x, y, radius, 0, 2 * Math.PI);
          ctx.fillStyle = '#ADD8E6'; // Light blue for selection
          ctx.fill();
          ctx.closePath();
        }
      });

      // Draw cell border
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.strokeStyle = '#ccc';
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.closePath();
    }
  }

  // Draw connecting lines between selected cells
  if (selectedCells.length > 1) {
    ctx.strokeStyle = '#0000FF'; // Blue lines
    ctx.lineWidth = 2;
    ctx.beginPath();
    for (let i = 0; i < selectedCells.length - 1; i++) {
      const current = selectedCells[i];
      const next = selectedCells[i + 1];
      const currentX = boardOffsetX + current.col * cellSize + cellSize / 2;
      const currentY = boardOffsetY + current.row * cellSize + cellSize / 2;
      const nextX = boardOffsetX + next.col * cellSize + cellSize / 2;
      const nextY = boardOffsetY + next.row * cellSize + cellSize / 2;

      // Calculate angle between current and next cell
      const angle = Math.atan2(nextY - currentY, nextX - currentX);

      // Start and end points at the edge of the circles
      const startX = currentX + radius * Math.cos(angle);
      const startY = currentY + radius * Math.sin(angle);
      const endX = nextX - radius * Math.cos(angle);
      const endY = nextY - radius * Math.sin(angle);

      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
    }
    ctx.stroke();
    ctx.closePath();
  }

  // Now, draw the letters on top
  for (let row = 0; row < gridLetters.length; row++) {
    for (let col = 0; col < gridLetters[row].length; col++) {
      const x = boardOffsetX + col * cellSize + cellSize / 2;
      const y = boardOffsetY + row * cellSize + cellSize / 2;

      // Draw cell text
      ctx.fillStyle = '#000';
      ctx.fillText(gridLetters[row][col], x, y);
    }
  }
}

// Display the current hint
function showCurrentHint() {
  const wordObj = words[currentWordIndex];
  if (!wordObj) {
    hintElement.textContent = 'All the words have been found!';
    return;
  }
  let hintText = wordObj.hint;
  if (wordObj.attempts >= 3 && wordObj.additionalHint) {
    hintText += `<span class="additional-hint"><span class="bold">\nAdditional Hint:</span> ${wordObj.additionalHint}</span>`;
  }
  hintElement.innerHTML = hintText;
}

function toggleInstructions() {
  const instructions = document.getElementById('instructions');
  if (instructions.style.display === 'none' || instructions.style.display === '') {
      instructions.style.display = 'block';
  } else {
      instructions.style.display = 'none';
  }
}

// Get cell information from canvas coordinates
function getCellFromCoords(x, y) {
  const col = Math.floor((x - boardOffsetX) / cellSize);
  const row = Math.floor((y - boardOffsetY) / cellSize);
  if (row >= 0 && row < rows && col >= 0 && col < cols) {
    return { row, col, key: `${row}-${col}`, letter: gridLetters[row][col] };
  }
  return null;
}

// Check if two cells are adjacent (only horizontally or vertically)
function isAdjacent(cell1, cell2) {
  return (Math.abs(cell1.row - cell2.row) === 1 && cell1.col === cell2.col) ||
         (Math.abs(cell1.col - cell2.col) === 1 && cell1.row === cell2.row);
}

// Handle the start of a selection (mousedown or touchstart)
function handleStart(event) {
  event.preventDefault();
  isDrawing = true;
  selectedCells = [];
  selectedWord = [];
  const pos = getEventPosition(event);
  const cell = getCellFromCoords(pos.x, pos.y);
  if (cell && !isWordAlreadyFound(cell)) {
    selectCell(cell);
  }
}

// Handle the movement during selection (mousemove or touchmove)
function handleMove(event) {
  if (!isDrawing) return;
  event.preventDefault();
  const pos = getEventPosition(event);
  const cell = getCellFromCoords(pos.x, pos.y);
  if (cell && !isWordAlreadyFound(cell)) {
    const lastCell = selectedCells[selectedCells.length - 1];
    if (lastCell && !isAdjacent(lastCell, cell)) return;
    if (selectedCells.some(c => c.key === cell.key)) return;
    selectCell(cell);
  }
}

// Handle the end of a selection (mouseup or touchend)
function handleEnd(event) {
  if (!isDrawing) return;
  isDrawing = false;
  checkSelectedWord();
  selectedCells = [];
  selectedWord = [];
  drawBoard();
}

// Select a cell during selection
function selectCell(cell) {
  selectedCells.push(cell);
  selectedWord.push(cell.letter);
  drawBoard();
}

// Check if a cell is part of a word that's already found
function isWordAlreadyFound(cell) {
  return words.some(wordObj => wordObj.found && wordObj.positions.some(pos => pos.row === cell.row && pos.col === cell.col));
}

// Check if the selected word is correct
function checkSelectedWord() {
  const wordObj = words[currentWordIndex];
  if (!wordObj) return;

  const selectedWordStr = selectedWord.join('').toUpperCase();
  if (selectedWordStr === wordObj.word.toUpperCase()) {
    wordObj.found = true;
    wordObj.positions = [...selectedCells];
    currentWordIndex++;
    showCurrentHint();
    drawBoard();
  } else {
    wordObj.attempts++;
    if (wordObj.attempts === 3) {
      showCurrentHint();
    }
    if (wordObj.attempts === 5) {
      // Highlight the correct letters on the board
      highlightFailedWord(currentWordIndex);
      currentWordIndex++;
      showCurrentHint();
    } else {
      showCurrentHint();
    }
  }

  // After each word attempt, check if all words are completed
  if (allWordsCompleted()) {
    showFinalQuestion();
  }
}

// Determine if all words are either found or failed
function allWordsCompleted() {
  return words.every(word => word.found || word.failed);
}

// Highlight the failed word's letters on the board and mark as failed in UI
function highlightFailedWord(index) {
  const wordObj = words[index];
  wordObj.failed = true;
  wordObj.positions = findWordPositions(wordObj.word);
  drawBoard(); // Redraw to show highlights
}

// Find the positions of a word on the grid
function findWordPositions(word) {
  word = word.toUpperCase();
  for (let row = 0; row < gridLetters.length; row++) {
    for (let col = 0; col < gridLetters[row].length; col++) {
      if (gridLetters[row][col] === word[0]) {
        const directions = [
          { dr: -1, dc: 0 }, // Up
          { dr: 1, dc: 0 },  // Down
          { dr: 0, dc: -1 }, // Left
          { dr: 0, dc: 1 }   // Right
        ];

        for (const dir of directions) {
          let posList = [{ row, col }];
          let r = row + dir.dr;
          let c = col + dir.dc;
          let matched = true;

          for (let i = 1; i < word.length; i++) {
            if (r < 0 || r >= rows || c < 0 || c >= cols || gridLetters[r][c] !== word[i]) {
              matched = false;
              break;
            }
            posList.push({ row: r, col: c });
            r += dir.dr;
            c += dir.dc;
          }

          if (matched) {
            return posList;
          }
        }
      }
    }
  }
  return [];
}

// Show the final question after all words are completed
function showFinalQuestion() {
  // Create a new div for the question
  const questionDiv = document.createElement('div');
  questionDiv.id = 'finalQuestion';
  questionDiv.innerHTML = `
      <h2>Final Question</h2>
      <p>How did early life forms change the Earth's atmosphere?</p>
      <input type="text" id="final-answer" placeholder="Type your answer here">
      <button id="submit-answer" disabled>Submit</button>
      <p id="answerFeedback"></p>
  `;
  document.getElementById('gameContainer').appendChild(questionDiv);

  const finalAnswerInput = document.getElementById('final-answer');
  const submitButton = document.getElementById('submit-answer');
  const answerFeedback = document.getElementById('answerFeedback');

  // Enable submit button only when input is not empty
  finalAnswerInput.addEventListener('input', () => {
    const userInput = finalAnswerInput.value.trim();
    if (userInput.length > 0) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  });

  // Add event listener to the submit button
  submitButton.addEventListener('click', checkFinalAnswer);
}

// Check the user's final answer
function checkFinalAnswer() {
  const userInput = document.getElementById('final-answer').value.trim().toLowerCase();
  const feedback = document.getElementById('answerFeedback');

  if (userInput === '') {
    feedback.style.color = 'red';
    feedback.textContent = 'Please enter an answer before submitting.';
    return;
  }

  if (userInput === correctAnswer.toLowerCase()) {
    feedback.style.color = 'green';
    feedback.textContent = 'Correct! Congratulations, you completed the game!';
    showCongratulations();
    document.getElementById('final-answer').disabled = true;
    document.getElementById('submit-answer').disabled = true;
  } else {
    answerAttempts++;
    if (answerAttempts >= maxAnswerAttempts) {
      feedback.style.color = 'orange';
      feedback.textContent = `Incorrect. The correct answer was Oxygen.`;
      revealFinalLetters();
      showCongratulations();
      document.getElementById('final-answer').disabled = true;
      document.getElementById('submit-answer').disabled = true;
    } else {
      feedback.style.color = 'red';
      feedback.textContent = `Incorrect. Attempts left: ${maxAnswerAttempts - answerAttempts}`;
    }
  }
}

// Reveal the letters spelling "Oxygen" on the board
function revealFinalLetters() {
  finalLettersRevealed = oxygenPositions;
  drawBoard();
}

// Show the congratulations message
function showCongratulations() {
  const congratsDiv = document.createElement('div');
  congratsDiv.id = 'congratulations';
  congratsDiv.innerHTML = `<h2>Congratulations! You Completed the Exercise!</h2>`;
  document.getElementById('gameContainer').appendChild(congratsDiv);
}

// Get the event position relative to the canvas
function getEventPosition(event) {
  const rect = canvas.getBoundingClientRect();
  let x, y;
  if (event.touches && event.touches.length > 0) {
    x = event.touches[0].clientX - rect.left;
    y = event.touches[0].clientY - rect.top;
  } else {
    x = event.clientX - rect.left;
    y = event.clientY - rect.top;
  }
  return { x, y };
}

// Add event listeners for mouse and touch interactions
canvas.addEventListener('mousedown', handleStart);
canvas.addEventListener('mousemove', handleMove);
canvas.addEventListener('mouseup', handleEnd);
canvas.addEventListener('mouseleave', handleEnd);

canvas.addEventListener('touchstart', handleStart, { passive: false });
canvas.addEventListener('touchmove', handleMove, { passive: false });
canvas.addEventListener('touchend', handleEnd);
canvas.addEventListener('touchcancel', handleEnd);

// Initialize the game
function initGame() {
  showCurrentHint();
  drawBoard();
}

initGame();