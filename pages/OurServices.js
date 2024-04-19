import React from 'react';
import {Footer, Navbar} from "@/components";
import OurServicesChild from "@/src/container/OurServices/OurServicesChild";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

function OurServices(props) {
    return (
        <div>
            <Navbar />
            <OurServicesChild />
            <Footer />
        </div>
    );
}

export default OurServices;

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