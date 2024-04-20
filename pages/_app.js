import "../styles/globals.css";
import "aos/dist/aos.css";
import { appWithTranslation } from "next-i18next";
import React from "react";
function App({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default appWithTranslation(App);
