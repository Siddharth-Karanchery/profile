import React, { Component } from "react";

import Carousel from "react-grid-carousel";

import data from "../data/work_ex.json";

import paintings from "../data/paintings.json";
import sketches from "../data/sketches.json";
import inks from "../data/inks.json";
import digitalArt from "../data/digitalArt.json";
import ui from "../data/ui.json";
import webdev from "../data/webdev.json";

import "../css/Portfolio.css";

class Portfolio extends Component {
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
      showDots: true,
    };
    return (
      <div className="Portfolio">
        <div className="Portfolio__element">
          <div className="Portfolio__element__header">UI Design</div>
          <div className="Portfolio__element__body">
            <Carousel {...settings}>
              {Object.keys(ui).map((key) => {
                return (
                  <Carousel.Item>
                    <CarouselCardWeb item={ui[key]} />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>

        <div className="Portfolio__element">
          <div className="Portfolio__element__header">Web Development</div>
          <div className="Portfolio__element__body">
            <Carousel {...settings}>
              {Object.keys(webdev).map((key) => {
                return (
                  <Carousel.Item>
                    <CarouselCardWeb item={webdev[key]} />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>

        <div className="Portfolio__element">
          <div className="Portfolio__element__header">Paintings</div>
          <div className="Portfolio__element__body">
            <Carousel {...settings}>
              {Object.keys(paintings).map((key) => {
                return (
                  <Carousel.Item>
                    <CarouselCard item={paintings[key]} />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>

        <div className="Portfolio__element">
          <div className="Portfolio__element__header">Sketches</div>
          <div className="Portfolio__element__body">
            <Carousel {...settings}>
              {Object.keys(sketches).map((key) => {
                return (
                  <Carousel.Item>
                    <CarouselCard item={sketches[key]} />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>

        <div className="Portfolio__element">
          <div className="Portfolio__element__header">Ink works</div>
          <div className="Portfolio__element__body">
            <Carousel {...settings}>
              {Object.keys(inks).map((key) => {
                return (
                  <Carousel.Item>
                    <CarouselCard item={inks[key]} />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
        </div>

        <div className="Portfolio__element">
          <div className="Portfolio__element__header">Digital Art</div>
          <div className="Portfolio__element__body">
            <Carousel {...settings}>
              {Object.keys(digitalArt).map((key) => {
                return (
                  <Carousel.Item>
                    <CarouselCard item={digitalArt[key]} />
                  </Carousel.Item>
                );
              })}
            </Carousel>
          </div>
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
    let link = `https://drive.google.com/file/d/${this.props.item.imageId}/view?usp=sharing`;

    return (
      <div className="Portfolio__element__body__carouselItem">
        <p id="Portfolio__carouselItem__title">{this.props.item.title}</p>
        <div id="Portfolio__carouselItem__tagList">
          {this.props.item.tags.map((tag) => {
            return <p id="Portfolio__carouselItem__tags">{tag}</p>;
          })}
        </div>
        <img
          // width="80%"
          id="Portfolio__carouselItem__image"
          src={thumb}
          onClick={() => {
            window.open(link, "_blank");
          }}
        />
      </div>
    );
  }
}

class CarouselCardWeb extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let thumb = `https://drive.google.com/uc?export=view&id=${this.props.item.thumbId}`;

    return (
      <div className="Portfolio__element__body__carouselItem">
        <p id="Portfolio__carouselItem__title">{this.props.item.title}</p>
        <div id="Portfolio__carouselItem__tagList">
          {this.props.item.tags.map((tag) => {
            return <p id="Portfolio__carouselItem__tags">{tag}</p>;
          })}
        </div>
        <img
          // width="80%"
          id="Portfolio__carouselItem__image"
          src={thumb}
          onClick={() => {
            window.open(this.props.item.link, "_blank");
          }}
        />
      </div>
    );
  }
}

export default Portfolio;
