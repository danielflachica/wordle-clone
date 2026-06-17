import answerKey from "@/data/answerKey";
import allowedGuesses from "@/data/allowedGuesses";

const dictionary = new Set(
  [...answerKey, ...allowedGuesses].map((word) => word.toLowerCase())
);

export const isValidWord = (guess: string): boolean => {
  return dictionary.has(guess.toLowerCase());
};
