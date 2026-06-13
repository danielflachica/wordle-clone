import { Box, Center, Flex, Text } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";

const App = () => {
  const [word, setWord] = useState("");

  return (
    <Flex direction="column" minH="100vh">
      <Navbar />

      <Box as="main" flex="1">
        <Center>
          <Text>Word of the day: {word}</Text>
        </Center>
      </Box>

      <Footer />
    </Flex>
  );
};

export default App;
