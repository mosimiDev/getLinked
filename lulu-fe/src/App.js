import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import PlayGame from "./pages/playGame";
import Roadmap from "./pages/roadmap";
import Whiteboard from "./pages/whiteboard";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Home />
        <About />
        <Whiteboard />
        <Roadmap />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
