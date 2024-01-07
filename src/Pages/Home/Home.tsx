import { Box } from "@mui/material";

import "./Home.css";
import MainBanner from "../../Components/Home Page Components/Main Banner/MainBanner";
import Capabilities from "../../Components/Home Page Components/Capabilities/Capabilities";
import Skillset from "../../Components/Home Page Components/Skillset/Skillset";
import Testimonials from "../../Components/Home Page Components/Testimonials/Testimonials";

function Home() {
  return (
    <Box className="Home">
      <MainBanner />
      <Capabilities />
      <Skillset />
      <Testimonials />
    </Box>
  );
}

export default Home;
