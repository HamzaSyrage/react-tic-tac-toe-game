import { useState } from "react";
export default function Player({ initName, initSympol, isTurn }) {
  const [isEditing, Edit] = useState(true);
  const [playerName, setPlayerName] = useState(initName);
  function inputHandler(e) {
    setPlayerName(e.target.value);
  }
  return (
    <li className={isTurn ? "active" : null}>
      <span className="player">
        {isEditing ? (
          <span className="player-name">{playerName}</span>
        ) : (
          <input type="text" value={playerName} onInput={inputHandler} />
        )}
      </span>
      <span className="player-sympol">{initSympol}</span>
      <button onClick={() => Edit(!isEditing)}>
        {isEditing ? "edit" : "save"}
      </button>
    </li>
  );
}
