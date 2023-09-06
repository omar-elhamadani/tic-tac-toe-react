import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./index.css";
import Cell from "./assets/Cell";

/*    const winningPatterns = [
      [1, 2, 3],
      [1, 5, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 5, 7],
      [3, 6, 9],
      [4, 5, 6],
      [7, 8, 9],
    ]; */
function App() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [gameEnd, setGameEnd] = useState(false);
  const [winner, setWinner] = useState("");
  const reset = () => {
    setCells(["", "", "", "", "", "", "", "", ""]);
    setGo("circle");
    setWinner("");
  };
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  useEffect(() => {
    winningCombos.forEach((combo) => {
      if (combo.every((cell) => cells[cell] === "circle")) {
        setWinner("circle");
      }
      if (combo.every((cell) => cells[cell] === "cross")) {
        setWinner("cross");
      }
    });
  }, [cells, go]);

  return (
    <div className="container">
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell
            id={index}
            go={go}
            cells={cells}
            setCells={setCells}
            setGo={setGo}
            key={index}
            winner={winner}
          />
        ))}
        {go === "circle" ? (
          <h2>circle turn to play!</h2>
        ) : go === "cross" ? (
          <h2>cross turn to play!</h2>
        ) : (
          ""
        )}
        {winner !== "" ? (
          <div className="winner">
            <h2>the winner is {winner},play again?</h2>
            <button onClick={reset}>play again</button>
          </div>
        ) : (
          ""
        )}
        {/*         {cells.filter((cell) => cell !== "").length == 9 ? (
          <h1>game ended</h1>
        ) : (
          ""
        )} */}
      </div>
    </div>
  );
}

export default App;
