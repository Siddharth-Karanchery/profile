import * as React from "react";

import useMediaQuery from "@mui/material/useMediaQuery";
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
import { mobileBreakpoint } from "../../../Data/constants";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

function Testimonials() {
  const isMobile = useMediaQuery(`(max-width:${mobileBreakpoint}px)`);

  const fetchPost = async () => {
    await getDocs(collection(db, "UI")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      // setTodos(newData);
      console.log("newData: ", newData);
    });
  };

  React.useEffect(() => {
    fetchPost();
  }, []);

  return (
    <Box className="Testimonials">
      <Typography
        variant={isMobile ? "h4" : "h3"}
        className="Testimonials__title"
      >
        Testimonials
      </Typography>
      <Swiper
        spaceBetween={30}
        slidesPerView={isMobile ? 1 : 3}
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
