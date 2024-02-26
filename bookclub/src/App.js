import React, { Component } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Views/LandingPage";
import AboutPage from "./Views/AboutPage";
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
          </Routes>
          <Routes>
            <Route exact path="/About" element={<AboutPage />} />
          </Routes>
          <Routes>
            <Route exact path="/Program" element={<ProgramPage />} />
          </Routes>
          <Routes>
            <Route exact path="/Update" element={<UpdatePage/>} />
          </Routes>
          <Routes>
            <Route exact path="/JoinNow" element={<JoinPage/>} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
