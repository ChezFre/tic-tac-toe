import { useState } from "react";
import { TicTacToe } from "./TicTacToe/TicTacToe";

export default function App() {
  const [size, setSize] = useState(3);

  return (
    <div className="App">
      <select
        onChange={(e) => {
          setSize(parseInt(e.target.value, 10));
        }}
        value={size}
      >
        {[...Array(20)].map((_, index) => (
          <option key={index} value={index + 3}>
            {index + 3}
          </option>
        ))}
      </select>
      {size}
      <TicTacToe key={size} size={size} />
    </div>
  );
}
