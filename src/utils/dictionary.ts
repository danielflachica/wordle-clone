import answerKey from "@/data/answerKey";
import allowedGuesses from "@/data/allowedGuesses";

const answers = new Set([...answerKey].map((word) => word.toLowerCase()));

const guesses = new Set([...allowedGuesses].map((word) => word.toLowerCase()));

const dictionary = new Set(
  [...answerKey, ...allowedGuesses].map((word) => word.toLowerCase())
);

export const isValidAnswer = (answer: string): boolean => {
  return answers.has(answer.toLowerCase());
};

export const isValidGuess = (guess: string): boolean => {
  return guesses.has(guess.toLowerCase());
};

export const isValidWord = (word: string): boolean => {
  return dictionary.has(word.toLowerCase());
};

export default { answerKey, allowedGuesses };
