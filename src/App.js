import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Switch} from "react-router-dom";
import Home from "./pages/home";
import Error404 from "./pages/Error404";
function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={< Error404/>} />
      </Routes>
    </div>
  );

}

export default App;
