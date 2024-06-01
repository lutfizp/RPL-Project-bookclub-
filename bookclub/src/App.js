import React, { Component } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./Views/LandingPage";
import AboutPage from "./Views/AboutPage";
import VisiMisiPage from "./Views/AboutPage/VisiMisiPage"; 
import LBCPage from "./Views/AboutPage/LBCPage";
import SupportUsPage from "./Views/AboutPage/SupportUsPage"; 
import ProgramPage from "./Views/ProgramPage";
import BookTalkPage from "./Views/ProgramPage/BookTalkPage"; 
import CompetitionPage from "./Views/ProgramPage/CompetitionPage"; 
import FreebiesPage from "./Views/ProgramPage/FreebiesPage"; 
import UpdatePage from "./Views/UpdatePage";
import JoinNowPage from "./Views/JoinNowPage";
import FaQPage from "./Views/FaQPage";
import ContactUsPage from "./Views/ContactUsPage";
import CompetitionNewsPage from "./Views/ProgramPage/BookTalkPage/CompetitionNewsPage";
import EventFloresPage from "./Views/ProgramPage/BookTalkPage/EventFloresPage";
import EventMemoriPage from "./Views/ProgramPage/BookTalkPage/EventMemoriPage";
import EventUpdate1Page from "./Views/UpdatePage/EventUpdate1Page";
import EventUpdate2Page from "./Views/UpdatePage/EventUpdate2Page";
import OpenLibaryPage from "./Views/ProgramPage/CompetitionPage/OpenLibaryPage";
import OpenResensiPage from "./Views/ProgramPage/CompetitionPage/OpenResensiPage";
import Freebies22Page from "./Views/ProgramPage/FreebiesPage/Freebies22Page";
import Freebies23Page from "./Views/ProgramPage/FreebiesPage/Freebies23Page";
import Freebies24Page from "./Views/ProgramPage/FreebiesPage/Freebies24Page";


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
            <Route exact path="/About/SupportUs" element={<SupportUsPage />} />
            <Route exact path="/Program" element={<ProgramPage />} />
            <Route exact path="/Program/BookTalk" element={<BookTalkPage />} />
            <Route exact path="/Program/Competition" element={<CompetitionPage />} />
            <Route exact path="/Program/Freebies" element={<FreebiesPage />} />
            <Route exact path="/Update" element={<UpdatePage />} />
            <Route exact path="/JoinNow" element={<JoinNowPage />} />
            <Route exact path="FaQ" element={<FaQPage />} />
            <Route exact path="/ContactUs" element={<ContactUsPage />} />
            <Route exact path="/Program/Booktalk/CompetitionNews" element={<CompetitionNewsPage />} />
            <Route exact path="/Program/Booktalk/EventFlores" element={<EventFloresPage />} />
            <Route exact path="/Program/Booktalk/EventMemori" element={<EventMemoriPage />} />
            <Route exact path="/Update/EventUpdate1" element={<EventUpdate1Page/>} />
            <Route exact path="/Update/EventUpdate2" element={<EventUpdate2Page/>} />
            <Route exact path="/Program/competition/OpenLibary" element={<OpenLibaryPage />} />
            <Route exact path="/Program/competition/OpenResensi" element={<OpenResensiPage/>} />
            <Route exact path="/Program/Freebies/Freebies22" element={<Freebies22Page />} />
            <Route exact path="/Program/Freebies/Freebies23" element={<Freebies23Page />} />
            <Route exact path="/Program/Freebies/Freebies24" element={<Freebies24Page />} />
            


          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
