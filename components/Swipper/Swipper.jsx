import "swiper/css";
import React from "react";
import SwiperCore from "swiper";

import camment from "../../public/img/HomeImg/camment.png"
import avatars from "../../public/img/HamkorLogo3.jpg"
import avatars2 from "../../public/img/HamkorLogo1.jpg"
import avatars3 from "../../public/img/HamkorLogo2.jpg"
import avatars4 from "../../public/img/HamkorLogo4.jpeg"


import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import Image from "next/image";
import {useTranslation} from "next-i18next";
SwiperCore.use();

const Slider = () => {
  const { t } = useTranslation()

  return (
      <div className='clent pb-20'>
        <div className="container mx-auto px-5 lg:px-0">
          <div>
            <h1 className="font-bold text-base xl:text-2xl text-white tracking-wider pt-14 uppercase text-center">{t("clients")}</h1>
          </div>
          <div>
          </div>
          <div className="flex justify-between xl:justify-around xl:mx-10 mt-10 xl:mt-20">
            <div className="flex items-center tooltip">
              <div className="flex items-center">
                <Image
                    width={60}
                    src={avatars}
                    alt="#"
                    className=" rounded-full object-cover"
                />
                <div className="ml-4 hidden xl:block">
                  <h1 className="text-white font-bold text-xs tracking-wider TT-Bold">{t("username2")}</h1>
                  <p className="text-[#999999] font-medium text-xs w-11/12 TT-Medium">{t("description2")}</p>
                </div>
              </div>
              <div
                  className="cammentBg flex justify-betweenu w-[180px] xl:w-[450px] -ml-4 xl:ml-0 mt-16  rounded-2xl tooltiptext">
                <div className="p-4 xl:px-5 xl:pt-4 xl:pb-10">
                  <h1 className="text-xs md:text-base Roboto-Regular">{t("reviews4")}</h1>
                </div>
              </div>
            </div>
            <div className="flex items-center mx-4 xl:mx-0 tooltip">
              <div className="flex items-center">
                <Image
                    width={60}
                    src={avatars2}
                    alt="#"
                    className=" rounded-full object-cover"
                />
                <div className="ml-4 hidden xl:block">
                  <h1 className="text-white font-bold text-xs tracking-wider TT-Bold">{t("username3")}</h1>
                  <p className="text-[#999999] font-medium text-xs w-11/12 TT-Medium">{t("description3")}</p>
                </div>
              </div>
              <div
                  className="cammentBg flex justify-between w-[240px] xl:w-[450px] -ml-16 xl:ml-0 rounded-2xl tooltiptext">
                <div className="p-4 xl:px-5 xl:py-4 ">
                  <h1 className="text-xs md:text-base Roboto-Regular">{t("reviews3")}</h1>
                </div>
              </div>
            </div>
            <div className="flex items-center tooltip">
              <div className="flex items-center">
                <Image
                    width={60}
                    src={avatars3}
                    alt="#"
                    className=" rounded-full object-cover"
                />
                <div className="ml-4 hidden xl:block">
                  <h1 className="text-white font-bold text-xs tracking-wider TT-Bold">{t("username")}</h1>
                  <p className="text-[#999999] font-medium text-xs w-4/5 TT-Medium">{t("description")}</p>
                </div>
              </div>
              <div
                  className="cammentBg flex justify-betweenu w-[240px] xl:w-[400px] -ml-14 xl:ml-0 rounded-2xl tooltiptext">
                <div className="p-4 xl:px-5 xl:py-4">
                  <h1 className="text-xs md:text-base Roboto-Regular pb-4"> {t("reviews")}</h1>
                </div>
              </div>
            </div>
            <div className="flex items-center tooltip ml-4">
              <div className="flex items-center">
                <Image
                    width={60}
                    src={avatars4}
                    alt="#"
                    className=" rounded-full object-cover"
                />
                <div className="ml-4 hidden xl:block">
                  <h1 className="text-white font-bold text-sm tracking-wider TT-Bold">{t("username4")}</h1>
                  <p className="text-[#999999] font-medium text-xs w-10/12 TT-Medium">{t("description4")}</p>
                </div>
              </div>
              <div
                  className="cammentBg flex justify-betweenu w-[110px] xl:w-[300px] -ml-8 xl:ml-0 rounded-2xl tooltiptext">
                <div className="p-4 xl:px-5 xl:py-4">
                  <h1 className="text-xs md:text-base Roboto-Regular">{t("reviews4")}</h1>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
  );
};

export default Slider;