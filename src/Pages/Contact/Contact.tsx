import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  IconButton,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import "./Contact.css";
import { contactDropDownData } from "../../Data/contactDropdown";
import React, { useState } from "react";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { redirect } from "../../Functions/Functions";
import {
  EMAIL_URL,
  SERVICE_ID,
  TEMPLATE_ID,
  USER_ID,
} from "../../Data/constants";
import axios from "axios";

function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const subjectChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
  };
  const messageChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };
  const cancelHandler = (e?: React.MouseEvent | null) => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  const submitHandler = (e: React.MouseEvent) => {
    const data = {
      service_id: SERVICE_ID,
      template_id: TEMPLATE_ID,
      user_id: USER_ID,
      template_params: {
        name: name,
        email: email,
        subject: subject,
        message: message,
        refnum: Date.now(),
      },
    };

    axios
      .post(EMAIL_URL, data)
      .then(function (response) {
        alert("Mail Sent!");
        cancelHandler();
      })
      .catch(function (error) {
        console.log("Something went wrong!: ", error.statusText);
        alert("Something went wrong!");
      });
  };

  return (
    <Box className="Contact">
      <Box className="Contact__left">
        <Typography variant="h3">Contact Me</Typography>
        <Typography variant="h5" style={{ margin: "30px 0" }}>
          You can reach to me via any of the modes below or via the form.
        </Typography>
        <Box className="Contact__left__ele">
          <Box className="Contact__left__ele__iconBox">
            <LocationOnIcon fontSize="large" />
          </Box>
          <Typography variant="h6">Bangalore, India</Typography>
        </Box>
        <Box className="Contact__left__ele">
          <Box className="Contact__left__ele__iconBox">
            <WhatsAppIcon fontSize="large" />
          </Box>
          <Typography variant="h6">+91 - 99161 - 16616</Typography>
        </Box>
        <Box className="Contact__left__ele">
          <Box className="Contact__left__ele__iconBox">
            <EmailIcon fontSize="large" />
          </Box>
          <Typography variant="h6">
            SIDDHARTHKARANCHERY . OFFICIAL@GMAIL . COM
          </Typography>
        </Box>
        <Box className="Contact__left__social">
          <IconButton style={{ color: "white" }}>
            <FaGithub size="2.5rem" onClick={() => redirect("Github")} />
          </IconButton>
          <IconButton style={{ color: "white" }}>
            <FaLinkedin size="2.5rem" onClick={() => redirect("LinkedIn")} />
          </IconButton>
          <IconButton style={{ color: "white" }}>
            <FaInstagram size="2.5rem" onClick={() => redirect("Instagram")} />
          </IconButton>
          <IconButton style={{ color: "white" }}>
            <FaXTwitter size="2.5rem" onClick={() => redirect("Twitter")} />
          </IconButton>
        </Box>
      </Box>
      <Box className="Contact__right" style={{ color: "white" }}>
        <CssTextField
          className="Contact__right__input"
          required
          id="outlined-required"
          label="Name"
          value={name}
          onChange={nameChangeHandler}
        />
        <CssTextField
          className="Contact__right__input"
          required
          id="outlined-required"
          label="Email"
          value={email}
          onChange={emailChangeHandler}
        />
        <CssTextField
          className="Contact__right__input"
          id="outlined-select-currency"
          required
          select
          label="Subject"
          value={subject}
          defaultValue={subject}
          onChange={subjectChangeHandler}
        >
          {contactDropDownData.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </CssTextField>
        <CssTextField
          className="Contact__right__input"
          required
          id="outlined-required"
          label="Message"
          multiline
          rows={6}
          value={message}
          onChange={messageChangeHandler}
        />
        <Box className="Contact__right__buttonPanel">
          <Button
            variant="outlined"
            sx={cancelButtonStyle}
            onClick={cancelHandler}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={submitButtonStyle}
            onClick={submitHandler}
            disabled={
              name.length === 0 ||
              email.length === 0 ||
              subject.length === 0 ||
              message.length === 0
            }
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;

const CssTextField = styled(TextField)({
  "& .MuiInput-underline:after": {
    borderBottomColor: "#B2BAC2",
    color: "white",
  },
  "& .MuiInputLabel-root": { color: "white" },
  "& .MuiOutlinedInput-input": { color: "white" },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "#B2BAC2",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
      color: "white",
    },
  },
});

const cancelButtonStyle = {
  borderColor: "white",
  color: "white",
  "&:hover": {
    borderColor: "gray",
    color: "gray",
  },
};
const submitButtonStyle = {
  backgroundColor: "white",
  color: "#000056",
  "&:hover": {
    backgroundColor: "#000056",
    color: "white",
  },
};
