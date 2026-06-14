import { useState } from "react";

const initialGrid = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

const evaluateRow = (guess: string, word: string) => {
  return guess === word;
};

const useGame = (word: string) => {
  const [grid, setGrid] = useState<string[][]>(initialGrid);
  const [activeRow, setActiveRow] = useState(0);
  const [activeCol, setActiveCol] = useState(0);
  const [isSolved, setSolved] = useState(false);
  const [isGameOver, setGameOver] = useState(false);

  const handleKeyPress = (key: string) => {
    // Game over
    if (isSolved || isGameOver || activeRow === grid.length) return;

    // Create new grid (don't mutate original grid)
    const activeGrid = grid.map((row) => [...row]);
    const currentGuess = activeGrid[activeRow].join("");

    // console.log(key, activeRow.toString(), activeCol.toString());

    // Player types a valid Letter
    if (/^[A-Z]$/.test(key) && activeCol < word.length) {
      activeGrid[activeRow][activeCol] = key;
      setGrid(activeGrid);
      setActiveCol(activeCol + 1);
    }

    // Player erases a letter
    if (key === "BACKSPACE" && activeCol > 0) {
      activeGrid[activeRow][activeCol - 1] = "";
      setGrid(activeGrid);
      setActiveCol(activeCol - 1);
    }

    // Player submits a guess
    if (key === "ENTER") {
      if (currentGuess.length < word.length) {
        console.log("Word is too short");
        return;
      }

      if (currentGuess.toUpperCase() === word.toUpperCase()) {
        setSolved(true);
        console.log("YOU WIN!");
        return;
      }

      if (activeRow === activeGrid.length - 1) {
        setGameOver(true);
        console.log("YOU LOST! The word was: " + word);
        return;
      }

      // Move to next row
      setActiveRow(activeRow + 1);
      setActiveCol(0);
      console.log("Moved to next row");
    }
  };

  return { grid, handleKeyPress, isSolved, isGameOver };
};

export default useGame;
