import { ReactNode } from "react";
import { GameState } from "../store/types";
import { GameAction } from "../store/actions";

export interface GameContextValue {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
}

export interface GameProviderProps {
  children: ReactNode;
}
