import React, { Component } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Views/LandingPage";
import AboutPage from "./Views/AboutPage";
import VisiMisiPage from "./Views/AboutPage/VisiMisiPage"; 
import LBCPage from "./Views/AboutPage/LBCPage";
import SupportUsPage from "./Views/AboutPage/SupportUsPage"; 
import ProgramPage from "./Views/ProgramPage";
import UpdatePage from "./Views/UpdatePage";
import JoinPage from "./Views/JoinPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/About" element={<AboutPage />} />
            <Route exact path="/About/VisiMisi" element={<VisiMisiPage />} /> {/* Memperbaiki penulisan komponen */}
            <Route exact path="/About/LifeAtBookClub" element={<LBCPage />} />
            <Route exact path="/About/SupportUsPage" element={<SupportUsPage />} />
            <Route exact path="/Program" element={<ProgramPage />} />
            <Route exact path="/Update" element={<UpdatePage />} />
            <Route exact path="/JoinNow" element={<JoinPage />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
