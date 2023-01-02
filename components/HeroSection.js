import { Box, Heading } from "@chakra-ui/react";
import React from "react";
const headingOptions = {
  pos: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%,-50%)",
  textTransform: "uppercase",
  p: "8",
  size: "5xl",
};
const HeroSection = () => {
  return (
    <Box w="full" h={"100vh"}>
      <video autoPlay muted loop id="myVideo">
        <source src="/videos/1.mp4" type="video/mp4" />
      </video>
      <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
        Get In. Get Fit. Get on with Life.
      </Heading>
      
    </Box>
  );
};

export default HeroSection;
