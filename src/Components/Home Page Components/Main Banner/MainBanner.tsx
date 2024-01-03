import { Box, Button, Typography } from "@mui/material";
import { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import photo from "../../../assets/sid-pic-square.jpg";

import "./MainBanner.css";
import {
  GithubPath,
  InstagramPath,
  LinkedInPath,
  TwitterPath,
} from "../../../Data/constants";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "black",
  fontWeight: "bold",
  width: "10rem",
  borderRadius: "2rem",
  marginTop: "5rem",
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: "#F0F0F0",
  },
}));

function MainBanner() {
  const redirect = (link: string) => {
    switch (link) {
      case "Github":
        window.open(GithubPath, "_blank", "noreferrer");
        break;
      case "LinkedIn":
        window.open(LinkedInPath, "_blank", "noreferrer");
        break;
      case "Instagram":
        window.open(InstagramPath, "_blank", "noreferrer");
        break;
      case "Twitter":
        window.open(TwitterPath, "_blank", "noreferrer");
        break;
    }
  };

  return (
    <Box className="MainBanner">
      <Box className="MainBanner__left">
        <Box className="MainBanner__left__photo">
          <img
            src={photo}
            className="MainBanner__left__photo__image"
            alt="user"
          />
        </Box>
        <Box className="MainBanner__left__socialMedia">
          <FaGithub size="2.5rem" onClick={() => redirect("Github")} />
          <FaLinkedin size="2.5rem" onClick={() => redirect("LinkedIn")} />
          <FaInstagram size="2.5rem" onClick={() => redirect("Instagram")} />
          <FaXTwitter size="2.5rem" onClick={() => redirect("Twitter")} />
        </Box>
      </Box>
      <Box className="MainBanner__right">
        <Box className="MainBanner__right__text">
          <Typography variant="h6">Hello World! I'm</Typography>
          <Typography variant="h1" style={{ width: "50%", fontSize: "7rem" }}>
            Siddharth Karanchery
          </Typography>
          <Typography variant="h5">
            UI Designer, Web developer & Mobile App developer
          </Typography>
        </Box>
        <ColorButton
          variant="contained"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/166EvGAMgauyW9kxmu_LKM_7AxAOTTDql/view?usp=sharing",
              "_blank"
            );
          }}
        >
          Resume
        </ColorButton>
      </Box>
    </Box>
  );
}

export default MainBanner;
