import { useState } from "react";
import { Box, Center, Flex, Spinner, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import useWords from "./hooks/useWords";
import Keyboard from "./components/Keyboard";

const App = () => {
  const [isSolved, setSolved] = useState(false);
  const { words, error, isLoading } = useWords();
  const word = words.length > 0 ? words[0].word : "";

  return (
    <Flex direction="column" minH="100vh">
      <Navbar />

      <Box as="main" flex="1">
        <Center>
          {error ? (
            <Text color="red">{error}</Text>
          ) : (
            <Text>
              Word: {isLoading && <Spinner size="sm" />} {word}
            </Text>
          )}
        </Center>

        <Box h="100px">{/* Game Grid */}</Box>

        <Keyboard disabled={isLoading} />
      </Box>

      <Footer />
    </Flex>
  );
};

export default App;
