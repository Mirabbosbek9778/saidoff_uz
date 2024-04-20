import React from "react";
import { useTranslation } from "react-i18next";

const ServecesHeader = (props) => {
  const { t } = useTranslation();

  return (
    <div className="servecesHeader">
      <div className="container mx-auto flex justify-center">
        <div className="relative mt-52 xl:mt-32 flex flex-col">
          <h1 className="xl:tracking-widest font-extrabold xl:font-bold text-[72px] xl:text-[82px] text-white text-center">
            Xalqaro Bozor
          </h1>
          <h1 className="text-[#999999] font-bold text-5xl xl:text-[82px] text-center">
            Bosqichidamiz
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ServecesHeader;
