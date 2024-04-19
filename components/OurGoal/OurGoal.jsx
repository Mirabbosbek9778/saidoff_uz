import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import HandOur from "../../src/img/handOur.png";

import { ArrowIconWhite, ArrowIconWhiteTwo } from "@/src/icons/icon";
import Link from "next/link";
import { TbArrowRightCircle } from "react-icons/tb";

function OurGoal(props) {
  const { t } = useTranslation();

  return (
    <div>
      <div className="container  flex flex-col-reverse lg:flex-row justify-between lg:mb-[72px] mb-[39px]">
        <div className="lg:w-1/2 -mt-14 xl:mt-0">
          <div className="grid grid-cols-1 relative">
            <Image height={600} src={HandOur} alt="#" />
          </div>
        </div>
        <div className="w-full lg:w-[48%]">
          <h1 className="font-bold text-4xl xl:text-5xl tracking-wide mt-16 text-center xl:text-left uppercase TT-Bold flex items-center">
            {t("Наш цель")}
          </h1>
          <p className="text-xs xl:text-base font-light uppercase mt-6 Inter-Light">
            {t("company text")}
          </p>
          <Link href="/AboutUs">
            <button
              className="hidden mt-7 xl:mt-12 py-5 px-14 text-black uppercase text-base
                             font-medium lg:flex items-center gap-2 TT-Medium border-2 border-black hover:bg-black hover:text-white hover:border-none"
            >
              {t("Подробнее")}
              <TbArrowRightCircle className="w-5 h-5" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OurGoal;
