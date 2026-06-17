export type LetterState = "absent" | "present" | "correct" | null;

export interface Letter {
  value: string;
  state: LetterState;
}

const letterColors: Record<Exclude<LetterState, null>, string> = {
  correct: "green",
  present: "yellow.600",
  absent: "gray",
};

export const getBgColor = (state: LetterState | undefined): string => {
  if (!state) return "none";
  return letterColors[state];
};
