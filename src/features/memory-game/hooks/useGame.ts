import { useGameContext } from "../context/GameProvider";

export function useGame() {
  return useGameContext();
}
