import "./TestimonialCard.css";
import { Box, Typography } from "@mui/material";
import { cloudinaryBaseURL } from "../../../../Data/constants";

declare interface propType {
  name: string;
  title: string;
  thumbId: string;
  text: string;
}

function TestimonialCard(props: propType) {
  return (
    <Box className="TestimonialCard">
      <Box className="TestimonialCard__Header">
        <img
          className="TestimonialCard__thumb"
          src={`${cloudinaryBaseURL}${props.thumbId}`}
          alt="Testimonial user"
        />
        <Box className="TestimonialCard__Header__Details">
          <Typography variant="h6">{props.name}</Typography>
          <Typography variant="subtitle2" style={{ fontStyle: "italic" }}>
            {props.title}
          </Typography>
        </Box>
      </Box>
      <Box className="TestimonialCard__Body">
        <Typography variant="h5" style={{ textAlign: "justify" }}>
          {props.text}
        </Typography>
      </Box>
    </Box>
  );
}

export default TestimonialCard;
