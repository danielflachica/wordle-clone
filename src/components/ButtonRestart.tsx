import { Box, Button, Center, Presence } from "@chakra-ui/react";

const ButtonRestart = () => {
  return (
    <Box pos="absolute" inset="0" bg="bg/80">
      <Center h="full">
        <Presence
          present={true}
          animationName={{ _open: "fade-in", _closed: "fade-out" }}
          animationDuration="moderate"
        >
          <Button
            bg="bg.emphasized"
            color="white"
            type="button"
            onClick={() => window.location.reload()}
          >
            Play again
          </Button>
        </Presence>
      </Center>
    </Box>
  );
};

export default ButtonRestart;
