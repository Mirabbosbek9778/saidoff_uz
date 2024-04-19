import React from "react";
import Image from "next/image";

import HeaderOne from "../../../public/img/AboutMe/HeaderOne.png";
import soroq from "../../../public/img/AboutMe/soroq.png";
import { useTranslation } from "next-i18next";
import { OKampaniyaIcon } from "@/src/icons/icon";
import About from '../../../src/img/About.png'

function AboutHeader(props) {
  const { t } = useTranslation();

  return (
    <div className="bg-black">
      <div className="container mx-auto flex justify-center items-center headers">
        <div>
          <div className="mt-[340px] xl:mt-80">
            <h1 className="font-bold text-[145px] text-white text-center uppercase -mt-12">
              {/* {t("мы")} */}
            </h1>
            <div className=" justify-center flex items-center">
              {/* <Image alt="#" src={About} /> */}
              2
            </div>
            <div className="flex justify-center items-center xl:hidden -mt-6 xl:-mt-10">
              <OKampaniyaIcon />
            </div>
          </div>
          <div className="flex flex-wrap justify-center -mt-10 xl:mt-20">
            <Image src={soroq} alt="#" />
            <h1 className="text-white w-full mx-10 xl:mx-72 text-center text-base xl:text-2xl font-black -mt-32">
              {t("Footer text")}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutHeader;
