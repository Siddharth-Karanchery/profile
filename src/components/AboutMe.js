import React, { Component } from "react";
import { isMobile } from "react-device-detect";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

import profileImage from "../img/sid-pic-square.jpg";

import ui from "../img/icons/UI-design-svgrepo-com.png";
import web from "../img/icons/web-design-svgrepo-com.png";
import mob from "../img/icons/smartphone-app-svgrepo-com.png";
import iot from "../img/icons/internet-of-things.png";

import Carousel from "react-grid-carousel";

import testimonials from "../data/testimonials.json";

import "../css/AboutMe.css";

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const settings = {
      cols: 3,
      rows: 1,
      gap: 60,
      loop: true,
      autoplay: 5000,
      responsiveLayout: [
        {
          breakpoint: 1200,
          cols: 3,
        },
      ],
      // hideArrow: true,
      // showDots: true,
    };
    return (
      <div className="AboutMe">
        <div className="AboutMe__main">
          <div className="AboutMe__main__image">
            <div className="AboutMe__main__image__photo">
              <img src={profileImage} id="AboutMe__photo" alt="profile-photo" />
            </div>
            <div className="AboutMe__main__image__social">
              <GitHubIcon
                id="AboutMe__icon"
                onClick={() =>
                  window.open(
                    "https://github.com/Siddharth-Karanchery",
                    "_blank"
                  )
                }
              />
              <LinkedInIcon
                id="AboutMe__icon"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/siddharth-karanchery-09602120/",
                    "_blank"
                  )
                }
              />
              <InstagramIcon
                id="AboutMe__icon"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/artificial.intelligens_art/",
                    "_blank"
                  )
                }
              />
              <TwitterIcon
                id="AboutMe__icon"
                onClick={() =>
                  window.open("https://twitter.com/siddie_k", "_blank")
                }
              />
            </div>
          </div>
          <div className="AboutMe__main__text">
            <p className="AboutMe__main__text__1">Hello World! I’m</p>
            <p className="AboutMe__main__text__2">
              Siddharth
              <br />
              Karanchery
            </p>
            <p className="AboutMe__main__text__3">
              UI Designer, Web developer & <br />
              Mobile App developer
            </p>
            <button
              className="AboutMe__main__text__button"
              // onClick={() => {
              //   this.props.setPage("Resume");
              // }}
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/166EvGAMgauyW9kxmu_LKM_7AxAOTTDql/view?usp=sharing",
                  "_blank"
                );
              }}
            >
              Resume
            </button>
          </div>
        </div>
        <div className="AboutMe__capabilities">
          <p id="AboutMe__title">CAPABILITIES</p>
          <div className="AboutMe__capabilities__content">
            <div className="AboutMe__capabilities__content__grid">
              <div id="Aboutme__grid__uiux">
                <img src={ui} id="Aboutme__grid__icon" />
                <p id="Aboutme__grid__text">UI Design</p>
              </div>
              <div id="Aboutme__grid__web">
                <img src={web} id="Aboutme__grid__icon" />
                <p id="Aboutme__grid__text">Web Development</p>
              </div>
              <div id="Aboutme__grid__mobile">
                <img src={mob} id="Aboutme__grid__icon" />
                <p id="Aboutme__grid__text">Mobile App Development</p>
              </div>
              <div id="Aboutme__grid__iot">
                <img src={iot} id="Aboutme__grid__icon" />
                <p id="Aboutme__grid__text">Internet of Things</p>
              </div>
            </div>
            <div className="AboutMe__capabilities__content__text">
              <p id="Aboutme__why">Why should you hire me?</p>
              <p id="Aboutme__why__ans">
                Design and Development are my passion and I truly enjoy building
                and working on projects that help people/companies. I have
                experience in different domains such as web design, electronics
                and marketing. The wide skillset make me adaptive to cater to
                wide variety of client requirements.
              </p>
            </div>
          </div>
        </div>
        <div className="AboutMe__skillset">
          <p id="AboutMe__title">SKILLSET</p>
          <div className="AboutMe__skillset__charts">
            <div className="AboutMe__skillset__charts__panel">
              <span id="AboutMe__chart">
                <label id="AboutMe__chart__label">React JS: </label>
                <progress id="chart__bar" value="0.85" min="0" max="1" />
                <label id="AboutMe__chart__percent">85% </label>
              </span>
              <span id="AboutMe__chart">
                <label id="AboutMe__chart__label">HTML 5: </label>
                <progress id="chart__bar" value="0.90" min="0" max="1" />
                <label id="AboutMe__chart__percent">90% </label>
              </span>
              <span id="AboutMe__chart">
                <label id="AboutMe__chart__label">CSS 3: </label>
                <progress id="chart__bar" value="0.9" min="0" max="1" />
                <label id="AboutMe__chart__percent">90% </label>
              </span>
              <span id="AboutMe__chart">
                <label id="AboutMe__chart__label">Node JS: </label>
                <progress id="chart__bar" value="0.8" min="0" max="1" />
                <label id="AboutMe__chart__percent">80% </label>
              </span>
              <span id="AboutMe__chart">
                <label id="AboutMe__chart__label">PostgreSQL: </label>
                <progress id="chart__bar" value="0.75" min="0" max="1" />
                <label id="AboutMe__chart__percent">75% </label>
              </span>
            </div>
            <div className="AboutMe__skillset__charts__panel">
              <span id="AboutMe__chart">
                <label id="AboutMe__chart__label">React Native: </label>
                <progress id="chart__bar" value="0.75" min="0" max="1" />
                <label id="AboutMe__chart__percent">75% </label>
              </span>
              <span id="AboutMe__chart">
                <label id="AboutMe__chart__label">Flutter: </label>
                <progress id="chart__bar" value="0.7" min="0" max="1" />
                <label id="AboutMe__chart__percent">70% </label>
              </span>
              <span id="AboutMe__chart">
                <label id="AboutMe__chart__label">Python: </label>
                <progress id="chart__bar" value="0.9" min="0" max="1" />
                <label id="AboutMe__chart__percent">90% </label>
              </span>
              <span id="AboutMe__chart">
                <label id="AboutMe__chart__label">Keras: </label>
                <progress id="chart__bar" value="0.8" min="0" max="1" />
                <label id="AboutMe__chart__percent">80% </label>
              </span>
              <span id="AboutMe__chart">
                <label id="AboutMe__chart__label">C/C++: </label>
                <progress id="chart__bar" value="0.9" min="0" max="1" />
                <label id="AboutMe__chart__percent">90% </label>
              </span>
            </div>
          </div>
        </div>
        <div className="AboutMe__testimonials">
          <p id="AboutMe__title">TESTIMONIALS</p>

          <Carousel {...settings}>
            {Object.keys(testimonials).map((key) => {
              return (
                <Carousel.Item>
                  <CarouselCard item={testimonials[key]} />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
    );
  }
}

class CarouselCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let thumb = `https://drive.google.com/uc?export=view&id=${this.props.item.thumbId}`;

    return (
      <div className="AboutMe__testimonial__carouselItem">
        <span id="AboutMe__carouselItem__span1">
          <p id="AboutMe__carouselItem__quote">"</p>
          <p id="AboutMe__carouselItem__text">{this.props.item.text}</p>
        </span>
        <span id="AboutMe__carouselItem__span2">
          <img width="25%" id="AboutMe__carouselItem__image" src={thumb} />
          <p id="AboutMe__carouselItem__name">{this.props.item.name}</p>
          <p id="AboutMe__carouselItem__title">{this.props.item.title}</p>
        </span>
      </div>
    );
  }
}

export default AboutMe;
