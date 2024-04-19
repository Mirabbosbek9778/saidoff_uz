import React from 'react';
import {Footer, Navbar} from "@/components";
import AboutUsChild from "@/src/container/AboutUs/AboutUsChild";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

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
    const {locale} = context

    return {
        props: {
            // pass the translation props to the page component
            ...(await serverSideTranslations(locale)),
        },
    }
}
export default AboutUs;