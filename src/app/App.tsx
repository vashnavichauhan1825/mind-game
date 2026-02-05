import { useState } from "react";
import WelcomeScreen from "../features/memory-game/components/WelcomeScreen";

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStart = () => {
    setGameStarted(true);
  };

  if (!gameStarted) {
    return <WelcomeScreen onStart={handleStart} />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-white">Game will start here...</p>
    </div>
  );
}

export default App;
