import { Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "./PortfolioSwiper.css";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import { mobileBreakpoint, tabletBreakpoint } from "../../../Data/constants";

declare interface PropType {
  title: string;
  data: PortfolioSwiperType[] | { [x: string]: any }[];
}
function PortfolioSwiper(props: PropType) {
  const isMobile = useMediaQuery(`(max-width:${mobileBreakpoint}px)`);
  const isTablet = useMediaQuery(`(max-width:${tabletBreakpoint}px)`);

  return (
    <Box className="Portfolio__swiper">
      <Typography variant="h5" style={{ marginBottom: "-30px" }}>
        {props.title}
      </Typography>
      <Swiper
        spaceBetween={30}
        slidesPerView={isMobile || isTablet ? 1 : 3}
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
              imageId={ele.imageId}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default PortfolioSwiper;
