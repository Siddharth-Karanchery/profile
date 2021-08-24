import React, { Component } from "react";

import ui from "../img/icons/UI-design-svgrepo-com.png";
import web from "../img/icons/web-design-svgrepo-com.png";
import mob from "../img/icons/smartphone-app-svgrepo-com.png";

import figma from "../img/icons/figma.png";
import gimp from "../img/icons/gimp.png";
import html5 from "../img/icons/html5.png";
import css3 from "../img/icons/css3.png";
import javascript from "../img/icons/javascript.png";
import react from "../img/icons/react.png";
import nodedotjs from "../img/icons/nodedotjs.png";
import postgresql from "../img/icons/postgresql.png";
import flutter from "../img/icons/flutter.png";

import "../css/Resume.css";

import data from "../data/work_ex.json";
import education from "../data/education.json";

class Resume extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("data: ", data);

    return (
      <div className="Resume">
        <div className="Resume__experience">
          <div className="Resume__experience__header">
            EXPERIENCE
            <button
              id="Resume__button"
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/166EvGAMgauyW9kxmu_LKM_7AxAOTTDql/view?usp=sharing",
                  "_blank"
                );
              }}
            >
              Download
            </button>
          </div>
          <div className="Resume__experience__body">
            {Object.keys(data).map((key) => {
              return (
                <div className="Resume__experience__body__card">
                  <div className="Resume__experience__body__card__left">
                    <p id="Resume__exp__duration">{data[key].duration}</p>
                    <p id="Resume__exp__company">{data[key].company}</p>
                    <p id="Resume__exp__title">{data[key].title}</p>
                    <p id="Resume__exp__location">{data[key].location}</p>
                  </div>
                  <div className="Resume__experience__body__right">
                    <ul
                      style={{
                        textAlign: "justify",
                        wordWrap: "normal",
                        display: "inline-block",
                        padding: "15px 40px 10px 40px",
                      }}
                    >
                      {data[key].jd.map((point) => {
                        return <li id="Resume__exp__point">{point}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="Resume__education">
          <div className="Resume__experience__header">EDUCATION</div>
          <div
            className="Resume__experience__body"
            id="Resume__education__body"
          >
            {Object.keys(education).map((key) => {
              return (
                <div
                  className="Resume__experience__body__card"
                  id="Resume__education__body__card"
                >
                  <div
                    className="Resume__experience__body__card__left"
                    id="Resume__education__body__card__element"
                  >
                    <p id="Resume__exp__duration">
                      {education[key].degree} ({education[key].duration})
                    </p>
                    <p id="Resume__exp__company">CGPA: {education[key].gpa}</p>
                    <p id="Resume__exp__title">
                      {education[key].college}, {education[key].location}
                    </p>
                  </div>
                  <div
                    className="Resume__experience__body__right"
                    id="Resume__education__body__card__element"
                  >
                    <ul
                      style={{
                        textAlign: "justify",
                        wordWrap: "normal",
                        display: "inline-block",
                        padding: "15px 40px 10px 40px",
                        maxWidth: "50%",
                      }}
                    >
                      {education[key].projects.map((point) => {
                        return <li id="Resume__exp__point">{point}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="Resume__tools">
          <div className="Resume__experience__header">TOOLS</div>
          <div className="Resume__tools__body">
            <div className="Resume__tools__body__element">
              <img src={ui} id="Resume__grid__icon" />
              UI/UX Design
              <div id="Resume__iconArray">
                <span id="Resume__iconArray__element">
                  <img src={figma} id="Resume__grid__icon__small" />
                  Figma
                </span>
                <span id="Resume__iconArray__element">
                  <img src={gimp} id="Resume__grid__icon__small" />
                  GIMP
                </span>
              </div>
            </div>
            <div className="Resume__tools__body__element">
              <img src={web} id="Resume__grid__icon" />
              Web Development
              <div id="Resume__iconArray">
                <span id="Resume__iconArray__element">
                  <img src={html5} id="Resume__grid__icon__small" />
                  HTML 5
                </span>
                <span id="Resume__iconArray__element">
                  <img src={css3} id="Resume__grid__icon__small" />
                  CSS 3
                </span>
                <span id="Resume__iconArray__element">
                  <img src={javascript} id="Resume__grid__icon__small" />
                  Javascript
                </span>
                <span id="Resume__iconArray__element">
                  <img src={react} id="Resume__grid__icon__small" />
                  React JS
                </span>
                <span id="Resume__iconArray__element">
                  <img src={nodedotjs} id="Resume__grid__icon__small" />
                  Node JS
                </span>
                <span id="Resume__iconArray__element">
                  <img src={postgresql} id="Resume__grid__icon__small" />
                  PostgreSQL
                </span>
              </div>
            </div>
            <div className="Resume__tools__body__element">
              <img src={mob} id="Resume__grid__icon" />
              Mobile App Development
              <div id="Resume__iconArray">
                <span id="Resume__iconArray__element">
                  <img src={react} id="Resume__grid__icon__small" />
                  React Native
                </span>
                <span id="Resume__iconArray__element">
                  <img src={flutter} id="Resume__grid__icon__small" />
                  Flutter
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
