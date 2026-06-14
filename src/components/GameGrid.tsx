import { SimpleGrid } from "@chakra-ui/react";
import GameCell from "./GameCell";
import React from "react";

interface Props {
  spacing?: string | number;
  grid: string[][];
}

const GameGrid = ({ spacing = "5px", grid }: Props) => {
  return (
    <SimpleGrid columns={5} gap={spacing} maxW="270px" mx="auto">
      {grid.map((gRow, i) => (
        <React.Fragment key={`row-${i}`}>
          {gRow.map((gCol, j) => (
            <GameCell key={`cell-${i}-${j}`}>{grid[i][j]}</GameCell>
          ))}
        </React.Fragment>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
