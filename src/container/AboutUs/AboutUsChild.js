import React, { useEffect } from "react";
import { Assistance, Partner, Slider, SliderData } from "@/components";
import WhoAreWe from "@/src/container/AboutUs/WhoAreWe";
import Results from "@/src/container/AboutUs/Results";
import Team from "@/src/container/AboutUs/Team";
import TeamImg from "@/src/container/AboutUs/TeamImg";
import AboutHeader from "@/src/container/AboutUs/AboutHeader";
import AOS from "aos";
import "aos/dist/aos.css";
import AboutBox from "@/src/container/AboutUs/AboutBox";

function AboutUsChild(props) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      // once: true,
      offset: 50,
      duration: 1200,
    });
  }, []);
  return (
    <div>
      <AboutHeader />
      <Results />
      <WhoAreWe />
      <Team />
      <TeamImg />
      {/*<AboutBox />*/}
    </div>
  );
}

export default AboutUsChild;
