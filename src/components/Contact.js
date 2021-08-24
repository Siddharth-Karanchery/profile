import React, { Component } from "react";

import emailjs from "emailjs-com";

import EmailIcon from "@material-ui/icons/Email";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

import "../css/Contact.css";
import { isMobile } from "react-device-detect";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      subject: null,
      message: null,
    };
    this.subjectSelectChange = this.subjectSelectChange.bind(this);
  }
  subjectSelectChange(e) {
    if (e.target.value === "null") {
      this.setState({ subject: null });
    } else {
      this.setState({ subject: e.target.value });
    }
  }
  submitHandler() {
    if (
      this.state.name === null ||
      this.state.email === null ||
      this.state.subject === null ||
      this.state.message === null
    ) {
      alert("One or more fields are empty. Please recheck and submit.");
    } else {
      console.log("Name: ", this.state.name);
      console.log("email: ", this.state.email);
      console.log("subject: ", this.state.subject);
      console.log("message: ", this.state.message);

      var data = {
        service_id: "service_l5qpmpm",
        template_id: "contact_form",
        user_id: "user_NYKKjtpjlQJ6ULWwlH0Ha",
        template_params: {
          name: this.state.name,
          email: this.state.email,
          subject: this.state.subject,
          message: this.state.message,
          refnum: Date.now(),
        },
      };

      fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      }).then(
        (result) => {
          console.log(result.statusText);
          alert("Mail Sent!");
          window.location.reload(false);
        },
        (error) => {
          console.log(error.statusText);
          alert("Something went wrong!");
        }
      );
    }
  }

  render() {
    return (
      <div className="Contact">
        <div className="Contact__left">
          <p className="Contact__left__title">Contact Me</p>
          <p style={{ fontSize: "20px" }}>
            You can reach to me via any of the modes below or via the form.
          </p>
          <span className="Contact__left__item">
            <div id="Contact__icon__back">
              <LocationOnIcon id="Contact__icon__icon" />
            </div>
            Bangalore, India
          </span>
          <span className="Contact__left__item">
            <div id="Contact__icon__back">
              <WhatsAppIcon id="Contact__icon__icon" />
            </div>
            +91 - 99161 - 16616
          </span>
          <span className="Contact__left__item">
            <div id="Contact__icon__back">
              <EmailIcon id="Contact__icon__icon" />
            </div>
            SIDDHARTHKARANCHERY . OFFICIAL@GMAIL . COM
          </span>
          <div className="Contact__left__iconPanel">
            <GitHubIcon
              id="Contact__icon__iconSocial"
              onClick={() =>
                window.open("https://github.com/Siddharth-Karanchery", "_blank")
              }
            />
            <LinkedInIcon
              id="Contact__icon__iconSocial"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/siddharth-karanchery-09602120/",
                  "_blank"
                )
              }
            />
            <InstagramIcon
              id="Contact__icon__iconSocial"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/artificial.intelligens_art/",
                  "_blank"
                )
              }
            />
            <TwitterIcon
              id="Contact__icon__iconSocial"
              onClick={() =>
                window.open("https://twitter.com/siddie_k", "_blank")
              }
            />
          </div>
        </div>

        <div className="Contact__right">
          <form>
            <input
              type="text"
              placeholder="Name"
              className="Contact__right__input"
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
            <input
              type="email"
              placeholder="E-mail Address"
              className="Contact__right__input"
              onChange={(e) => {
                this.setState({ email: e.target.value });
              }}
            />

            <select
              type="select"
              placeholder="Subject"
              className="Contact__right__select"
              onChange={this.subjectSelectChange}
            >
              <option
                id="Contact__select__element"
                style={{
                  color: "black",
                }}
                value="null"
              >
                Subject
              </option>
              <option
                id="Contact__select__element"
                style={{
                  color: "black",
                }}
                value="Enquiry"
              >
                Enquiry
              </option>
              <option
                id="Contact__select__element"
                style={{
                  color: "black",
                }}
                value="Suggestion"
              >
                Suggestion
              </option>
              <option
                id="Contact__select__element"
                style={{
                  color: "black",
                }}
                value="Job Opportunity"
              >
                Job Opportunity
              </option>
              <option
                id="Contact__select__element"
                style={{
                  color: "black",
                }}
                value="Others"
              >
                Others
              </option>
            </select>
            <textarea
              type="text"
              placeholder="Message"
              className="Contact__right__text"
              onChange={(e) => {
                this.setState({ message: e.target.value });
              }}
            />
          </form>
          <button
            className="Contact__right__button"
            onClick={() => {
              this.submitHandler();
            }}
          >
            Send
          </button>
        </div>
      </div>
    );
  }
}

export default Contact;
