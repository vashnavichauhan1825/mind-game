import { Tile } from "../types";
import { shuffle } from "./shuffle";

export function generateDeck(): Tile[] {
  const pairs: Tile[] = [];
  for (let iconId = 1; iconId <= 8; iconId++) {
    pairs.push({ id: iconId * 2 - 1, iconId });
    pairs.push({ id: iconId * 2, iconId });
  }

  return shuffle(pairs);
}
