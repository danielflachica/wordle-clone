import { Grid, GridItem, HStack } from "@chakra-ui/react";
import { IoBackspaceOutline, IoEnterOutline } from "react-icons/io5";
import Key from "./Key";

interface Props {
  spacing?: string | number;
  disabled?: boolean;
  onPress: (value: string) => void;
}

const Keyboard = ({ spacing = "5px", disabled = false, onPress }: Props) => {
  return (
    <Grid
      gap={spacing}
      gridTemplateRows="repeat(3, auto)"
      mx="auto"
      w="max-content"
    >
      <GridItem>
        <HStack gap={spacing} justify="center">
          <Key disabled={disabled} onPress={onPress}>
            Q
          </Key>
          <Key disabled={disabled} onPress={onPress}>
            W
          </Key>
          <Key disabled={disabled} onPress={onPress}>
            E
          </Key>
          <Key disabled={disabled} onPress={onPress}>
            R
          </Key>
          <Key disabled={disabled} onPress={onPress}>
            T
          </Key>
          <Key disabled={disabled} onPress={onPress}>
            Y
          </Key>
          <Key disabled={disabled} onPress={onPress}>
            U
          </Key>
          <Key disabled={disabled} onPress={onPress}>
            I
          </Key>
          <Key disabled={disabled} onPress={onPress}>
            O
          </Key>
          <Key disabled={disabled} onPress={onPress}>
            P
          </Key>
        </HStack>
      </GridItem>
      <GridItem>
        <HStack gap={spacing} justify="center">
          <Key disabled={disabled} onPress={onPress}>
            A
          </Key>
          <Key disabled={disabled} onPress={onPress}>
            S
          </Key>
          <Key disabled={disabled} onPress={onPress}>
            D
          </Key>
          <Key disabled={disabled} onPress={onPress}>
            F
          </Key>
          <Key disabled={disabled} onPress={onPress}>
            G
          </Key>
          <Key disabled={disabled} onPress={onPress}>
            H
          </Key>
          <Key disabled={disabled} onPress={onPress}>
            J
          </Key>
          <Key disabled={disabled} onPress={onPress}>
            K
          </Key>
          <Key disabled={disabled} onPress={onPress}>
            L
          </Key>
        </HStack>
      </GridItem>
      <GridItem>
        <HStack gap={spacing} justify="center">
          <Key disabled={disabled} onPress={onPress} px={3} value="ENTER">
            <IoEnterOutline />
          </Key>
          <Key disabled={disabled} onPress={onPress}>
            Z
          </Key>
          <Key disabled={disabled} onPress={onPress}>
            X
          </Key>
          <Key disabled={disabled} onPress={onPress}>
            C
          </Key>
          <Key disabled={disabled} onPress={onPress}>
            V
          </Key>
          <Key disabled={disabled} onPress={onPress}>
            B
          </Key>
          <Key disabled={disabled} onPress={onPress}>
            N
          </Key>
          <Key disabled={disabled} onPress={onPress}>
            M
          </Key>
          <Key disabled={disabled} onPress={onPress} px={3} value="BACKSPACE">
            <IoBackspaceOutline />
          </Key>
        </HStack>
      </GridItem>
    </Grid>
  );
};

export default Keyboard;
