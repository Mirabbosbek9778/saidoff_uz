import React from "react";
import { useTranslation } from "next-i18next";

function TeamImg(props) {
  const { t } = useTranslation();
  return (
    <div className="xl:mt-20 Banner">
      <div className="container mx-auto px-5 lg:px-20">
        <h1 className="text-[#D9D9D9] font-bold text-sm xl:text-4xl pt-16 xl:pt-[162px] w-1/2">
          {t("КАК БУДЕТ ВЫГЛЯДЕТЬ")}
        </h1>
      </div>
    </div>
  );
}

export default TeamImg;

{
  /* <Link target="_blank" href="/Form">
  <button
    className="w-[427px] h-[73px] font-medium text-lg border border-white rounded-full mt-[55px]
         text-white xl:flex justify-center items-center uppercase hidden"
  >
    {t("header1")}
    <ArrowIconWhiteTwo />
  </button>
</Link> */
}
