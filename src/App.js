import React from "react";
import Name from "./Name.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello world from </h1>
        <Name city="Paris" />
      </header>
    </div>
  );
}

export default App;
