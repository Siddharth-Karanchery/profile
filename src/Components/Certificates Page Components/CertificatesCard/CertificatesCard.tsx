import { Grid, Paper, Typography } from "@mui/material";
import "./CertificatesCard.css";

declare interface propType {
  name: string;
  issuedBy: string;
  date: string;
  image: string;
  link: string;
}

function CertificatesCard(props: propType) {
  const clickHandler = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <Grid item lg={4} className="CertificatesCard__Grid">
      <Paper className="CertificatesCard">
        <img
          className={`CertificatesCard__image ${
            props.link.length === 0 ? "noPointer" : null
          }`}
          src={props.image}
          alt=""
          onClick={() => clickHandler(props.link)}
        />
        <Typography variant="h6" style={{ textAlign: "center" }}>
          Course Name: {props.name}
        </Typography>
        <Typography>Issued by: {props.issuedBy}</Typography>
        <Typography>Date: {props.date}</Typography>
      </Paper>
    </Grid>
  );
}

export default CertificatesCard;
