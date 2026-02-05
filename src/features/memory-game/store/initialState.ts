import { GameState, GameStatus, Tile } from "./types";

export const createInitialState = (deck: Tile[]): GameState => ({
  deck,
  flippedIds: [],
  matchedIds: [],
  moves: 0,
  status: GameStatus.IDLE,
  boardLocked: false,
});
