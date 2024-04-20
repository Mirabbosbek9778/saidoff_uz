import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import WhoAreWe from "./WhoAreWe";
import AboutHeader from "./AboutHeader";
import Results from "./Results";
import Team from "./Team";
import TeamImg from "./TeamImg";
// import AboutBox from "./AboutBox";

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
      {/* <AboutBox /> */}
    </div>
  );
}

export default AboutUsChild;
