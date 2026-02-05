import { Tile } from "./types";
import { GAME_ACTIONS } from "../constants/actionTypes";

export type GameAction =
  | { type: typeof GAME_ACTIONS.FLIP_TILE; payload: { tileId: number } }
  | { type: typeof GAME_ACTIONS.RESET_GAME; payload: { deck: Tile[] } }
  | { type: typeof GAME_ACTIONS.MARK_MATCHED; payload: { tileIds: number[] } }
  | { type: typeof GAME_ACTIONS.FLIP_BACK }
  | {
      type: typeof GAME_ACTIONS.SET_BOARD_LOCKED;
      payload: { locked: boolean };
    };

export const flipTile = (tileId: number): GameAction => ({
  type: GAME_ACTIONS.FLIP_TILE,
  payload: { tileId },
});

export const resetGame = (deck: Tile[]): GameAction => ({
  type: GAME_ACTIONS.RESET_GAME,
  payload: { deck },
});

export const markMatched = (tileIds: number[]): GameAction => ({
  type: GAME_ACTIONS.MARK_MATCHED,
  payload: { tileIds },
});

export const flipBack = (): GameAction => ({
  type: GAME_ACTIONS.FLIP_BACK,
});

export const setBoardLocked = (locked: boolean): GameAction => ({
  type: GAME_ACTIONS.SET_BOARD_LOCKED,
  payload: { locked },
});
