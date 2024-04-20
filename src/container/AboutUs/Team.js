import React from "react";
import Image from "next/image";
import icon from "../../../public/img/team/icon.png";
import teamOne from "../../../public/img/team/Dostonbek.png";
import teamTwo from "../../../public/img/team/Oybek.png";
import teamTheere from "../../../public/img/team/Asadulloh.png";
import teamFour from "../../../public/img/team/Nursulton.png";
import { useTranslation } from "next-i18next";

function Team(props) {
  const { t } = useTranslation();
  return (
    <div>
      <div className="container mx-auto px-5 lg:px-0 mt-20 overflow-x-hidden">
        <div className="xl:mx-20">
          <h1 className="font-bold text-4xl w-1/2 hidden xl:block uppercase">
            {t("Teams")}
          </h1>
        </div>
        <div className="xl:flex justify-evenly items-center mt-20">
          <div className="rounded-xl teamBox mx-6 xl:mx-0">
            <div className="bg-[#433C90]  h-[495px] w-[304px] flex justify-center items-end">
              <div>
                <div className="bg-[#433C90] rounded-xl">
                  <Image src={icon} alt="#" />
                </div>
                <h1 className="teamText TT-ExtraBold">{t("Team Title1")}</h1>
              </div>
            </div>
            <div className="bg-white h-[173px] w-[304px]">
              <h1 className="teamText2 TT-ExtraBold">{t("Team Title11")}</h1>
              <div className="flex justify-center items-center my-6">
                <div>
                  <h1 className="TT-Bold text-center">{t("Team Text1")}</h1>
                  <h1 className="Inter-Light text-center">
                    {t("Team Text11")}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl teamBox mx-6 xl:mx-0 mt-12 xl:mt-0">
            <div className="bg-[#433C90]  h-[495px] w-[304px] flex justify-center items-end">
              <div>
                <div className="bg-[#433C90] rounded-xl">
                  <Image src={icon} alt="#" />
                </div>
                <h1 className="teamText TT-ExtraBold">{t("Team Title2")}</h1>
              </div>
            </div>
            <div className="bg-white h-[173px] w-[304px]">
              <h1 className="teamText2 TT-ExtraBold">{t("Team Title22")}</h1>
              <div className="flex justify-center items-center my-6">
                <div>
                  <h1 className="TT-Bold text-center">{t("Team Text2")}</h1>
                  <h1 className="Inter-Light text-center">
                    {t("Team Text22")}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl teamBox mx-6 xl:mx-0 mt-12 xl:mt-0">
            <div className="bg-[#433C90]  h-[495px] w-[304px] flex justify-center items-end">
              <div>
                <div className="flex">
                  <div className="">
                    <Image src={teamOne} alt="#" />
                  </div>
                </div>
                <h1 className="teamText TT-ExtraBold">{t("Team Title3")}</h1>
              </div>
            </div>
            <div className="bg-white h-[173px] w-[304px]">
              <h1 className="teamText2 TT-ExtraBold">{t("Team Title33")}</h1>
              <div className="flex justify-center items-center my-6">
                <div>
                  <h1 className="TT-Bold text-center">{t("Team Text3")}</h1>
                  <h1 className="Inter-Light text-center">
                    {t("Team Text33")}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl teamBox mx-6 xl:mx-0 mt-12 xl:mt-0">
            <div className="bg-[#433C90]  h-[495px] w-[304px] flex justify-center items-end">
              <div>
                <div className="bg-[#433C90] rounded-xl">
                  <Image src={icon} alt="#" />
                </div>
                <h1 className="teamText TT-ExtraBold">{t("Team Title4")}</h1>
              </div>
            </div>
            <div className="bg-white h-[150px] w-[304px]">
              <h1 className="teamText2 TT-ExtraBold">{t("Team Title44")}</h1>
              <div className="flex justify-center items-center my-6">
                <div>
                  <h1 className="TT-Bold text-center">{t("Team Text4")}</h1>
                  <h1 className="Inter-Light text-center">
                    {t("Team Text44")}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:flex justify-evenly xl:mt-20">
          <div className="rounded-xl h-[695px] w-[304px] mx-6 xl:mx-0 mt-24 xl:mt-0 teamBox">
            <div className="bg-[#433C90] h-[540px] -mt-11 flex justify-center items-end">
              <div>
                <div className="bg-[#433C90] rounded-xl">
                  <Image src={icon} alt="#" />
                </div>
                <h1 className="teamText TT-ExtraBold">{t("Team Title5")}</h1>
              </div>
            </div>
            <div className="bg-white h-[173px] w-[304px]">
              <h1 className="teamText2 TT-ExtraBold">{t("Team Title55")}</h1>
              <div className="flex justify-center items-center my-6">
                <div>
                  <h1 className="TT-Bold text-center">{t("Team Text5")}</h1>
                  <h1 className="Inter-Light text-center">
                    {t("Team Text55")}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl teamBox  h-[695px] w-[304px] mx-6 xl:mx-0 mt-24 xl:mt-0">
            <div className="bg-[#433C90] h-[495px] flex justify-center items-end">
              <div>
                <div className="bg-[#433C90] rounded-xl">
                  <Image src={teamTwo} alt="#" />
                </div>
                <h1 className="teamText TT-ExtraBold">{t("Team Title7")}</h1>
              </div>
            </div>
            <div className="bg-white h-[173px] w-[304px]">
              <h1 className="teamText2 TT-ExtraBold">{t("Team Title77")}</h1>
              <div className="flex justify-center items-center my-6">
                <div>
                  <h1 className="TT-Bold text-center">{t("Team Text7")}</h1>
                  <h1 className="Inter-Light text-center">
                    {t("Team Text77")}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl teamBox mx-6 h-[695px] w-[304px] xl:mx-0 mt-24 xl:mt-0">
            <div className="bg-[#433C90]  h-[495px] flex justify-center items-end">
              <div>
                <div className="flex">
                  <div className="">
                    <Image src={teamTheere} alt="#" />
                  </div>
                </div>
                <h1 className="teamText TT-ExtraBold">{t("Team Title6")}</h1>
              </div>
            </div>
            <div className="bg-white h-[173px] w-[304px]">
              <h1 className="teamText2 TT-ExtraBold">{t("Team Title66")}</h1>
              <div className="flex justify-center items-center my-6">
                <div>
                  <h1 className="TT-Bold text-center">{t("Team Text6")}</h1>
                  <h1 className="Inter-Light text-center">
                    {t("Team Text66")}
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl teamBox mx-6 xl:mx-0 h-[695px] w-[304px] my-24 xl:mt-0">
            <div className="bg-[#433C90]  h-[495px] flex justify-center items-end">
              <div>
                <div className="flex">
                  <div className="">
                    <Image src={teamFour} alt="#" />
                  </div>
                </div>
                <h1 className="teamText TT-ExtraBold">{t("Team Title8")}</h1>
              </div>
            </div>
            <div className="bg-white h-[173px] w-[304px]">
              <h1 className="teamText2 TT-ExtraBold">{t("Team Title88")}</h1>
              <div className="flex justify-center items-center my-6">
                <div>
                  <h1 className="TT-Bold text-center">{t("Team Text8")}</h1>
                  <h1 className="Inter-Light text-center">
                    {t("Team Text88")}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
