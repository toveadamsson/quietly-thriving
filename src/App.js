import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
//?======COMPONENTS==========================================
import Header from "./components/header.js";
import Home from "./components/home.js";
import About from "./components/about.js";
import Contact from "./components/contact.js";

//*=======APP.JS===========================
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Router>
    </div>
  );
}

export default App;
