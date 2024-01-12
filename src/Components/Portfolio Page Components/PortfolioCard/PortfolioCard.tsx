import { Box, Chip, Typography } from "@mui/material";

import "./PortfolioCard.css";
import { cloudinaryBaseURL } from "../../../Data/constants";

declare interface PropType {
  title: string;
  link?: string;
  thumbId: string;
  imageId?: string;
  tags: Array<string>;
}
function PortfolioCard(props: PropType) {
  return (
    <Box className="PortfolioCard">
      <Typography style={{ margin: "20px 0", fontWeight: "bold" }}>
        {props.title}
      </Typography>
      <Box
        display={"flex"}
        justifyContent={"center"}
        style={{ width: "90%", margin: "5px 0" }}
      >
        {props.tags.map((tag: string) => (
          <Chip
            label={tag}
            variant="filled"
            size="medium"
            style={{ margin: "0px 10px" }}
          />
        ))}
      </Box>
      <img
        style={{ transform: "scale(0.9)" }}
        src={`${cloudinaryBaseURL}${props.thumbId}`}
        alt=""
      />
    </Box>
  );
}

export default PortfolioCard;
