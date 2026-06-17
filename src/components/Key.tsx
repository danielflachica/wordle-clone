import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { LetterState, getBgColor } from "@/types/letter";

interface Props extends ButtonProps {
  children: ReactNode;
  state?: LetterState;
  value?: string;
  onPress: (value: string) => void;
}

const Key = ({ children, state, value, onPress, ...props }: Props) => {
  const handlePress = () => {
    const pressed = value || children?.toString() || "";
    onPress(pressed);
  };

  return (
    <Button
      background={getBgColor(state)}
      color={state ? "white" : ""}
      size="xs"
      px={0}
      py={5}
      textTransform="uppercase"
      variant="surface"
      onClick={handlePress}
      {...props}
    >
      {children}
    </Button>
  );
};

export default Key;
