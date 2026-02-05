import { Tile } from "./types";
import { GAME_ACTIONS } from "./constants";

export type GameAction =
  | { type: typeof GAME_ACTIONS.FLIP_TILE; payload: { tileId: number } }
  | { type: typeof GAME_ACTIONS.RESET_GAME; payload: { deck: Tile[] } };

export const flipTile = (tileId: number): GameAction => ({
  type: GAME_ACTIONS.FLIP_TILE,
  payload: { tileId },
});

export const resetGame = (deck: Tile[]): GameAction => ({
  type: GAME_ACTIONS.RESET_GAME,
  payload: { deck },
});
