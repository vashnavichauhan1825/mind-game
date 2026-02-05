import Tile from "./Tile";
import { useGame } from "../hooks/useGame";
import { useGameLogic } from "../hooks/useGameLogic";

function GameBoard() {
  const { state } = useGame();
  useGameLogic();

  return (
    <div className="w-full ">
      <div className="grid grid-cols-4 gap-3 sm:gap-4">
        {state.deck.map((tile) => (
          <Tile
            key={tile.id}
            id={tile.id}
            iconId={tile.iconId}
            isFlipped={state.flippedIds.includes(tile.id)}
            isMatched={state.matchedIds.includes(tile.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default GameBoard;
