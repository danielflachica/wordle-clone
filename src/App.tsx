import { useState } from "react";
import { Box, Flex, Spinner, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import useWords from "./hooks/useWords";
import Keyboard from "./components/Keyboard";
import GameGrid from "./components/GameGrid";

const App = () => {
  const [isSolved, setSolved] = useState(false);
  const { words, error, isLoading } = useWords();
  const word = words.length > 0 ? words[0].word : "";
  const grid = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ];

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
          disabled={isLoading}
          onPress={(value) => console.log(value)}
        />
      </Flex>

      <Footer />
    </Flex>
  );
};

export default App;
