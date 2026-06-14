import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props extends ButtonProps {
  children: ReactNode;
}

const Key = ({ children, ...props }: Props) => {
  return (
    <Button
      size="xs"
      px={0}
      py={5}
      textTransform="uppercase"
      variant="surface"
      {...props}
    >
      {children}
    </Button>
  );
};

export default Key;
