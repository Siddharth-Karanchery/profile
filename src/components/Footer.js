import React, { Component } from "react";

import IconButton from "@material-ui/core/IconButton";
import { Tooltip } from "@material-ui/core";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";

import "../css/Footer.css";
class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Footer">
        <div className="Footer__social">
          <h1>#FOLLOW ME</h1>
          <div className="Footer__social__buttons">
            <Tooltip title="Github">
              <IconButton
                id="Footer__social__iconButton"
                onClick={() =>
                  window.open(
                    "https://github.com/Siddharth-Karanchery",
                    "_blank"
                  )
                }
              >
                <GitHubIcon id="Footer__social__icon" />
              </IconButton>
            </Tooltip>
            <Tooltip title="LinkedIn">
              <IconButton
                id="Footer__social__iconButton"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/siddharth-karanchery-09602120/",
                    "_blank"
                  )
                }
              >
                <LinkedInIcon id="Footer__social__icon" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Instagram">
              <IconButton
                id="Footer__social__iconButton"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/artificial.intelligens_art/",
                    "_blank"
                  )
                }
              >
                <InstagramIcon id="Footer__social__icon" />
              </IconButton>
            </Tooltip>
            <Tooltip title="Twitter">
              <IconButton
                id="Footer__social__iconButton"
                onClick={() =>
                  window.open("https://twitter.com/siddie_k", "_blank")
                }
              >
                <TwitterIcon id="Footer__social__icon" />
              </IconButton>
            </Tooltip>
          </div>
        </div>
        <div className="Footer__navigation">
          <button
            className="Footer__navigation__button"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <h3>BACK TO TOP </h3> <ExpandLessIcon id="Footer__upIcon" />
          </button>
        </div>
        <div className="Footer__navbar">
          <a
            className="Footer__navbar__button"
            onClick={() => {
              this.props.setPage("AboutMe");
            }}
          >
            About Me
          </a>
          <a
            className="Footer__navbar__button"
            onClick={() => {
              this.props.setPage("Resume");
            }}
          >
            Resume
          </a>
          <a
            className="Footer__navbar__button"
            onClick={() => {
              this.props.setPage("Portfolio");
            }}
          >
            Portfolio
          </a>
          <a
            className="Footer__navbar__button"
            onClick={() => {
              this.props.setPage("Certificates");
            }}
          >
            Certificates
          </a>
          <a
            className="Footer__navbar__button"
            onClick={() => {
              this.props.setPage("Contact");
            }}
          >
            Contact
          </a>
        </div>
        <p style={{ color: "#1e42a3" }}>
          {"\u00A9"}2021 by Siddharth Karanchery
        </p>
        <p style={{ color: "#1e42a3" }}>Updated on Aug 2021.</p>
      </div>
    );
  }
}

export default Footer;
