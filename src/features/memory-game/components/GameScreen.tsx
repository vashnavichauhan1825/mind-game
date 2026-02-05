import { useReducer, useMemo, useEffect } from "react";
import GameBoard from "./GameBoard";
import { gameReducer } from "../gameReducer";
import { resetGame } from "../gameActions";
import { generateDeck } from "../utils/generateDeck";
import { GameState } from "../types";

const initialState: GameState = {
  deck: [],
  flippedIds: [],
  matchedIds: [],
  moves: 0,
  status: "idle",
};

function GameScreen() {
  const initialDeck = useMemo(() => generateDeck(), []);

  const [state, dispatch] = useReducer(gameReducer, {
    ...initialState,
    deck: initialDeck,
  });

  useEffect(() => {
    dispatch(resetGame(initialDeck));
  }, [initialDeck]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <header className="w-full p-6 border-b border-gray-700">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center">Memory Game</h2>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-6">
        <GameBoard state={state} dispatch={dispatch} />
      </main>
    </div>
  );
}

export default GameScreen;
