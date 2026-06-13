import { Grid, GridItem, HStack } from "@chakra-ui/react";
import { IoBackspaceOutline, IoEnterOutline } from "react-icons/io5";
import Key from "./Key";

interface Props {
  spacing?: string | number;
}

const Keyboard = ({ spacing = "5px" }: Props) => {
  return (
    <Grid
      gap={spacing}
      gridTemplateRows="repeat(3, auto)"
      mx="auto"
      w="max-content"
    >
      <GridItem>
        <HStack gap={spacing} justify="center">
          <Key>Q</Key>
          <Key>W</Key>
          <Key>E</Key>
          <Key>R</Key>
          <Key>T</Key>
          <Key>Y</Key>
          <Key>U</Key>
          <Key>I</Key>
          <Key>O</Key>
          <Key>P</Key>
        </HStack>
      </GridItem>
      <GridItem>
        <HStack gap={spacing} justify="center">
          <Key>A</Key>
          <Key>S</Key>
          <Key>D</Key>
          <Key>F</Key>
          <Key>G</Key>
          <Key>H</Key>
          <Key>J</Key>
          <Key>K</Key>
          <Key>L</Key>
        </HStack>
      </GridItem>
      <GridItem>
        <HStack gap={spacing} justify="center">
          <Key>
            <IoEnterOutline />
          </Key>
          <Key>Z</Key>
          <Key>S</Key>
          <Key>C</Key>
          <Key>V</Key>
          <Key>B</Key>
          <Key>N</Key>
          <Key>M</Key>
          <Key>
            <IoBackspaceOutline />
          </Key>
        </HStack>
      </GridItem>
    </Grid>
  );
};

export default Keyboard;
