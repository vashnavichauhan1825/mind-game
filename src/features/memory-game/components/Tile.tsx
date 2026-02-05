import { flipTile } from "../gameActions";
import { useGame } from "../useGame";
import { GAME_CONFIG } from "../constants";

interface TileProps {
  id: number;
  iconId: number;
  isFlipped: boolean;
  isMatched: boolean;
}

function Tile({ id, iconId, isFlipped, isMatched }: TileProps) {
  const { state, dispatch } = useGame();

  const handleClick = () => {
    if (isFlipped) {
      return;
    }

    if (isMatched) {
      return;
    }

    if (state.boardLocked) {
      return;
    }

    if (state.flippedIds.length >= GAME_CONFIG.MAX_FLIPPED_TILES) {
      return;
    }

    dispatch(flipTile(id));
  };

  const isClickable =
    !isFlipped &&
    !isMatched &&
    !state.boardLocked &&
    state.flippedIds.length < GAME_CONFIG.MAX_FLIPPED_TILES;

  return (
    <div
      className={`aspect-square perspective-1000 ${
        isClickable ? "cursor-pointer" : "cursor-not-allowed opacity-75"
      }`}
      onClick={handleClick}
    >
      <div
        className={`relative w-full h-full preserve-3d transition-transform duration-500 ${
          isFlipped || isMatched ? "rotate-y-180" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform:
            isFlipped || isMatched ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          className="absolute inset-0 w-full h-full bg-gray-700 rounded-lg border-2 border-gray-600 flex items-center justify-center text-gray-400 text-4xl font-bold shadow-lg backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
          }}
        >
          <span className="text-5xl">?</span>
        </div>

        <div
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg border-2 border-blue-400 flex items-center justify-center text-white text-4xl font-bold shadow-lg backface-hidden"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <span className="text-5xl">{iconId}</span>
        </div>
      </div>
    </div>
  );
}

export default Tile;
