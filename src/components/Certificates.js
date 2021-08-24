import React, { Component } from "react";

import cert1 from "../img/cert1.jpg";
import sql from "../img/sql.jpg";
import dbp from "../img/dbp.jpg";
import dcpp from "../img/dcpp.jpg";
import pb from "../img/pb.jpg";
import pf from "../img/pf.jpg";
import ph from "../img/ph.jpg";

import "../css/Certificates.css";

class Certificates extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Certificates">
        <div className="Certificates__card">
          <img
            className="Certificates__card__image"
            src={sql}
            onClick={() => {
              window.open(
                "https://www.coursera.org/account/accomplishments/certificate/YMG6PLEJ6CLH",
                "_blank"
              );
            }}
          />
          <div className="Certificates__card__text">
            <p style={{ fontSize: "25px" }}>Course Name: SQL for Datascience</p>
            <p>Issued by: Coursera</p>
            <p>Date: Oct 2020</p>
          </div>
        </div>

        <div className="Certificates__card">
          <img
            className="Certificates__card__image"
            src={dbp}
            onClick={() => {
              window.open(
                "https://www.coursera.org/account/accomplishments/verify/NCTPMLQ4QAKV?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course",
                "_blank"
              );
            }}
          />
          <div className="Certificates__card__text">
            <p style={{ fontSize: "25px" }}>
              Course Name: Using Databases with Python
            </p>
            <p>Issued by: Coursera</p>
            <p>Date: Oct 2020</p>
          </div>
        </div>

        <div className="Certificates__card">
          <img
            className="Certificates__card__image"
            src={dcpp}
            onClick={() => {
              window.open(
                "https://www.coursera.org/account/accomplishments/certificate/4EMAS4C9YRVP",
                "_blank"
              );
            }}
          />
          <div className="Certificates__card__text">
            <p style={{ fontSize: "25px" }}>
              Course Name: Data Collection and Processing with Python
            </p>
            <p>Issued by: Coursera</p>
            <p>Date: Jul 2020</p>
          </div>
        </div>

        <div className="Certificates__card">
          <img
            className="Certificates__card__image"
            src={pb}
            onClick={() => {
              window.open(
                "https://www.coursera.org/account/accomplishments/certificate/796T7Q2JL3P2",
                "_blank"
              );
            }}
          />
          <div className="Certificates__card__text">
            <p style={{ fontSize: "30px" }}>Course Name: Python Basics</p>
            <p>Issued by: Coursera</p>
            <p>Date: Jun 2020</p>
          </div>
        </div>

        <div className="Certificates__card">
          <img
            className="Certificates__card__image"
            src={pf}
            onClick={() => {
              window.open(
                "https://www.coursera.org/account/accomplishments/certificate/6BFVBU86JXWG",
                "_blank"
              );
            }}
          />
          <div className="Certificates__card__text">
            <p style={{ fontSize: "30px" }}>
              Course Name: Python Functions, Files, and Dictionaries
            </p>
            <p>Issued by: Coursera</p>
            <p>Date: Jun 2020</p>
          </div>
        </div>

        <div className="Certificates__card">
          <img className="Certificates__card__image" src={ph} />
          <div className="Certificates__card__text">
            <p style={{ fontSize: "30px" }}>
              Course Name: Project Mgmt for Support Functions
            </p>
            <p>Issued by: L&T PMI</p>
            <p>Date: Apr 2015</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Certificates;
