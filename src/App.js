import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route, Switch} from "react-router-dom";
import Home from "./pages/home";
import Overview from "./pages/overview";
import Footer from "./pages/footer";
import Contact from "./pages/contact";
import Timeline from "./pages/timeline";
import FAQ from "./pages/faq";
import Register from "./pages/register";

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );

}

export default App;
{/* <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} /> */}