import { Grid, GridItem, HStack } from "@chakra-ui/react";
import { IoBackspaceOutline, IoEnterOutline } from "react-icons/io5";
import Key from "./Key";

interface Props {
  spacing?: string | number;
  disabled?: boolean;
}

const Keyboard = ({ spacing = "5px", disabled = false }: Props) => {
  return (
    <Grid
      gap={spacing}
      gridTemplateRows="repeat(3, auto)"
      mx="auto"
      w="max-content"
    >
      <GridItem>
        <HStack gap={spacing} justify="center">
          <Key disabled={disabled}>Q</Key>
          <Key disabled={disabled}>W</Key>
          <Key disabled={disabled}>E</Key>
          <Key disabled={disabled}>R</Key>
          <Key disabled={disabled}>T</Key>
          <Key disabled={disabled}>Y</Key>
          <Key disabled={disabled}>U</Key>
          <Key disabled={disabled}>I</Key>
          <Key disabled={disabled}>O</Key>
          <Key disabled={disabled}>P</Key>
        </HStack>
      </GridItem>
      <GridItem>
        <HStack gap={spacing} justify="center">
          <Key disabled={disabled}>A</Key>
          <Key disabled={disabled}>S</Key>
          <Key disabled={disabled}>D</Key>
          <Key disabled={disabled}>F</Key>
          <Key disabled={disabled}>G</Key>
          <Key disabled={disabled}>H</Key>
          <Key disabled={disabled}>J</Key>
          <Key disabled={disabled}>K</Key>
          <Key disabled={disabled}>L</Key>
        </HStack>
      </GridItem>
      <GridItem>
        <HStack gap={spacing} justify="center">
          <Key disabled={disabled} px={3}>
            <IoEnterOutline />
          </Key>
          <Key disabled={disabled}>Z</Key>
          <Key disabled={disabled}>X</Key>
          <Key disabled={disabled}>C</Key>
          <Key disabled={disabled}>V</Key>
          <Key disabled={disabled}>B</Key>
          <Key disabled={disabled}>N</Key>
          <Key disabled={disabled}>M</Key>
          <Key disabled={disabled} px={3}>
            <IoBackspaceOutline />
          </Key>
        </HStack>
      </GridItem>
    </Grid>
  );
};

export default Keyboard;
