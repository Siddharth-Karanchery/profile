import { Box } from "@mui/material";

import "./Home.css";
import MainBanner from "../../Components/Home Page Components/Main Banner/MainBanner";
import Capabilities from "../../Components/Home Page Components/Capabilities/Capabilities";
import Skillset from "../../Components/Home Page Components/Skillset/Skillset";

function Home() {
  return (
    <Box className="Home">
      <MainBanner />
      <Capabilities />
      <Skillset />
    </Box>
  );
}

export default Home;
