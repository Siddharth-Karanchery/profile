import { Grid, Paper, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./CertificatesCard.css";
import { mobileBreakpoint } from "../../../Data/constants";
import { linkExplorer } from "../../../Functions/Functions";

declare interface propType {
  name: string;
  issuedBy: string;
  date: string;
  image: string;
  link: string;
}

function CertificatesCard(props: propType) {
  const isMobile = useMediaQuery(`(max-width:${mobileBreakpoint}px)`);

  return (
    <Grid item lg={4} className="CertificatesCard__Grid">
      <Paper className="CertificatesCard">
        <img
          className={`CertificatesCard__image ${
            props.link.length === 0 ? "noPointer" : null
          }`}
          src={props.image}
          alt=""
          onClick={() => linkExplorer(props.link, false)}
        />
        <Typography
          variant={isMobile ? "subtitle1" : "h6"}
          style={{ textAlign: "center" }}
        >
          Course Name: {props.name}
        </Typography>
        <Typography variant={isMobile ? "subtitle2" : "subtitle1"}>
          Issued by: {props.issuedBy}
        </Typography>
        <Typography variant={isMobile ? "subtitle2" : "subtitle1"}>
          Date: {props.date}
        </Typography>
      </Paper>
    </Grid>
  );
}

export default CertificatesCard;
