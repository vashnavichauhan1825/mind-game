import { useMemo } from "react";
import Tile from "./Tile";
import { generateDeck } from "../utils/generateDeck";

function GameBoard() {
  const deck = useMemo(() => generateDeck(), []);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="grid grid-cols-4 gap-3 sm:gap-4">
        {deck.map((tile) => (
          <Tile key={tile.id} id={tile.id} iconId={tile.iconId} />
        ))}
      </div>
    </div>
  );
}

export default GameBoard;
