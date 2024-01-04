import * as React from "react";

import { Routes, Route, Outlet, Link } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Resume from "./Pages/Resume/Resume";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Certificates from "./Pages/Certificates/Certificates";
import Contact from "./Pages/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";

function App() {
  const [currentTab, setCurrentTab] = React.useState("About");

  const handleTabSelect = (tabName: string) => {
    setCurrentTab(tabName);
  };
  return (
    <div className="App">
      <Navbar currentTab={currentTab} handleTabSelect={handleTabSelect} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer handleTabSelect={handleTabSelect} />
    </div>
  );
}

export default App;
