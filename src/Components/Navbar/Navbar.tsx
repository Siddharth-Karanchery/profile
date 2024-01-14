import * as React from "react";

import { Grid, Typography, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

//@ts-ignore
import logo from "../../assets/Siddharth_Karanchery.png";
import logo_small from "../../assets/SK.png";
import "./Navbar.css";
import { HeaderTabs } from "../../Data/HeaderTabs";
import { Link } from "react-router-dom";
import { mobileBreakpoint } from "../../Data/constants";

declare interface propType {
  currentTab: string;
  handleTabSelect: Function;
}

function Navbar(props: propType) {
  const isMobile = useMediaQuery(`(max-width:${mobileBreakpoint}px)`);

  return (
    <Grid className="Navbar" flexDirection={isMobile ? "column" : "row"}>
      <Grid item className="Navbar__logo">
        <img
          src={isMobile ? logo_small : logo}
          alt="logo"
          className="Navbar__logo__image"
        />
        <Typography variant={isMobile ? "subtitle1" : "h6"}>
          / Web Developer
        </Typography>
      </Grid>
      <Grid item className="Navbar__HeaderTabs">
        <Box className="Navbar__HeaderTabs">
          {HeaderTabs.map((tab) => (
            <Link to={tab.path} style={{ textDecoration: "none" }}>
              <Box
                onClick={() => props.handleTabSelect(tab.tabName)}
                className={
                  tab.tabName === props.currentTab
                    ? "Navbar__HeaderTabs__Tab__current"
                    : "Navbar__HeaderTabs__Tab"
                }
              >
                <Typography variant={isMobile ? "caption" : "h6"}>
                  {tab.tabName}
                </Typography>
              </Box>
            </Link>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}

export default Navbar;
