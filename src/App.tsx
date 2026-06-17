import { Box, Center, Flex, Spinner, Text, VStack } from "@chakra-ui/react";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Keyboard from "./components/Keyboard";
import GameGrid from "./components/GameGrid";
import useGame from "./hooks/useGame";
import useWords from "./hooks/useWords";
import useKeyboardListener from "./hooks/useKeyboardListener";
import useToastListener from "./hooks/useToastListener";

const App = () => {
  const { words, error, isLoading } = useWords();
  const word = words.length > 0 ? words[0].word : "";

  const { game, grid, letterMap, handleKeyPress } = useGame(word);
  const { isSolved, isGameOver, toast } = game;

  useKeyboardListener(handleKeyPress, isSolved || isGameOver);
  useToastListener(toast);

  return (
    <Flex direction="column" minH="100dvh" bg="bg.subtle">
      <Navbar />

      <Flex
        as="main"
        direction="column"
        flex="1"
        justifyContent="space-between"
      >
        <Box px={4} pb={4} pt={0}>
          <Box textAlign="center" mb={3}>
            {error && <Text color="red">{error}</Text>}
            {isLoading && (
              <Box pos="absolute" inset="0" bg="bg/80">
                <Center h="full">
                  <VStack>
                    <Spinner />
                    <Text>Fetching word...</Text>
                  </VStack>
                </Center>
              </Box>
            )}
          </Box>
          <GameGrid grid={grid} />
        </Box>

        <Keyboard
          disabled={isLoading || isSolved || isGameOver}
          letterMap={letterMap}
          onPress={handleKeyPress}
        />
      </Flex>

      <Toaster />

      <Footer />
    </Flex>
  );
};

export default App;
