import GameBoard from "./GameBoard";
import Won from "./Won";
import { GameProvider } from "../context/GameProvider";
import { useGame } from "../hooks/useGame";
import { GameStatus } from "../store/types";

function GameContent() {
  const { state } = useGame();

  if (state.status === GameStatus.WON) {
    return <Won />;
  }

  return (
    <div className="flex flex-col min-h-screen text-white w-full">
      <header className="w-full p-6 border-b border-gray-700">
        <div className="w-full">
          <h2 className="text-2xl font-bold text-center">Memory Game</h2>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-6 w-full">
        <GameBoard />
      </main>
    </div>
  );
}

function GameScreen() {
  return (
    <GameProvider>
      <GameContent />
    </GameProvider>
  );
}

export default GameScreen;
