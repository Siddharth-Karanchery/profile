import { Box } from "@mui/material";

import "./Portfolio.css";
import { uiData } from "../../Data/ui";

import PortfolioSwiper from "../../Components/Portfolio Page Components/PortfolioSwiper/PortfolioSwiper";
import { webdevData } from "../../Data/webdev";
import { paintingData } from "../../Data/paintings";
import { sketchesData } from "../../Data/sketches";
import { inkArtData } from "../../Data/inkArt";
import { digitalArtData } from "../../Data/digitalArt";

function Portfolio() {
  return (
    <Box className="Portfolio">
      <PortfolioSwiper title={"UI Design"} data={uiData} />
      <PortfolioSwiper title={"Web Development"} data={webdevData} />
      <PortfolioSwiper title={"Paintings"} data={paintingData} />
      <PortfolioSwiper title={"Sketches"} data={sketchesData} />
      <PortfolioSwiper title={"Ink works"} data={inkArtData} />
      <PortfolioSwiper title={"Digital Art"} data={digitalArtData} />
    </Box>
  );
}

export default Portfolio;
