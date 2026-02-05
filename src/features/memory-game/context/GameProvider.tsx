import {
  createContext,
  useContext,
  useReducer,
  useMemo,
  useEffect,
} from "react";
import { gameReducer } from "../store/reducer";
import { resetGame } from "../store/actions";
import { generateDeck } from "../utils/generateDeck";
import { createInitialState } from "../store/initialState";
import { GameContextValue, GameProviderProps } from "./types";

const GameContext = createContext<GameContextValue | undefined>(undefined);

export function GameProvider({ children }: GameProviderProps) {
  const initialDeck = useMemo(() => generateDeck(), []);

  const [state, dispatch] = useReducer(
    gameReducer,
    createInitialState(initialDeck),
  );

  useEffect(() => {
    dispatch(resetGame(initialDeck));
  }, [initialDeck]);

  const value = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch],
  );

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGameContext() {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error("useGameContext must be used within a GameProvider");
  }
  return context;
}
