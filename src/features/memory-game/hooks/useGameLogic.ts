import { useEffect, useRef } from "react";
import { useGame } from "./useGame.js";
import { markMatched, flipBack, setBoardLocked } from "../store/actions";
import { GAME_CONFIG } from "../constants/gameConfig";
import { Tile } from "../store/types";

export function useGameLogic() {
  const { state, dispatch } = useGame();
  const processingRef = useRef(false);

  useEffect(() => {
    if (processingRef.current) {
      return;
    }

    if (state.flippedIds.length === GAME_CONFIG.MAX_FLIPPED_TILES) {
      processingRef.current = true;
      const [firstId, secondId] = state.flippedIds;
      const firstTile = state.deck.find((tile: Tile) => tile.id === firstId);
      const secondTile = state.deck.find((tile: Tile) => tile.id === secondId);

      if (firstTile && secondTile) {
        if (firstTile.iconId === secondTile.iconId) {
          dispatch(markMatched([firstId, secondId]));
          processingRef.current = false;
        } else {
          dispatch(setBoardLocked(true));
          const timeoutId = setTimeout(() => {
            dispatch(flipBack());
            dispatch(setBoardLocked(false));
            processingRef.current = false;
          }, 700);

          return () => {
            clearTimeout(timeoutId);
            processingRef.current = false;
          };
        }
      } else {
        processingRef.current = false;
      }
    } else {
      processingRef.current = false;
    }
  }, [state.flippedIds, state.deck, dispatch]);
}
