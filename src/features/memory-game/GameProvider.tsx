import {
  createContext,
  useContext,
  useReducer,
  useMemo,
  useEffect,
  ReactNode,
} from "react";
import { gameReducer } from "./gameReducer";
import { resetGame } from "./gameActions";
import { generateDeck } from "./utils/generateDeck";
import { GameState } from "./types";
import { GameAction } from "./gameActions";

interface GameContextValue {
  state: GameState;
  dispatch: React.Dispatch<GameAction>;
}

const GameContext = createContext<GameContextValue | undefined>(undefined);

interface GameProviderProps {
  children: ReactNode;
}

const initialState: GameState = {
  deck: [],
  flippedIds: [],
  matchedIds: [],
  moves: 0,
  status: "idle",
  boardLocked: false,
};

export function GameProvider({ children }: GameProviderProps) {
  const initialDeck = useMemo(() => generateDeck(), []);

  const [state, dispatch] = useReducer(gameReducer, {
    ...initialState,
    deck: initialDeck,
  });

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
