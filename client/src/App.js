import React from "react";
import "./App.css";
import Interview from "./components/Interview/index.jsx";
import HomePage from "./views/HomePage.js";
import PhotoAlbum from "./views/PhotoAlbum.js";

function App() {
  return (
    <div className="App">
      <HomePage/>
      <PhotoAlbum/>
      <Interview/>
    </div>
  );
}


export default App;
