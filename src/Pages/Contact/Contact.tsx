import { Box, Typography, TextField, MenuItem, Button } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import "./Contact.css";
import { contactDropDownData } from "../../Data/contactDropdown";
import React, { useState } from "react";

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
  const cancelHandler = (e: React.MouseEvent) => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };
  const submitHandler = (e: React.MouseEvent) => {
    console.log("name:", name);
    console.log("email:", email);
    console.log("subject:", subject);
    console.log("message:", message);
  };

  return (
    <Box className="Contact">
      <Box className="Contact__left">
        <Typography variant="h3">Contact Me</Typography>
        <Typography variant="h5">
          You can reach to me via any of the modes below or via the form.
        </Typography>
      </Box>
      <Box className="Contact__right" style={{ color: "white" }}>
        <CssTextField
          className="Contact__right__input"
          color="success"
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
