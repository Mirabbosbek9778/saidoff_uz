import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";
import HeaderImg from "../../src/img/111.png";
import { useTranslation } from "next-i18next";
import { ArrowIcon } from "@/src/icons/icon";
import Link from "next/link";
import { TbArrowRightCircle } from "react-icons/tb";
// import Videoss from "../../src/img/videoss.mp4";

const inter = Inter({ subsets: ["latin"] });

export default function Header() {
  const { t } = useTranslation();

  return (
    <>
      <div
        className={`${inter.className} hero lg:pb-20 lg:bg-black text-white -mt-24 lg:-mt-28 `}
      >
        <div className="relative px-10 lg:px-20 2xl:container 2xl:mx-auto flex flex-col gap-20 lg:mb-[50px]">
          <div className="flex justify-between">
            <div className="container mx-auto flex flex-col gap-14">
              <h2
                className="w-full lg:mt-52 text-4xl lg:text-[41px] uppercase font-bold mt-44
                          text-center xl:text-left TT-Bold"
              >
                {t("мы")}
              </h2>
              <h2 className="text-2xl lg:text-[21px] uppercase font-medium TT-Bold lg:-mt-17 text-center xl:text-left xl:w-[55%]">
                {t("Создаем решения для вашего бизнеса")}
              </h2>
            </div>
            <div className="hidden xl:block absolute top-0 right-0 lg:right-[-200px]">
              <Image className="object-contain" src={HeaderImg} alt="#" />
            </div>
          </div>
          <div className="flex items-center lg:items-start justify-center xl:justify-start ">
            <Link
              target="_blank"
              href="/Form"
              className="my-14 flex gap-2 items-center justify-center font-medium text-xs lg:text-base text-black
                       text-center rounded-full bg-white uppercase h-[73px] w-[400px] TT-Medium hover:bg-black hover:text-white  hover:shadow-white shadow-[5px_5px_50px_1px_rgba(0,0,0,0.3)]"
            >
              {t("Contact Us")}
              <TbArrowRightCircle />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
