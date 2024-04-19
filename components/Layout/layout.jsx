import { Footer, Navbar } from "..";
import { Fade } from "react-awesome-reveal";
import React from "react";

export default function Layout({ children }) {

  return (
    <>
      <Fade cascade>
          <div className="relative w-full min-h-screen flex flex-col overflow-hidden">
              <Navbar/>
              <main className="">{children}</main>
              <Footer/>
          </div>
      </Fade>
    </>
  );
}