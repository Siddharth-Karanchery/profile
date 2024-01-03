import { Box, LinearProgress, Typography } from "@mui/material";
import "./Skillset.css";
import { skillsetData } from "../../../Data/skillsetData";

function Skillset() {
  return (
    <Box className="Skillset">
      <Typography variant="h3" className="Skillset__title">
        Skillset
      </Typography>
      <Box className="Skillset__panel">
        <Box className="Skillset__panel__ele">
          {skillsetData.slice(0, 5).map((skill) => (
            <Box className="Skillset__panel__ele__skill">
              <Typography
                className="Skillset__panel__ele__skill__title"
                variant="h6"
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
                variant="h6"
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
