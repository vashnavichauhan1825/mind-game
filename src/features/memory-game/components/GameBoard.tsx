function GameBoard() {
  const tiles = Array.from({ length: 16 }, (_, index) => index + 1);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="grid grid-cols-4 gap-3 sm:gap-4">
        {tiles.map((tile) => (
          <div
            key={tile}
            className="aspect-square bg-gray-700 rounded-lg border-2 border-gray-600 flex items-center justify-center text-gray-400 text-xl font-semibold shadow-lg hover:border-gray-500 transition-colors duration-200"
          >
            {tile}
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameBoard;
