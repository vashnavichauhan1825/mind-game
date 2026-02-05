export interface Tile {
  id: number;
  iconId: number;
}

export enum GameStatus {
  IDLE = "idle",
  PLAYING = "playing",
  WON = "WON",
}

export interface GameState {
  deck: Tile[];
  flippedIds: number[];
  matchedIds: number[];
  moves: number;
  status: GameStatus;
  boardLocked: boolean;
}
