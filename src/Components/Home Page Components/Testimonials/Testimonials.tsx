// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "./Testimonials.css";
import { Box } from "@mui/material";
import { testimonials } from "../../../Data/testimonialData";
import TestimonialCard from "./TestimonialCard/TestimonialCard";
import { Typography } from "@mui/material";

function Testimonials() {
  return (
    <Box className="Testimonials">
      <Typography variant="h3" className="Testimonials__title">
        Testimonials
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
        {testimonials.map((testimonial) => (
          <SwiperSlide>
            <TestimonialCard
              name={testimonial.name}
              title={testimonial.title}
              thumbId={testimonial.thumbId}
              text={testimonial.text}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default Testimonials;
