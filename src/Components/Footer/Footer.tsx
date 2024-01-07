import { Box, IconButton, Tooltip, Typography } from "@mui/material";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import {
  GithubPath,
  InstagramPath,
  LinkedInPath,
  TwitterPath,
} from "../../Data/constants";

import "./Footer.css";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { HeaderTabs } from "../../Data/HeaderTabs";
import { Link } from "react-router-dom";

declare interface propType {
  handleTabSelect: Function;
}

function Footer(props: propType) {
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
    <Box className="Footer">
      <Typography variant="h5" className="Footer__title">
        #Follow Me
      </Typography>
      <Box className="Footer__social">
        <Tooltip title="Github">
          <IconButton className="Footer__social__iconButton">
            <FaGithub
              size="2.5rem"
              color="#012997"
              onClick={() => redirect("Github")}
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="LinkedIn">
          <IconButton className="Footer__social__iconButton">
            <FaLinkedin
              size="2.5rem"
              color="#012997"
              onClick={() => redirect("LinkedIn")}
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="Instagram">
          <IconButton className="Footer__social__iconButton">
            <FaInstagram
              size="2.5rem"
              color="#012997"
              onClick={() => redirect("Instagram")}
            />
          </IconButton>
        </Tooltip>
        <Tooltip title="X/Twitter">
          <IconButton className="Footer__social__iconButton">
            <FaXTwitter
              size="2.5rem"
              color="#012997"
              onClick={() => redirect("Twitter")}
            />
          </IconButton>
        </Tooltip>
      </Box>

      <IconButton
        className="Footer__social__iconButton"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        <Typography style={{ color: "#012997" }}>Back to top</Typography>
        <ExpandLessIcon style={{ color: "#012997" }} />
      </IconButton>

      <Box className="Footer__links">
        {HeaderTabs.map((tab) => (
          <Link
            to={tab.path}
            style={{ textDecoration: "none", color: "#012997" }}
          >
            <Box onClick={() => props.handleTabSelect(tab.tabName)}>
              <Typography variant="h5">{tab.tabName}</Typography>
            </Box>
          </Link>
        ))}
      </Box>
      <Typography>{`©${
        new Date().toDateString().split(" ")[3]
      } by Siddharth Karanchery`}</Typography>
      <Typography>Updated on January 2024</Typography>
    </Box>
  );
}

export default Footer;
