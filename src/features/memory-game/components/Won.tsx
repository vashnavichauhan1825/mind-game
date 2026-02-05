import { useGame } from "../hooks/useGame";
import { resetGame } from "../store/actions";
import { generateDeck } from "../utils/generateDeck";

function Won() {
  const { state, dispatch } = useGame();

  const handlePlayAgain = () => {
    const newDeck = generateDeck();
    dispatch(resetGame(newDeck));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 text-white w-full">
      <div className="w-full text-center space-y-4 sm:space-y-6 md:space-y-8">
        <div className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-3 md:mb-4">
          🎉
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent px-2">
          Congratulations!
        </h1>

        <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-300 px-2">
          <p className="leading-relaxed">
            You've successfully matched all the pairs!
          </p>
          <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gray-800 rounded-lg border border-gray-700">
            <p className="text-xl sm:text-2xl font-semibold text-blue-400">
              Moves: {state.moves}
            </p>
          </div>
        </div>

        <button
          onClick={handlePlayAgain}
          className="mt-4 sm:mt-6 md:mt-8 px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-50"
        >
          Play Again
        </button>
      </div>
    </div>
  );
}

export default Won;
