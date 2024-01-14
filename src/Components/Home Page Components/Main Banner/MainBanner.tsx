import { Box, Button, Typography } from "@mui/material";
import { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import photo from "../../../assets/sid-pic-square.jpg";

import "./MainBanner.css";
import { redirect } from "../../../Functions/Functions";
import { mobileBreakpoint } from "../../../Data/constants";

function MainBanner() {
  const isMobile = useMediaQuery(`(max-width:${mobileBreakpoint}px)`);

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
          <Typography variant={isMobile ? "subtitle1" : "h6"}>
            Hello World! I'm
          </Typography>
          <Typography
            variant={isMobile ? "h2" : "h1"}
            style={{ width: "50%", fontSize: `${isMobile ? 4 : 7}rem` }}
          >
            Siddharth Karanchery
          </Typography>
          <Typography variant={isMobile ? "h6" : "h5"}>
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
