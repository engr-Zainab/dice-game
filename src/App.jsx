import { useState } from "react";
import StartGame from "./components/StartGame";
import GamePlay from "./components/GamePlay";

function App() {
  const [hasGameStarted, setHasGameStarted] = useState(false);

  const toggleGamePlay = () => {
    setHasGameStarted((prev) => !prev);
  };

  return (
    <>{hasGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}</>
  );
}

export default App;
