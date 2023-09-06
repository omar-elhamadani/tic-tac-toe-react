import { useState } from "react";
const Cell = ({ go, setGo, id, cells, setCells, winner }) => {
  const [imgSrc, setImgSrc] = useState(
    "https://www.shareicon.net/data/512x512/2016/10/20/846443_blue_512x512.png"
  );
  const handleClick = () => {
    if (cells[id]) return;
    if (winner !== "") return;
    cells[id] = go;
    if (go == "circle") {
      setGo("cross");
    }
    if (go == "cross") {
      setGo("circle");
    }
    console.log(cells);
  };
  return (
    <div className="square" onClick={handleClick}>
      {cells[id] === "circle" ? (
        <img
          src="https://www.shareicon.net/data/512x512/2016/10/20/846443_blue_512x512.png"
          alt=""
        />
      ) : cells[id] === "cross" ? (
        <img
          src="https://st.depositphotos.com/1743190/1258/v/450/depositphotos_12583382-stock-illustration-vector-red-cross.jpg"
          alt=""
        />
      ) : (
        ""
      )}
    </div>
  );
};
export default Cell;
