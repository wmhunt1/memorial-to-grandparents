import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation/index.jsx";
import Interview from "./components/Interview/index.jsx";
import HomePage from "./views/HomePage.js";
import PhotoAlbum from "./views/PhotoAlbum.js";


function App() {
  return (
    <div className="App">
      <Navigation/>
      {/* <HomePage/>
      <PhotoAlbum/> */}
      {/* <Interview/> */}
      <Router>
      <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/home" component={HomePage} />
            <Route exact path="/album" component={PhotoAlbum} />
          </Switch>
      </div>
    </Router>
    </div>
  );
}


export default App;
