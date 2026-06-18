import { Box, Center, Spinner, VStack, Text } from "@chakra-ui/react";

const Loader = () => {
  return (
    <Box pos="absolute" inset="0" bg="bg/80">
      <Center h="full">
        <VStack>
          <Spinner />
          <Text color="fg.subtle">Fetching word...</Text>
        </VStack>
      </Center>
    </Box>
  );
};

export default Loader;
