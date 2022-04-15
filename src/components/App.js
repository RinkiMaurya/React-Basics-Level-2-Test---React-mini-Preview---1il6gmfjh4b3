import React, { useState } from "react";
import "../styles/App.css";
import { Preview } from "./Preview";
const App = () => {
  const [content, setContent] = useState("hello world");
  const [padding, setPadding] = useState(5);
  const [fontSize, setFontSize] = useState(10);
  return (
    <div id="main">
      <div>
        <label>Contant </label>
        <input
          type="text"
          id="contentInput"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <br />
        <label>padding </label>
        <input
          type="number"
          id="paddingInput"
          value={padding}
          onChange={(e) => setPadding(e.target.value)}
        />
        <br />
        <label>fontSize </label>
        <input
          type="number"
          id="fontSizeInput"
          value={fontSize}
          onChange={(e) => setFontSize(e.target.value)}
        />
        <br />
        <br />

        {/* add input elememnts inside here */}
      </div>
      <Preview
        padding={padding + "px"}
        fontSize={fontSize + "px"}
        content={content}
      />
      {/* render Preview component here */}
    </div>
  );
};

export default App;
