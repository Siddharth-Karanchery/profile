import * as React from "react";

import { Grid, Tab, Tabs, Typography, Box } from "@mui/material";

//@ts-ignore
import logo from "../../assets/Siddharth_Karanchery.png";
import "./Navbar.css";
import { HeaderTabs } from "../../Data/HeaderTabs";
import { Link } from "react-router-dom";

function Navbar() {
  const [currentTab, setCurrentTab] = React.useState("About");

  const handleTabSelect = (tabName: string) => {
    setCurrentTab(tabName);
  };
  console.log("test");

  return (
    <Grid className="Navbar">
      <Grid item container className="Navbar__logo" lg={4}>
        <img src={logo} alt="logo" className="Navbar__logo__image" />
        <Typography variant="h6">/ Web Developer</Typography>
      </Grid>
      <Grid item container lg={8}>
        <Box className="Navbar__HeaderTabs">
          {HeaderTabs.map((tab) => (
            <Link to={tab.path} style={{ textDecoration: "none" }}>
              <Box
                onClick={() => handleTabSelect(tab.tabName)}
                className={
                  tab.tabName === currentTab
                    ? "Navbar__HeaderTabs__Tab__current"
                    : "Navbar__HeaderTabs__Tab"
                }
              >
                <Typography>{tab.tabName}</Typography>
              </Box>
            </Link>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}

export default Navbar;
