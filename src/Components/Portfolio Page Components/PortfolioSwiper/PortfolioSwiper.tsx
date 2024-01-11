import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "./PortfolioSwiper.css";
import PortfolioCard from "../PortfolioCard/PortfolioCard";

declare interface PropType {
  title: string;
  data: PortfolioSwiperType[];
}
function PortfolioSwiper(props: PropType) {
  return (
    <Box className="Portfolio__swiper">
      <Typography variant="h5" style={{ marginBottom: "-30px" }}>
        {props.title}
      </Typography>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {props.data.map((ele) => (
          <SwiperSlide>
            <PortfolioCard
              title={ele.title}
              link={ele.link}
              thumbId={ele.thumbId}
              tags={ele.tags}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default PortfolioSwiper;
