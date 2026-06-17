import { useState } from "react";
import { Toast } from "./useToastListener";
import { Letter } from "@/types/letter";
import { isValidWord } from "@/utils/dictionary";

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

const useGame = (word: string) => {
  const [game, setGame] = useState<Game>(initialGameState);
  const [grid, setGrid] = useState<Letter[][]>(
    // 2D Matrix of Letters (6 x 5 grid)
    Array.from({ length: 6 }, () =>
      Array.from({ length: 5 }, () => ({ value: "", state: null }))
    )
  );
  const [letterMap, setLetterMap] = useState<Letter[]>(
    // [{'A', null}, {'B', null}, ..., {'Z', null}]
    Array.from({ length: 26 }, (_, i) => ({
      value: String.fromCharCode(65 + i),
      state: null,
    }))
  );

  const handleKeyPress = (key: string) => {
    // Destructure Game object
    const { activeRow, activeCol, isSolved, isGameOver, toast } = game;

    // Game over
    if (isSolved || isGameOver || activeRow === grid.length) return;

    // Create new grid and letterMap (don't mutate original objects)
    const activeGrid = grid.map((row) => row.map((cell) => ({ ...cell })));
    const activeLetters = letterMap.map((letter) => ({ ...letter }));

    // Extract current guess based on active row
    const currentGuess = activeGrid[activeRow]
      .map((cell) => cell.value)
      .join("");

    // Reusable "empty" toast message
    const emptyToast: Toast = { ...toast, message: "" };

    // CASE 1: Player types a valid Letter
    if (/^[A-Z]$/.test(key) && activeCol < word.length) {
      activeGrid[activeRow][activeCol].value = key;
      setGrid(activeGrid);
      setGame({ ...game, activeCol: activeCol + 1, toast: emptyToast });
    }

    // CASE 2: Player erases a letter
    if (key === "BACKSPACE" && activeCol > 0) {
      activeGrid[activeRow][activeCol - 1].value = "";
      setGrid(activeGrid);
      setGame({ ...game, activeCol: activeCol - 1, toast: emptyToast });
    }

    // CASE 3: Player submits a word guess
    if (key === "ENTER") {
      // Short guess
      if (currentGuess.length < word.length) {
        setGame({
          ...game,
          toast: { message: "Not enough letters!", type: "info" },
        });
        return;
      }

      // Invalid guess (not a real word)
      if (!isValidWord(currentGuess)) {
        setGame({
          ...game,
          toast: { message: "Not a word!", type: "info" },
        });
        return;
      }

      // Correct length, assign colors to cells and keyboard
      const answerArray = word.toUpperCase().split("");
      // Loop 1: Mark all correct matches first
      for (let i = 0; i < activeGrid[activeRow].length; i++) {
        const guess = activeGrid[activeRow][i].value.toUpperCase();
        const letterIndex = letterMap.findIndex((l) => l.value === guess);

        if (guess === answerArray[i]) {
          activeGrid[activeRow][i].state = "correct";
          activeLetters[letterIndex].state = "correct";
          answerArray[i] = "_"; // Placeholder: locks this letter out from yellow checks
        }
      }
      // Loop 2: Rescan for yellow/gray letters
      for (let i = 0; i < activeGrid[activeRow].length; i++) {
        // Skip cells we already marked correct in Loop 1
        if (activeGrid[activeRow][i].state === "correct") continue;

        const guess = activeGrid[activeRow][i].value.toUpperCase();
        const targetIndex = answerArray.indexOf(guess);
        const letterIndex = letterMap.findIndex((l) => l.value === guess);

        // If the letter exists anywhere else in answerArray, mark as yellow
        const letterIsPresent = targetIndex !== -1;
        const letterState = letterIsPresent ? "present" : "absent";

        activeGrid[activeRow][i].state = letterState;
        // if letter on keyboard is already correct, don't mark it as present/absent anymore
        if (activeLetters[letterIndex].state !== "correct") {
          activeLetters[letterIndex].state = letterState;
        }
        // Consume this specific character instance
        if (letterIsPresent) {
          answerArray[targetIndex] = "_";
        }
      }

      // Bundle updates to grid and letterMap state
      setGrid(activeGrid);
      setLetterMap(activeLetters);

      // Correct guess
      if (currentGuess.toUpperCase() === word.toUpperCase()) {
        setGame({
          ...game,
          isSolved: true,
          toast: { message: "You guessed it!", type: "success" },
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

  return { game, grid, letterMap, handleKeyPress };
};

export default useGame;
