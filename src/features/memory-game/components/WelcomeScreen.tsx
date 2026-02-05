interface WelcomeScreenProps {
  onStart: () => void;
}

function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 text-white w-full">
      <div className="w-full text-center space-y-8">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Memory Game
        </h1>

        <div className="space-y-4 text-lg text-gray-300">
          <p className="leading-relaxed">
            Test your memory skills! Remember the sequence of cards and match
            them correctly.
          </p>
          <p className="text-sm text-gray-400">
            Click the button below to begin your memory challenge.
          </p>
        </div>

        <button
          onClick={onStart}
          className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg shadow-lg transform transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-purple-300 focus:ring-opacity-50"
        >
          Start Game
        </button>
      </div>
    </div>
  );
}

export default WelcomeScreen;
