import * as React from "react";

import { Box, LinearProgress, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./Skillset.css";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

import { mobileBreakpoint } from "../../../Data/constants";

function Skillset() {
  const [skillsetData, setSkillsetData] = React.useState<
    { [x: string]: any }[]
  >([]);
  const isMobile = useMediaQuery(`(max-width:${mobileBreakpoint}px)`);

  const fetchSkillset = async () => {
    await getDocs(collection(db, "Skillset")).then((result) => {
      const data = result.docs.map((doc) => ({
        ...doc.data(),
      }));
      console.log("data: ", data);
      setSkillsetData(data);
    });
  };

  React.useEffect(() => {
    fetchSkillset();
  }, []);

  return (
    <Box className="Skillset">
      <Typography variant={isMobile ? "h4" : "h3"} className="Skillset__title">
        Skillset
      </Typography>
      <Box className="Skillset__panel">
        <Box className="Skillset__panel__ele">
          {skillsetData.slice(0, 5).map((skill) => (
            <Box className="Skillset__panel__ele__skill">
              <Typography
                className="Skillset__panel__ele__skill__title"
                variant={isMobile ? "subtitle1" : "h6"}
              >
                {skill.name}
              </Typography>
              <Box className="Skillset__panel__ele__skill__loader">
                <LinearProgress
                  variant="determinate"
                  value={skill.value}
                  color="inherit"
                />
              </Box>

              <Typography>{`${skill.value}%`}</Typography>
            </Box>
          ))}
        </Box>
        <Box className="Skillset__panel__ele">
          {skillsetData.slice(5, 10).map((skill) => (
            <Box className="Skillset__panel__ele__skill">
              <Typography
                className="Skillset__panel__ele__skill__title"
                variant={isMobile ? "subtitle1" : "h6"}
              >
                {skill.name}
              </Typography>
              <Box className="Skillset__panel__ele__skill__loader">
                <LinearProgress
                  variant="determinate"
                  value={skill.value}
                  color="inherit"
                />
              </Box>

              <Typography>{`${skill.value}%`}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Skillset;
