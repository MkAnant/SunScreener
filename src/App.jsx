import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/Context";
import Landing from "./components/Home/Landing";
import Local from "./components/Forms/Local";
import Skin from "./components/Forms/Skin";
import UV from "./components/Results/UV";
import Vitamin from "./components/Results/Vitamin";

function App() {
  return (
    <div className="app">
      <Router basename="/SunScreener">
        <AppProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/local" element={<Local />} />
            <Route path="/skin" element={<Skin />} />
            <Route path="/uv" element={<UV />} />
            <Route path="/vitamin" element={<Vitamin />} />
          </Routes>
        </AppProvider>
      </Router>
    </div>
  );
}

export default App;
