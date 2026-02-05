function GameScreen() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <header className="w-full p-6 border-b border-gray-700">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center">Memory Game</h2>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-6">
        <div className="max-w-4xl w-full">
          <div className="bg-gray-800 rounded-lg p-8 border border-gray-700">
            <p className="text-center text-gray-400 text-lg">
              GameBoard will be rendered here
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default GameScreen;
