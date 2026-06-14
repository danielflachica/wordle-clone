import { useState } from "react";
import { Toast } from "./useToastListener";

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
  const [toast, setToast] = useState<Toast>({} as Toast);
  // convert above into game object

  const handleKeyPress = (key: string) => {
    // Game over
    if (isSolved || isGameOver || activeRow === grid.length) return;

    // Create new grid (don't mutate original grid)
    const activeGrid = grid.map((row) => [...row]);
    const currentGuess = activeGrid[activeRow].join("");

    // Reset message
    setToast({ ...toast, message: "" });

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
        setToast({ ...toast, message: "Word is too short!", type: "info" });
        return;
      }

      if (currentGuess.toUpperCase() === word.toUpperCase()) {
        setSolved(true);
        setToast({ ...toast, message: "You win!", type: "success" });
        return;
      }

      if (activeRow === activeGrid.length - 1) {
        setGameOver(true);
        setToast({
          ...toast,
          message: `You lost! The word was ${word}`,
          type: "error",
        });
        return;
      }

      // Move to next row
      setActiveRow(activeRow + 1);
      setActiveCol(0);
    }
  };

  return { grid, handleKeyPress, isSolved, isGameOver, toast };
};

export default useGame;
