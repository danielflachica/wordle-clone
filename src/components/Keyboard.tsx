import { Grid, GridItem, HStack } from "@chakra-ui/react";
import { IoBackspaceOutline, IoEnterOutline } from "react-icons/io5";
import Key from "./Key";
import { Letter } from "@/types/letter";

interface Props {
  spacing?: string | number;
  disabled?: boolean;
  letterMap: Letter[];
  onPress: (value: string) => void;
}

const Keyboard = ({
  spacing = "5px",
  disabled = false,
  letterMap,
  onPress,
}: Props) => {
  const stateLookup = Object.fromEntries(
    letterMap.map((letter) => [letter.value, letter.state])
  );
  const getState = (letter: string) => stateLookup[letter] ?? null;

  return (
    <Grid
      gap={spacing}
      gridTemplateRows="repeat(3, auto)"
      mx="auto"
      w="max-content"
    >
      <GridItem>
        <HStack gap={spacing} justify="center">
          <Key disabled={disabled} onPress={onPress} state={getState("Q")}>
            Q
          </Key>
          <Key disabled={disabled} onPress={onPress} state={getState("W")}>
            W
          </Key>
          <Key disabled={disabled} onPress={onPress} state={getState("E")}>
            E
          </Key>
          <Key disabled={disabled} onPress={onPress} state={getState("R")}>
            R
          </Key>
          <Key disabled={disabled} onPress={onPress} state={getState("T")}>
            T
          </Key>
          <Key disabled={disabled} onPress={onPress} state={getState("Y")}>
            Y
          </Key>
          <Key disabled={disabled} onPress={onPress} state={getState("U")}>
            U
          </Key>
          <Key disabled={disabled} onPress={onPress} state={getState("I")}>
            I
          </Key>
          <Key disabled={disabled} onPress={onPress} state={getState("O")}>
            O
          </Key>
          <Key disabled={disabled} onPress={onPress} state={getState("P")}>
            P
          </Key>
        </HStack>
      </GridItem>
      <GridItem>
        <HStack gap={spacing} justify="center">
          <Key disabled={disabled} onPress={onPress} state={getState("A")}>
            A
          </Key>
          <Key disabled={disabled} onPress={onPress} state={getState("S")}>
            S
          </Key>
          <Key disabled={disabled} onPress={onPress} state={getState("D")}>
            D
          </Key>
          <Key disabled={disabled} onPress={onPress} state={getState("F")}>
            F
          </Key>
          <Key disabled={disabled} onPress={onPress} state={getState("G")}>
            G
          </Key>
          <Key disabled={disabled} onPress={onPress} state={getState("H")}>
            H
          </Key>
          <Key disabled={disabled} onPress={onPress} state={getState("J")}>
            J
          </Key>
          <Key disabled={disabled} onPress={onPress} state={getState("K")}>
            K
          </Key>
          <Key disabled={disabled} onPress={onPress} state={getState("L")}>
            L
          </Key>
        </HStack>
      </GridItem>
      <GridItem>
        <HStack gap={spacing} justify="center">
          <Key disabled={disabled} onPress={onPress} px={3} value="ENTER">
            <IoEnterOutline />
          </Key>
          <Key disabled={disabled} onPress={onPress} state={getState("Z")}>
            Z
          </Key>
          <Key disabled={disabled} onPress={onPress} state={getState("X")}>
            X
          </Key>
          <Key disabled={disabled} onPress={onPress} state={getState("C")}>
            C
          </Key>
          <Key disabled={disabled} onPress={onPress} state={getState("V")}>
            V
          </Key>
          <Key disabled={disabled} onPress={onPress} state={getState("B")}>
            B
          </Key>
          <Key disabled={disabled} onPress={onPress} state={getState("N")}>
            N
          </Key>
          <Key disabled={disabled} onPress={onPress} state={getState("M")}>
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
