import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { Accordion } from "..";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export default function Assistance() {
  const { t } = useTranslation();

  return (
    <div className="px-5 lg:px-0 w-full h-auto my-4 bg-white py-4 lg:mt-[70px]">
      <div className="container mx-auto px-5 lg:px-10 md:flex md:justify-between md:items-center">
        <div className="w-full md:w-[550px] h-auto my-4 md:my-0 md:mr-4">
          <h1 title={t("OUR SERVICES")} />
          <p className="font-normal text-base text-gray-400 text-balance Montserrat-Medium">
            {t("OUR SERVICES TEXT")}
          </p>
        </div>
        <button
          type="button"
          className="Montserrat-Regular py-2 px-4 flex items-center justify-center gap-2 bg-white text-black border border-black rounded-full hover:bg-black hover:text-white transition-all"
        >
          {t("Все услуги")}
          <span>
            <GoArrowUpRight />
          </span>
        </button>
      </div>
      <Link to="navbar" href="#">
        <div className="px-3 py-4 border-2 border-black opacity-60 rounded-full bg-secondary z-99 fixed bottom-20 right-1 lg:right-12 cursor-pointer sm:bottom-9 w-12 h-12">
          <svg
            width="18"
            height="10"
            viewBox="0 0 18 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 9L9 1L17 9"
              stroke="#65696B"
              strokeWidth="2"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </Link>

      <Accordion
        title="Biznesni noldan quramiz"
        text={t("Accordion Text1")}
        answer=""
        i={1}
      />
      <Accordion
        title={t("Accordion Title2")}
        text={t("Accordion Text2")}
        answer=""
        i={2}
      />
      <Accordion
        title={t("Accordion Title3")}
        text={t("Accordion Text3")}
        answer=""
        i={3}
      />
      <Accordion
        title={t("Accordion Title4")}
        text={t("Accordion Text4")}
        answer=""
        i={4}
      />
      <Accordion
        title={t("Accordion Title5")}
        text={t("Accordion Text5")}
        answer=""
        i={5}
      />
      <Accordion
        title={t("Accordion Title6")}
        text={t("Accordion Text6")}
        answer=""
        i={7}
      />
      <Accordion
        title={t("Accordion Title7")}
        text={t("Accordion Text7")}
        answer=""
        i={8}
      />
      <Accordion
        title={t("Accordion Title8")}
        text={t("Accordion Text8")}
        answer=""
        i={9}
      />
    </div>
  );
}
