import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props extends ButtonProps {
  children: ReactNode;
}

const Key = ({ children, ...props }: Props) => {
  return (
    <Button size="xs" textTransform="uppercase" variant="surface" {...props}>
      {children}
    </Button>
  );
};

export default Key;
