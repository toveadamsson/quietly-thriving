import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
//?======COMPONENTS==========================================
 import Header from "./components/header.js";
import Intro from "./components/intro.js";
import About from "./components/about.js";
import Selection from "./components/selection.js";
import Contact from "./components/contact.js";

//*=======APP.JS===========================
function App() {
  return (
    <div className="App">
      <Router>
      <Header />
        <Route exact path="/" component={Intro} />
        <Route exact path="/about" component={About} />
        <Route exact path="/selection" component={Selection} />
        <Route exact path="/contact" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
