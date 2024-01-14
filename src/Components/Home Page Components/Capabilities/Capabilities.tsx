import { Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import ui from "../../../assets/icons/UI-design-svgrepo-com.png";
import web from "../../../assets/icons/web-design-svgrepo-com.png";
import mob from "../../../assets/icons/smartphone-app-svgrepo-com.png";
import iot from "../../../assets/icons/internet-of-things.png";

import "./Capabilities.css";
import { mobileBreakpoint } from "../../../Data/constants";

function Capabilities() {
  const isMobile = useMediaQuery(`(max-width:${mobileBreakpoint}px)`);

  return (
    <Box className="Capabilities">
      <Typography
        variant={isMobile ? "h4" : "h3"}
        className="Capabilities__title"
      >
        Capabilities
      </Typography>
      <Box className="Capabilities__panel">
        <Box className="Capabilities__left">
          <Box className="Capabilities__left__card">
            <img className="Capabilities__left__card__icon" src={ui} alt="" />
            <Typography variant={isMobile ? "h6" : "h5"}>UI Design</Typography>
          </Box>
          <Box className="Capabilities__left__card">
            <img className="Capabilities__left__card__icon" src={web} alt="" />
            <Typography
              variant={isMobile ? "h6" : "h5"}
              style={{ textAlign: "center" }}
            >
              Web Development
            </Typography>
          </Box>
          <Box className="Capabilities__left__card">
            <img className="Capabilities__left__card__icon" src={mob} alt="" />
            <Typography
              variant={isMobile ? "h6" : "h5"}
              style={{ textAlign: "center" }}
            >
              Mobile App Development
            </Typography>
          </Box>
          <Box className="Capabilities__left__card">
            <img className="Capabilities__left__card__icon" src={iot} alt="" />
            <Typography
              variant={isMobile ? "h6" : "h5"}
              style={{ textAlign: "center" }}
            >
              Internet of Things
            </Typography>
          </Box>
        </Box>
        <Box className="Capabilities__right">
          <Typography
            variant={isMobile ? "h5" : "h4"}
            style={{ marginBottom: "1rem" }}
          >
            Why should you hire me?
          </Typography>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            style={{ textAlign: "justify" }}
          >
            Design and Development are my passion and I truly enjoy building and
            working on projects that help people/companies. I have experience in
            different domains such as web design, electronics and marketing. The
            wide skillset make me adaptive to cater to wide variety of client
            requirements.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Capabilities;
