import React from "react";
import { useTranslation } from "next-i18next";

function Results(props) {
  const { t } = useTranslation();

  return (
    <div className="bg-black text-white pt-48">
      <div className="container mx-auto px-5 lg:px-20 pb-[70px]">
        <div className="lg:flex justify-center mt-10">
          <h1 className="text-3xl xl:text-5xl font-bold text-center Montserrat-Bold">
            {t("G’OYLARDAN NATIJAGACHA")}
          </h1>
        </div>
        <div className="mt-[70px] flex flex-wrap justify-between">
          <div className="resultBox  w-[50%] xl:w-[32%] xl:p-4">
            <h1 className="text-4xl lg:text-6xl font-bold Montserrat-Bold text-center xl:text-left ">
              {t("лет")}
            </h1>
            <p className="mt-3 text-sm xl:text-lg Montserrat-Regular text-center xl:text-left">
              {t("лет2")}
            </p>
          </div>
          <div className="resultBox  xl:mt-0 w-[50%] xl:w-[32%] xl:p-5">
            <h1 className="mt-1 text-2xl lg:text-5xl font-bold Montserrat-Bold text-center xl:text-left">
              {t("10 точек")}
            </h1>
            <p className="mt-4 text-sm xl:text-lg Montserrat-Regular text-center xl:text-left">
              {t("торговых точек по всей стране.")}
            </p>
          </div>
          <div className="resultBox  mt-5 xl:mt-0 w-[50%] xl:w-[32%] xl:p-5">
            <h1 className="text-3xl lg:text-5xl font-bold Montserrat-Bold text-center xl:text-left">
              {t("3 точек")}
            </h1>
            <p className="mt-3 text-sm xl:text-lg Montserrat-Regular text-center xl:text-left">
              {t("торговых точек по всей странеs.")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
