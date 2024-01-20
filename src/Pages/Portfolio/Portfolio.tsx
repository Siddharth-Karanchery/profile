import * as React from "react";

import { Box } from "@mui/material";

import "./Portfolio.css";

import PortfolioSwiper from "../../Components/Portfolio Page Components/PortfolioSwiper/PortfolioSwiper";
import { webdevData } from "../../Data/webdev";
import { paintingData } from "../../Data/paintings";
import { inkArtData } from "../../Data/inkArt";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

function Portfolio() {
  const [sketchesData, setSketchesData] = React.useState<
    { [x: string]: any }[]
  >([]);
  const [digitalArtData, setDigitalArtData] = React.useState<
    { [x: string]: any }[]
  >([]);
  const [uIData, setUIData] = React.useState<{ [x: string]: any }[]>([]);

  const fetchSketches = async () => {
    await getDocs(collection(db, "Sketches")).then((result) => {
      const data = result.docs.map((doc) => ({
        ...doc.data(),
      }));
      setSketchesData(data);
    });
  };

  const fetchDigitalArt = async () => {
    await getDocs(collection(db, "DigitalArt")).then((result) => {
      const data = result.docs.map((doc) => ({
        ...doc.data(),
      }));
      setDigitalArtData(data);
    });
  };

  const fetchUI = async () => {
    await getDocs(collection(db, "UI")).then((result) => {
      const data = result.docs.map((doc) => ({
        ...doc.data(),
      }));
      setUIData(data);
    });
  };

  React.useEffect(() => {
    fetchSketches();
    fetchDigitalArt();
    fetchUI();
  }, []);
  return (
    <Box className="Portfolio">
      <PortfolioSwiper title={"UI Design"} data={uIData} />
      <PortfolioSwiper title={"Web Development"} data={webdevData} />
      <PortfolioSwiper title={"Paintings"} data={paintingData} />
      <PortfolioSwiper title={"Sketches"} data={sketchesData} />
      <PortfolioSwiper title={"Ink works"} data={inkArtData} />
      <PortfolioSwiper title={"Digital Art"} data={digitalArtData} />
    </Box>
  );
}

export default Portfolio;
