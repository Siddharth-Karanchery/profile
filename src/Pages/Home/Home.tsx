import { Box } from "@mui/material";

import "./Home.css";
import MainBanner from "../../Components/Home Page Components/Main Banner/MainBanner";
import Capabilities from "../../Components/Home Page Components/Capabilities/Capabilities";

function Home() {
  return (
    <Box className="Home">
      <MainBanner />
      <Capabilities />
    </Box>
  );
}

export default Home;
