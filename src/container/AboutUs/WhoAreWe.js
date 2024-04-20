import React from "react";
import { useTranslation } from "next-i18next";
function WhoAreWe(props) {
  const { t } = useTranslation();

  return (
    <div className="AboutMe">
      <div className="container mx-auto flex justify-center items-center">
        <div className="xl:flex flex-wrap justify-center ">
          <h1 className="font-extrabold xl:font-bold text-base px-6 xl:px-0 xl:text-3xl xl:w-2/5 uppercase text-center mt-20 xl:mt-40">
            {t("AboutMeText")}
          </h1>
          <p className="font-medium text-center text-sm xl:text-2xl xl:w-[61%] mt-48 xl:my-[83px] xl:mt-[83px] px-6 xl:px-0">
            {t("AboutMeText2")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default WhoAreWe;

{
  /*<div className="container mx-auto px-5 md:px-10 mt-20">*/
}
{
  /*    <Link to="navbar" href='#'*/
}
{
  /*          className="px-3 py-4 border-2 border-black opacity-60 rounded-full bg-white fixed bottom-20 right-1 lg:right-12 cursor-pointer sm:bottom-9 w-12 h-12">*/
}
{
  /*        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">*/
}
{
  /*            <path d="M1 9L9 1L17 9" stroke="#65696B" strokeWidth="2" strokeLinejoin="round"></path>*/
}
{
  /*        </svg>*/
}
{
  /*    </Link>*/
}
{
  /*    <div className="w-max">*/
}
{
  /*        <h1 className="text-xs font-medium py-2.5 px-4 bg-[#F7F7F7] rounded-3xl Montserrat-Medium">{t("Кто мы?")}</h1>*/
}
{
  /*    </div>*/
}
{
  /*    <div className="lg:flex justify-between mt-6">*/
}
{
  /*        <h1 className="text-xl xl:text-3xl font-bold Montserrat-Bold">*/
}
{
  /*            {t("AboutMeText")}*/
}
{
  /*        </h1>*/
}
{
  /*        <p className="text-base mt-2 lg:mt-0 lg:ml-40 Montserrat-Regular">*/
}
{
  /*            {t("AboutMeText2")}*/
}
{
  /*        </p>*/
}
{
  /*    </div>*/
}
{
  /*    <div className="mt-8">*/
}
{
  /*        <Image width={1440} src={AboutMEImageOne} alt="#"/>*/
}
{
  /*    </div>*/
}
{
  /*    /!*<div className="w-max mt-10 xl:mt-20">*!/*/
}
{
  /*    /!*    <h1 className="text-xs font-medium py-2.5 px-6 bg-[#F7F7F7] rounded-3xl">Наша культура</h1>*!/*/
}
{
  /*    /!*</div>*!/*/
}
{
  /*    /!*<div className="mt-8 lg:flex justify-between">*!/*/
}
{
  /*    /!*    <div className="py-6 px-[22px] gap-2.5 bg-[#F7F7F7;] rounded-3xl lg:w-[49%]">*!/*/
}
{
  /*    /!*        <h1 className="text-xl lg:text-2xl font-bold">*!/*/
}
{
  /*    /!*            Гибкость и понимание*!/*/
}
{
  /*    /!*        </h1>*!/*/
}
{
  /*    /!*        <p className="text-base mt-2.5">*!/*/
}
{
  /*    /!*            We understand that life is full of twists and turns,*!/*/
}
{
  /*    /!*            and sometimes plans need to be adjusted.*!/*/
}
{
  /*    /!*            Thats why we take a dynamic and accommodating*!/*/
}
{
  /*    /!*            approach to provide you with tailored solutions.*!/*/
}
{
  /*    /!*        </p>*!/*/
}
{
  /*    /!*    </div>*!/*/
}
{
  /*    /!*    <div className="py-6 px-[22px] gap-2.5 bg-[#F7F7F7;] rounded-3xl lg:w-[49%] mt-8 lg:mt-0">*!/*/
}
{
  /*    /!*        <h1 className="text-xl lg:text-2xl font-bold">*!/*/
}
{
  /*    /!*            Рост и развитие*!/*/
}
{
  /*    /!*        </h1>*!/*/
}
{
  /*    /!*        <p className="text-base mt-2.5">*!/*/
}
{
  /*    /!*            We understand that life is full of twists and turns,*!/*/
}
{
  /*    /!*            and sometimes plans need to be adjusted.*!/*/
}
{
  /*    /!*            Thats why we take a dynamic and accommodating*!/*/
}
{
  /*    /!*            approach to provide you with tailored solutions.*!/*/
}
{
  /*    /!*        </p>*!/*/
}
{
  /*    /!*    </div>*!/*/
}
{
  /*    /!*</div>*!/*/
}
{
  /*    /!*<div className="mt-8 lg:flex justify-between">*!/*/
}
{
  /*    /!*    <div className="py-6 px-[22px] gap-2.5 bg-[#F7F7F7;] rounded-3xl lg:w-[49%]">*!/*/
}
{
  /*    /!*        <h1 className="text-xl lg:text-2xl font-bold">*!/*/
}
{
  /*    /!*            Открытый и прозрачный*!/*/
}
{
  /*    /!*        </h1>*!/*/
}
{
  /*    /!*        <p className="text-base mt-2.5">*!/*/
}
{
  /*    /!*            We understand that transparency is not just a buzzword;*!/*/
}
{
  /*    /!*            it a guiding principle that influences everything we do.*!/*/
}
{
  /*    /!*            From our communication with clients, partners, and team*!/*/
}
{
  /*    /!*            members to our business practices and decision-making,*!/*/
}
{
  /*    /!*            we strive to be forthright and candid.*!/*/
}
{
  /*    /!*        </p>*!/*/
}
{
  /*    /!*    </div>*!/*/
}
{
  /*    /!*    <div className="py-6 px-[22px] gap-2.5 bg-[#F7F7F7;] rounded-3xl lg:w-[49%] mt-8 lg:mt-0">*!/*/
}
{
  /*    /!*        <h1 className="text-xl lg:text-2xl font-bold">*!/*/
}
{
  /*    /!*            Открытый и прозрачный*!/*/
}
{
  /*    /!*        </h1>*!/*/
}
{
  /*    /!*        <p className="text-base mt-2.5">*!/*/
}
{
  /*    /!*            We understand that transparency is not just a buzzword;*!/*/
}
{
  /*    /!*            it a guiding principle that influences everything we do.*!/*/
}
{
  /*    /!*            From our communication with clients, partners, and team*!/*/
}
{
  /*    /!*            members to our business practices and decision-making,*!/*/
}
{
  /*    /!*            we strive to be forthright and candid.*!/*/
}
{
  /*    /!*        </p>*!/*/
}
{
  /*    /!*    </div>*!/*/
}
{
  /*    /!*</div>*!/*/
}
{
  /*</div>*/
}
