import { AspectRatio } from "@chakra-ui/react";
import HeroSection from "../components/HeroSection";
import Landing from "../components/Landing";
import Loading from "../components/Loading";
import MyCarouselWeb from "../components/MyCarouselWeb";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <>
      
     <Loading/>
     <NavBar/>
     <Landing/>
    </>
  );
}
