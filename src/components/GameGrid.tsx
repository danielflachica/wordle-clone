import { SimpleGrid } from "@chakra-ui/react";
import { Letter } from "@/types/letter";
import GameCell from "./GameCell";
import React from "react";

interface Props {
  spacing?: string | number;
  grid: Letter[][];
}

const GameGrid = ({ spacing = "5px", grid }: Props) => {
  return (
    <SimpleGrid columns={5} gap={spacing} maxW="320px" mx="auto">
      {grid.map((gRow, i) => (
        <React.Fragment key={`row-${i}`}>
          {gRow.map((gCol, j) => (
            <GameCell key={`cell-${i}-${j}`} state={grid[i][j].state}>
              {grid[i][j].value}
            </GameCell>
          ))}
        </React.Fragment>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
