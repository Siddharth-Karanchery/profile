import React, { Component } from "react";

import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import profileImage from "./img/sid-pic.jpg";
import logo from "./img/skwhite.png";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: "AboutMe",
    };
    this.setCurrentPage = this.setCurrentPage.bind(this);
  }
  setCurrentPage(page) {
    this.setState({ activePage: page });
  }
  render() {
    let activePage = null;
    switch (this.state.activePage) {
      case "AboutMe":
        activePage = <AboutMe setPage={this.setCurrentPage} />;
        break;
      case "Resume":
        activePage = <Resume />;
        break;
      case "Portfolio":
        activePage = <Portfolio />;
        break;
      case "Certificates":
        activePage = <Certificates />;
        break;
      case "Contact":
        activePage = <Contact />;
        break;
    }
    return (
      <div className="App">
        <div className="App__header">
          <div className="App__header__logo">
            <img
              src={logo}
              alt="logo"
              id="App__logo__img"
              onClick={() => {
                this.setState({ activePage: "AboutMe" });
              }}
            />
            <p id="App__logo__text">/ Web Developer</p>
          </div>
          <div className="App__header__Navbar">
            <a
              className={
                this.state.activePage === "AboutMe"
                  ? "App__header__Navbar__active"
                  : "App__header__Navbar__button"
              }
              onClick={() => {
                this.setState({ activePage: "AboutMe" });
              }}
            >
              About Me
            </a>
            <a
              className={
                this.state.activePage === "Resume"
                  ? "App__header__Navbar__active"
                  : "App__header__Navbar__button"
              }
              onClick={() => {
                this.setState({ activePage: "Resume" });
              }}
            >
              Resume
            </a>
            <a
              className={
                this.state.activePage === "Portfolio"
                  ? "App__header__Navbar__active"
                  : "App__header__Navbar__button"
              }
              onClick={() => {
                this.setState({ activePage: "Portfolio" });
              }}
            >
              Portfolio
            </a>
            <a
              className={
                this.state.activePage === "Certificates"
                  ? "App__header__Navbar__active"
                  : "App__header__Navbar__button"
              }
              onClick={() => {
                this.setState({ activePage: "Certificates" });
              }}
            >
              Certificates
            </a>
            <a
              className={
                this.state.activePage === "Contact"
                  ? "App__header__Navbar__active"
                  : "App__header__Navbar__button"
              }
              onClick={() => {
                this.setState({ activePage: "Contact" });
              }}
            >
              Contact
            </a>
          </div>
        </div>
        {activePage}
        <Footer setPage={this.setCurrentPage} />
      </div>
    );
  }
  render1() {
    return (
      <div className="App">
        <h1> Welcome to Siddharth Karanchery's Web Page</h1>
        <img src={profileImage} alt="profile-photo" />
        <h2>The site is currently under development</h2>
      </div>
    );
  }
}

export default App;
