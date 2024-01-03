import { Box, Typography } from "@mui/material";
import DesignServicesIcon from "@mui/icons-material/DesignServices";

import ui from "../../../assets/icons/UI-design-svgrepo-com.png";
import web from "../../../assets/icons/web-design-svgrepo-com.png";
import mob from "../../../assets/icons/smartphone-app-svgrepo-com.png";
import iot from "../../../assets/icons/internet-of-things.png";

import "./Capabilities.css";

function Capabilities() {
  return (
    <Box className="Capabilities">
      <Typography variant="h3" className="Capabilities__title">
        Capabilities
      </Typography>
      <Box className="Capabilities__panel">
        <Box className="Capabilities__left">
          <Box className="Capabilities__left__card">
            <img className="Capabilities__left__card__icon" src={ui} alt="" />
            <Typography variant="h5">UI Design</Typography>
          </Box>
          <Box className="Capabilities__left__card">
            <img className="Capabilities__left__card__icon" src={web} alt="" />
            <Typography variant="h5" style={{ textAlign: "center" }}>
              Web Development
            </Typography>
          </Box>
          <Box className="Capabilities__left__card">
            <img className="Capabilities__left__card__icon" src={mob} alt="" />
            <Typography variant="h5" style={{ textAlign: "center" }}>
              Mobile App Development
            </Typography>
          </Box>
          <Box className="Capabilities__left__card">
            <img className="Capabilities__left__card__icon" src={iot} alt="" />
            <Typography variant="h5" style={{ textAlign: "center" }}>
              Internet of Things
            </Typography>
          </Box>
        </Box>
        <Box className="Capabilities__right">
          <Typography variant="h4" style={{ marginBottom: "1rem" }}>
            Why should you hire me?
          </Typography>
          <Typography variant="h5">
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
