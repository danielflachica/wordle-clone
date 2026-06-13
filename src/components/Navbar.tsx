import { HStack, Heading } from "@chakra-ui/react";
import { ColorModeButton } from "@/components/ui/color-mode";

const Navbar = () => {
  return (
    <HStack as="header" p={4} justifyContent="space-between">
      <Heading as="h1">Wordle</Heading>
      <ColorModeButton />
    </HStack>
  );
};

export default Navbar;
