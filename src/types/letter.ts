export type LetterState = "absent" | "present" | "correct" | null;

export interface Letter {
  value: string;
  state: LetterState;
}

const letterColors: Record<Exclude<LetterState, null>, string> = {
  correct: "green.solid",
  present: "yellow.focusRing",
  absent: "bg.emphasized",
};

export const getBgColor = (state: LetterState | undefined): string => {
  if (!state) return "none";
  return letterColors[state];
};
