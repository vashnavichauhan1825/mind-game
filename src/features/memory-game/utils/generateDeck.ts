import { Tile } from "../store/types";
import { shuffle } from "./shuffle";
import { GAME_CONFIG } from "../constants/gameConfig";

export function generateDeck(): Tile[] {
  const pairs: Tile[] = [];

  for (let iconId = 1; iconId <= GAME_CONFIG.PAIRS; iconId++) {
    pairs.push({ id: iconId * 2 - 1, iconId });
    pairs.push({ id: iconId * 2, iconId });
  }

  return shuffle(pairs);
}
