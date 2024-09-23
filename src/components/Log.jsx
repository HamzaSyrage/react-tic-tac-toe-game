export default function Log({ lastMove }) {
  console.log("log : ", lastMove);
  let x = lastMove.length;
  console.log("X : ", x);

  return (
    <ol id="log">
      {lastMove.map((e, index) => (
        <li
          key={`${e.row},${e.col}`}
          className={index === 0 ? "highlighted" : undefined}
        >
          {`${x - index}- ${e.player} slected ${e.row},${e.col}`}
        </li>
      ))}
    </ol>
  );
}
