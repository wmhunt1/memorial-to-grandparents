import React from "react";
import "./App.css";
import Album from "./components/Album/index.jsx"
import HeadStone from "./components/HeadStone/index.jsx"
import Interview from "./components/Interview/index.jsx"

function App() {
  return (
    <div className="App">
      <h1>In Loving Memory</h1>
      <HeadStone />
      <break></break>
      <Interview/>
      <h2>Memories</h2>
      <Album />
    </div>
  );
}


export default App;
