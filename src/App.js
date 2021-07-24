import React, { Component } from "react";
import profileImage from "./img/sid-pic.jpg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
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
