import { useGameContext } from "./GameProvider";
import { GameState } from "./types";
import { GameAction } from "./gameActions";

export function useGame(): {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
} {
  return useGameContext();
}
