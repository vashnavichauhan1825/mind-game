import { GameState, GameStatus } from "./types";
import { GameAction } from "./gameActions";
import { GAME_ACTIONS, GAME_CONFIG } from "./constants";

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case GAME_ACTIONS.FLIP_TILE: {
      const { tileId } = action.payload;

      if (
        state.flippedIds.includes(tileId) ||
        state.matchedIds.includes(tileId) ||
        state.boardLocked
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

    case GAME_ACTIONS.MARK_MATCHED: {
      const { tileIds } = action.payload;
      return {
        ...state,
        matchedIds: [...state.matchedIds, ...tileIds],
        flippedIds: state.flippedIds.filter((id) => !tileIds.includes(id)),
      };
    }

    case GAME_ACTIONS.FLIP_BACK: {
      return {
        ...state,
        flippedIds: [],
      };
    }

    case GAME_ACTIONS.SET_BOARD_LOCKED: {
      return {
        ...state,
        boardLocked: action.payload.locked,
      };
    }

    case GAME_ACTIONS.RESET_GAME: {
      return {
        deck: action.payload.deck,
        flippedIds: [],
        matchedIds: [],
        moves: 0,
        status: "idle" as GameStatus,
        boardLocked: false,
      };
    }

    default:
      return state;
  }
}
