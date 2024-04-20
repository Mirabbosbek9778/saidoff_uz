import React from "react";
import { Footer, Navbar } from "@/components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import OurServicesChild from "@/src/container/OurServices/OurServicesChild";

const OurServices = (props) => {
  return (
    <div>
      <Navbar />
      <OurServicesChild />
      <Footer />
    </div>
  );
};

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
export default OurServices;
