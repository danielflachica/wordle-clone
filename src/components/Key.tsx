import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props extends ButtonProps {
  children: ReactNode;
  value?: string;
  onPress: (value: string) => void;
}

const Key = ({ children, value, onPress, ...props }: Props) => {
  const handlePress = () => {
    const pressed = value || children?.toString() || "";
    onPress(pressed);
  };

  return (
    <Button
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
