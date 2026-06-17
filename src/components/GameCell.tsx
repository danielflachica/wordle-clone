import { Box, BoxProps, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { LetterState, getBgColor } from "@/types/letter";

interface Props extends BoxProps {
  children?: ReactNode;
  state?: LetterState;
}

const GameCell = ({ children, state, ...props }: Props) => {
  const bgColor = getBgColor(state);

  return (
    <Box
      borderWidth="1px"
      borderColor={state ? bgColor : children ? "border.emphasized" : "border"}
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
