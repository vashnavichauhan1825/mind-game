import GameBoard from "./GameBoard";
import { GameProvider } from "../context/GameProvider";

function GameScreen() {
  return (
    <GameProvider>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <header className="w-full p-6 border-b border-gray-700">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-center">Memory Game</h2>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center p-6">
          <GameBoard />
        </main>
      </div>
    </GameProvider>
  );
}

export default GameScreen;
