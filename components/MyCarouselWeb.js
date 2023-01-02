import React from "react";
import {
  AspectRatio,
  Box,
  Container,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const headingOptions = {
  pos: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  textTransform: "uppercase",
  p: "4",
  size: "4xl",
};

const MyCarouselWeb = () => {
  return (
    <Carousel
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      // showArrows={false}
    >
      <Box w="full" h={"100vh"}>
      <video
      playsInline
      autoPlay
      muted
      poster="https://ruttl.com/assets/img/index-hero.jpg"
    >
      <source src="/videos/2.mp4" type="video/mp4" />
    </video>
        <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
          Get In. Get Fit. Get on with Life.
        </Heading>
      </Box>
      <Box w="full" h={"100vh"}>
        <video autoPlay muted loop id="myVideo">
          <source src="/videos/1.mp4" type="video/mp4" />
        </video>
        <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
          Get In. Get Fit. Get on with Life.
        </Heading>
      </Box>
    </Carousel>
  );
};

export default MyCarouselWeb;
