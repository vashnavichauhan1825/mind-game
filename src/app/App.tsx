import { useState } from "react";
import WelcomeScreen from "../features/memory-game/components/WelcomeScreen";
import GameScreen from "../features/memory-game/components/GameScreen";

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStart = () => {
    setGameStarted(true);
  };

  if (!gameStarted) {
    return <WelcomeScreen onStart={handleStart} />;
  }

  return <GameScreen />;
}

export default App;
