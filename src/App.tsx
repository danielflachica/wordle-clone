import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
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

  const { game, grid, handleKeyPress } = useGame(word);
  const { isSolved, isGameOver, toast } = game;

  useKeyboardListener(handleKeyPress, isSolved || isGameOver);
  useToastListener(toast);

  return (
    <Flex direction="column" minH="100vh">
      <Navbar />

      <Flex
        as="main"
        direction="column"
        flex="1"
        justifyContent="space-between"
      >
        <Box p={4}>
          <Box textAlign="center" mb={3}>
            {error ? (
              <Text color="red">{error}</Text>
            ) : (
              <Text>
                Word: {isLoading && <Spinner size="sm" />} {word}
              </Text>
            )}
          </Box>
          <GameGrid grid={grid} />
        </Box>

        <Keyboard
          disabled={isLoading || isSolved || isGameOver}
          onPress={handleKeyPress}
        />
      </Flex>

      <Toaster />

      <Footer />
    </Flex>
  );
};

export default App;
