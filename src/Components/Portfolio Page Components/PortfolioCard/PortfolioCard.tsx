import { Box, Chip, Typography } from "@mui/material";

import "./PortfolioCard.css";

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
      <Typography>{props.title}</Typography>
      <Box
        display={"flex"}
        justifyContent={"center"}
        style={{ width: "90%", margin: "20px 0" }}
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
        style={{ width: "60%", height: "65%" }}
        src={`https://drive.google.com/uc?export=view&id=${props.thumbId}`}
        alt=""
      />
    </Box>
  );
}

export default PortfolioCard;
