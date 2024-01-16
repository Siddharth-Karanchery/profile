import { Box, Typography, Button } from "@mui/material";
import { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import "./Resume.css";
import { resumeData } from "../../Data/resume";
import { mobileBreakpoint } from "../../Data/constants";

function Resume() {
  const isMobile = useMediaQuery(`(max-width:${mobileBreakpoint}px)`);

  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: "black",
    fontWeight: "bold",
    width: `${isMobile ? 7 : 10}rem`,
    borderRadius: "2rem",
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "#F0F0F0",
    },
  }));

  return (
    <Box className="Resume">
      <Box className="Resume__Header">
        <Typography
          variant={isMobile ? "h4" : "h3"}
          className="Resume__Header__Text"
        >
          Experience
        </Typography>
        <ColorButton
          variant="contained"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/166EvGAMgauyW9kxmu_LKM_7AxAOTTDql/view?usp=sharing",
              "_blank"
            );
          }}
        >
          Download
        </ColorButton>
      </Box>
      <Box className="Resume__Body">
        {resumeData.map((role) => (
          <Box className="Resume__Body__ele">
            <Box className="Resume__Body__ele__left">
              <Typography
                variant="h5"
                className="Resume__ele__left__companyName"
                style={{ margin: `${isMobile ? 5 : 10}px 0` }}
              >{`${role.companyName}`}</Typography>
              <Typography
                variant="subtitle1"
                style={{ margin: "2px 0", textTransform: "uppercase" }}
              >{`${role.from} - ${role.to}`}</Typography>
              <Typography
                variant="subtitle2"
                style={{ margin: "2px 0" }}
              >{`${role.title}`}</Typography>
              <Typography
                variant={isMobile ? "caption" : "subtitle2"}
                style={{ margin: "2px 0" }}
              >{`${role.location}`}</Typography>
            </Box>
            <Box className="Resume__Body__ele__right">
              <ul style={{ margin: "0px" }}>
                {role.responsibility.map((resp) => (
                  <li style={{ margin: "10px", textAlign: "justify" }}>
                    {resp}
                  </li>
                ))}
              </ul>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Resume;
