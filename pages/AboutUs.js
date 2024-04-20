import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Footer, Navbar } from "components";
import AboutUsChild from "@/container/AboutUs/AboutUsChild";

function AboutUs(props) {
  return (
    <div>
      <Navbar />
      <AboutUsChild />
      <Footer />
    </div>
  );
}
export async function getStaticProps(context) {
  // extract the locale identifier from the URL
  const { locale } = context;

  return {
    props: {
      // pass the translation props to the page component
      ...(await serverSideTranslations(locale)),
    },
  };
}
export default AboutUs;
