import { Box, BoxProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props extends BoxProps {
  children?: ReactNode;
}

const GameCell = ({ children, ...props }: Props) => {
  return (
    <Box
      borderWidth="1px"
      borderColor="border.disabled"
      color="white"
      height="50px"
      fontWeight="black"
      padding={2}
      textAlign="center"
      textTransform="uppercase"
      {...props}
    >
      {children}
    </Box>
  );
};

export default GameCell;
