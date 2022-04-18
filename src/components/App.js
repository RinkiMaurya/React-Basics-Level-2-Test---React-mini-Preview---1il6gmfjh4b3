import React, { useState } from "react";
import "../styles/App.css";
import { Preview } from "./Preview";
const App = () => {
  const [state1, setState1] = useState("hello world");
  const [state2, setState2] = useState(5);
  const [state3, setState3] = useState(10);
  return (
    <div id="main">
      <div>
        {/* <label>Contant </label> */}
        <input
          type="text"
          id="contentInput"
          value={state1}
          onChange={(e) => setState1(e.target.value)}
        />
        {/* <br /> */}
        {/* <label>padding </label> */}
        <input
          type="number"
          id="paddingInput"
          value={state2}
          onChange={(e) => setState2(e.target.value)}
        />
        {/* <br />
        <label>fontSize </label> */}
        <input
          type="number"
          id="fontSizeInput"
          value={state3}
          onChange={(e) => setState3(e.target.value)}
        />
        {/* <br />
        <br /> */}

        {/* add input elememnts inside here */}
      </div>
      <Preview
        padding={state2 + "px"}
        fontSize={state3 + "px"}
        content={state1}
      />
      {/* render Preview component here */}
    </div>
  );
};

export default App;
