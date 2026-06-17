import { useEffect } from "react";

type KeyCallback = (key: string) => void;

const useKeyboardListener = (onPress: KeyCallback, disabled: boolean) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ignore ctrl/cmd key combos
      if (event.metaKey || event.ctrlKey) return;

      const key = event.key.toUpperCase();
      if (
        !disabled &&
        (key === "ENTER" || key === "BACKSPACE" || /^[A-Z]$/.test(key))
      ) {
        onPress(key);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onPress]);
};

export default useKeyboardListener;
