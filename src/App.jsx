import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Home/Landing"
import Local from "./components/Forms/Local";
import Skin from "./components/Forms/Skin";
import UV from "./components/Results/UV";
import Vitamin from "./components/Results/Vitamin";
import "./App.css";

function App() {
  return <div className="app">
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/local" element={<Local />} />
        <Route path="/skin" element={<Skin />} />
        <Route path="/uv" element={<UV />} />
        <Route path="/vitamin" element={<Vitamin />} />
      </Routes>
    </Router>
    
  </div>;
}

export default App;
