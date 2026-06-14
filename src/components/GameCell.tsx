import { Box, BoxProps, Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props extends BoxProps {
  children?: ReactNode;
}

const GameCell = ({ children, ...props }: Props) => {
  return (
    <Box
      borderWidth="1px"
      borderColor="border.disabled"
      // color="white"
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
