import { useEffect } from "react";
import { useGameContext } from "./GameProvider.tsx";
import { GameState } from "./types.ts";
import {
  GameAction,
  markMatched,
  flipBack,
  setBoardLocked,
} from "./gameActions.ts";
import { GAME_CONFIG } from "./constants.ts";

export function useGame(): {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
} {
  const { state, dispatch } = useGameContext();

  useEffect(() => {
    if (state.flippedIds.length === GAME_CONFIG.MAX_FLIPPED_TILES) {
      const [firstId, secondId] = state.flippedIds;
      const firstTile = state.deck.find((tile) => tile.id === firstId);
      const secondTile = state.deck.find((tile) => tile.id === secondId);

      if (firstTile && secondTile) {
        if (firstTile.iconId === secondTile.iconId) {
          dispatch(markMatched([firstId, secondId]));
        } else {
          dispatch(setBoardLocked(true));
          const timeoutId = setTimeout(() => {
            dispatch(flipBack());
            dispatch(setBoardLocked(false));
          }, 700);

          return () => clearTimeout(timeoutId);
        }
      }
    }
  }, [state.flippedIds, state.deck, dispatch]);

  return { state, dispatch };
}
