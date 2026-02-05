export interface Tile {
  id: number;
  iconId: number;
}

export type GameStatus = "idle" | "playing" | "won";

export interface GameState {
  deck: Tile[];
  flippedIds: number[];
  matchedIds: number[];
  moves: number;
  status: GameStatus;
  boardLocked: boolean;
}
