import { Box, BoxProps, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props extends BoxProps {
  children?: ReactNode;
  state?: "absent" | "present" | "correct" | null;
}

export interface Cell {
  value: string;
  state: "absent" | "present" | "correct" | null;
}

const GameCell = ({ children, state, ...props }: Props) => {
  const bgColor = state
    ? state === "correct"
      ? "green"
      : state === "present"
      ? "yellow.600"
      : "gray"
    : "none";

  return (
    <Box
      borderWidth="1px"
      borderColor={
        state ? bgColor : children ? "gray.500/50" : "border.disabled"
      }
      background={bgColor}
      color={state ? "white" : ""}
      height="50px"
      fontWeight="black"
      padding={2}
      textTransform="uppercase"
      {...props}
    >
      <Flex alignItems="center" justifyContent="center" h="100%">
        {children}
      </Flex>
    </Box>
  );
};

export default GameCell;
