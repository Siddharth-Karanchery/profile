import * as React from "react";

import { Box } from "@mui/material";

import "./Portfolio.css";

import PortfolioSwiper from "../../Components/Portfolio Page Components/PortfolioSwiper/PortfolioSwiper";

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
  const [webDevData, setWebDevData] = React.useState<{ [x: string]: any }[]>(
    []
  );
  const [inkData, setInkData] = React.useState<{ [x: string]: any }[]>([]);
  const [paintingsData, setPaintingsData] = React.useState<
    { [x: string]: any }[]
  >([]);

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

  const fetchWebDev = async () => {
    await getDocs(collection(db, "WebDev")).then((result) => {
      const data = result.docs.map((doc) => ({
        ...doc.data(),
      }));
      setWebDevData(data);
    });
  };
  const fetchInk = async () => {
    await getDocs(collection(db, "Ink")).then((result) => {
      const data = result.docs.map((doc) => ({
        ...doc.data(),
      }));
      setInkData(data);
    });
  };
  const fetchPaintings = async () => {
    await getDocs(collection(db, "Paintings")).then((result) => {
      const data = result.docs.map((doc) => ({
        ...doc.data(),
      }));
      setPaintingsData(data);
    });
  };

  React.useEffect(() => {
    fetchSketches();
    fetchDigitalArt();
    fetchUI();
    fetchWebDev();
    fetchInk();
    fetchPaintings();
  }, []);
  return (
    <Box className="Portfolio">
      <PortfolioSwiper title={"UI Design"} data={uIData} />
      <PortfolioSwiper title={"Web Development"} data={webDevData} />
      <PortfolioSwiper title={"Paintings"} data={paintingsData} />
      <PortfolioSwiper title={"Sketches"} data={sketchesData} />
      <PortfolioSwiper title={"Ink works"} data={inkData} />
      <PortfolioSwiper title={"Digital Art"} data={digitalArtData} />
    </Box>
  );
}

export default Portfolio;
