import { useState } from "react";
import { Toast } from "./useToastListener";

interface Game {
  activeRow: number;
  activeCol: number;
  isSolved: boolean;
  isGameOver: boolean;
  toast: Toast;
}

const initialGameState: Game = {
  activeRow: 0,
  activeCol: 0,
  isSolved: false,
  isGameOver: false,
  toast: { message: "", type: "info" },
};

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
  const [game, setGame] = useState<Game>(initialGameState);
  const [grid, setGrid] = useState<string[][]>(initialGrid);

  const handleKeyPress = (key: string) => {
    // Destructure Game object
    const { activeRow, activeCol, isSolved, isGameOver, toast } = game;

    // Game over
    if (isSolved || isGameOver || activeRow === grid.length) return;

    // Create new grid (don't mutate original grid)
    const activeGrid = grid.map((row) => [...row]);
    const currentGuess = activeGrid[activeRow].join("");

    // Reset toast message
    const emptyToast: Toast = { ...toast, message: "" };

    // CASE 1: Player types a valid Letter
    if (/^[A-Z]$/.test(key) && activeCol < word.length) {
      activeGrid[activeRow][activeCol] = key;
      setGrid(activeGrid);
      setGame({ ...game, activeCol: activeCol + 1, toast: emptyToast });
    }

    // CASE 2: Player erases a letter
    if (key === "BACKSPACE" && activeCol > 0) {
      activeGrid[activeRow][activeCol - 1] = "";
      setGrid(activeGrid);
      setGame({ ...game, activeCol: activeCol - 1, toast: emptyToast });
    }

    // CASE 3: Player submits a word guess
    if (key === "ENTER") {
      // Short guess
      if (currentGuess.length < word.length) {
        setGame({
          ...game,
          toast: { message: "Word is too short!", type: "info" },
        });
        return;
      }

      // Correct guess
      if (currentGuess.toUpperCase() === word.toUpperCase()) {
        setGame({
          ...game,
          isSolved: true,
          toast: { message: "You win!", type: "success" },
        });
        return;
      }

      // Wrong guess, game over
      if (activeRow === activeGrid.length - 1) {
        setGame({
          ...game,
          isGameOver: true,
          toast: {
            message: `You lost! The word was ${word}`,
            type: "error",
          },
        });
        return;
      }

      // Wrong guess, move to next row
      setGame({
        ...game,
        activeRow: activeRow + 1,
        activeCol: 0,
        toast: emptyToast,
      });
    }
  };

  return { game, grid, handleKeyPress };
};

export default useGame;
