export const GAME_ACTIONS = {
  FLIP_TILE: "FLIP_TILE",
  RESET_GAME: "RESET_GAME",
} as const;

export const GAME_CONFIG = {
  TOTAL_TILES: 16,
  PAIRS: 8,
  MAX_FLIPPED_TILES: 2,
} as const;
