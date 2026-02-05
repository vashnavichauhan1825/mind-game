import { GameState, GameStatus } from "./types";
import { GameAction } from "./gameActions";
import { GAME_ACTIONS, GAME_CONFIG } from "./constants";

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case GAME_ACTIONS.FLIP_TILE: {
      const { tileId } = action.payload;

      if (
        state.flippedIds.includes(tileId) ||
        state.matchedIds.includes(tileId)
      ) {
        return state;
      }

      if (state.flippedIds.length >= GAME_CONFIG.MAX_FLIPPED_TILES) {
        return state;
      }

      const newFlippedIds = [...state.flippedIds, tileId];
      const newMoves = state.moves + 1;

      return {
        ...state,
        flippedIds: newFlippedIds,
        moves: newMoves,
        status: "playing" as GameStatus,
      };
    }

    case GAME_ACTIONS.RESET_GAME: {
      return {
        deck: action.payload.deck,
        flippedIds: [],
        matchedIds: [],
        moves: 0,
        status: "idle" as GameStatus,
      };
    }

    default:
      return state;
  }
}
