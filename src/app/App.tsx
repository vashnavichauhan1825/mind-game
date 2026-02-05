import { useState } from "react";
import WelcomeScreen from "../features/memory-game/components/WelcomeScreen";
import GameScreen from "../features/memory-game/components/GameScreen";

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStart = () => {
    setGameStarted(true);
  };

  return (
    <div className="max-w-2xl mx-auto w-full bg-black min-h-screen">
      {!gameStarted ? <WelcomeScreen onStart={handleStart} /> : <GameScreen />}
    </div>
  );
}

export default App;
