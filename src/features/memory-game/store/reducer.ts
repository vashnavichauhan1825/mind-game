import { GameState, GameStatus } from "./types";
import { GameAction } from "./actions";
import { GAME_ACTIONS } from "../constants/actionTypes";
import { GAME_CONFIG } from "../constants/gameConfig";

function canFlipTile(state: GameState, tileId: number): boolean {
  return (
    state.status !== GameStatus.WON &&
    !state.flippedIds.includes(tileId) &&
    !state.matchedIds.includes(tileId) &&
    !state.boardLocked &&
    state.flippedIds.length < GAME_CONFIG.MAX_FLIPPED_TILES
  );
}

export function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case GAME_ACTIONS.FLIP_TILE: {
      const { tileId } = action.payload;

      if (!canFlipTile(state, tileId)) {
        return state;
      }

      const newFlippedIds = [...state.flippedIds, tileId];
      const newMoves = state.moves + 1;

      return {
        ...state,
        flippedIds: newFlippedIds,
        moves: newMoves,
        status: GameStatus.PLAYING,
      };
    }

    case GAME_ACTIONS.MARK_MATCHED: {
      const { tileIds } = action.payload;

      const matchedSet = new Set([...state.matchedIds, ...tileIds]);
      const newMatchedIds = Array.from(matchedSet);

      const newFlippedIds = state.flippedIds.filter(
        (id) => !tileIds.includes(id),
      );

      const isWon = newMatchedIds.length === state.deck.length;

      return {
        ...state,
        matchedIds: newMatchedIds,
        flippedIds: newFlippedIds,
        status: isWon ? GameStatus.WON : state.status,
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
        status: GameStatus.IDLE,
        boardLocked: false,
      };
    }

    default:
      return state;
  }
}
