import Tile from "./Tile";

function GameBoard() {
  const tiles = Array.from({ length: 16 }, (_, index) => index + 1);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="grid grid-cols-4 gap-3 sm:gap-4">
        {tiles.map((tileId) => (
          <Tile key={tileId} id={tileId} />
        ))}
      </div>
    </div>
  );
}

export default GameBoard;
