import Tile from "./Tile";
import { GameState } from "../types";
import { GameAction } from "../gameActions";

interface GameBoardProps {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
}

function GameBoard({ state, dispatch }: GameBoardProps) {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="grid grid-cols-4 gap-3 sm:gap-4">
        {state.deck.map((tile) => (
          <Tile
            key={tile.id}
            id={tile.id}
            iconId={tile.iconId}
            isFlipped={state.flippedIds.includes(tile.id)}
            isMatched={state.matchedIds.includes(tile.id)}
            dispatch={dispatch}
          />
        ))}
      </div>
    </div>
  );
}

export default GameBoard;
