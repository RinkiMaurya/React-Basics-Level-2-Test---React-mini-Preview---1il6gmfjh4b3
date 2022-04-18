import React, { useState } from "react";
import "../styles/App.css";
import { Preview } from "./Preview";
const App = () => {
  const [state1, setState1] = useState("hello newton");
  const [state2, setState2] = useState(10);
  const [state3, setState3] = useState(5);
  return (
    <div id="main">
      <div>
        <input
          type="text"
          id="contentInput"
          value={state1}
          onChange={(e) => setState1(e.target.value)}
        />
        <input
          type="text"
          id="fontSizeInput"
          value={state2}
          onChange={(e) => setState2(e.target.value)}
        />
        <input
          type="text"
          id="paddingInput"
          value={state3}
          onChange={(e) => setState3(e.target.value)}
        />
      </div>
      <Preview
        padding={state3 + "px"}
        fontSize={state2 + "px"}
        content={state1}
      />
    </div>
  );
};

export default App;
