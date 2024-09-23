import TurnBase from "./components/TurnBase";

import Log from "./components/Log";
import { useState } from "react";

function App() {
  let [lastMove, setLastMove] = useState([]);
  return (
    <main>
      <TurnBase setLastMove={setLastMove} />
      <Log lastMove={lastMove} />
    </main>
  );
}

export default App;
