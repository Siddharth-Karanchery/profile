import "./TestimonialCard.css";
import { Box, Typography } from "@mui/material";
import {
  cloudinaryBaseURL,
  mobileBreakpoint,
} from "../../../../Data/constants";
import useMediaQuery from "@mui/material/useMediaQuery";

declare interface propType {
  name: string;
  title: string;
  thumbId: string;
  text: string;
}

function TestimonialCard(props: propType) {
  const isMobile = useMediaQuery(`(max-width:${mobileBreakpoint}px)`);
  return (
    <Box className="TestimonialCard">
      <Box className="TestimonialCard__Header">
        <img
          className="TestimonialCard__thumb"
          src={`${cloudinaryBaseURL}${props.thumbId}`}
          alt="Testimonial user"
        />
        <Box className="TestimonialCard__Header__Details">
          <Typography variant={isMobile ? "subtitle1" : "h6"}>
            {props.name}
          </Typography>
          <Typography
            variant={isMobile ? "caption" : "subtitle2"}
            style={{ fontStyle: "italic" }}
          >
            {props.title}
          </Typography>
        </Box>
      </Box>
      <Box className="TestimonialCard__Body">
        <Typography
          variant={isMobile ? "h6" : "h5"}
          style={{ textAlign: "justify" }}
        >
          {props.text}
        </Typography>
      </Box>
    </Box>
  );
}

export default TestimonialCard;
