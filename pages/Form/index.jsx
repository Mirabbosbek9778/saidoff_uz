import React, { useState } from "react";
import { Back, Support } from "@/src/icons/icon";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../pages/Form/Saidoff logo_black+d.png";
import logoWhite from "../../pages/Form/logoWhite.png";

import { useTranslation } from "next-i18next";
import { Notification } from "@/src/container/Contact/Notification";
function Index() {
  const { t } = useTranslation();
  const [state, setState] = useState(false);
  const [name, setName] = useState(" ");
  const [phone, setPhone] = useState(" ");
  const [text, setText] = useState(" ");

  const token = "7152866061:AAF4jPx9x7FGfrEhxV-DXbJ_xr9MzZAukoY";
  const chatId = "-4171709761";
  async function sendMassageFunction() {
    let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=%0A-Ism: ${name}, %0A- Telefon: ${phone},  %0A- Xabar: ${text}, %0A`;
    const res = await fetch(url);
    console.log(res);
    setName("");
    setPhone("");
    setText("");
    setState(true);
  }
  return (
    <div className="bg-black md:bg-white h-screen overflow-y-hidden">
      <div className="flex justify-between">
        <div className="bg-white xl:w-1/2 container mx-auto">
          <div className="flex justify-between items-center my-2 mx-10">
            <Link href="/">
              <Back />
            </Link>
            <div>
              <Image width={125} src={Logo} alt="#" />
            </div>
            <div />
          </div>
          <div>
            <h1 className="font-bold TT-Bold xl:text-4xl mx-20 mt-10">
              Murojaat uchun
            </h1>
          </div>
          <Notification open={state} close={() => setState(false)} />
          <form
            action="#"
            method="post"
            className="space-y-4 my-4 mx-10 xl:mx-20"
          >
            <label className="text-sm text-[#01162C]" htmlFor="name">
              {t("Имя")}
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              className=" py-3 px-6 border border-[#EBEBEB] rounded-md justify-center w-full"
              id="name"
              type="text"
              name="name"
              placeholder={t("Ваше имя")}
            />{" "}
            <br /> <br />
            <label className="text-sm text-[#01162C]" htmlFor="name">
              {t("Номер телефона")}
            </label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              className=" py-3 px-6 border border-[#EBEBEB] rounded-md justify-center w-full"
              id="tel"
              type="number"
              name="tel"
              placeholder={t("Номер телефона")}
            />{" "}
            <br /> <br />
            <label className="text-sm text-[#01162C]" htmlFor="w3review">
              {t("Сообщение")}
            </label>{" "}
            <br />
            <textarea
              onChange={(e) => setText(e.target.value)}
              className="p-4 w-full border border-[#EBEBEB] rounded-md justify-center"
              id="w3review"
              name="w3review"
              rows="4"
              cols="50"
            />{" "}
            <br />
          </form>
          <div className="items-center flex justify-center mb-8 xl:mb-0">
            <button
              onClick={sendMassageFunction}
              className="w-[270px] xl:w-[386px] h-[54px] xl:h-[72px] rounded-lg border border-black  bg-black text-white font-semibold text-base xl:text-2xl"
              type="submit"
            >
              {t("Отправить запрос")}
            </button>
          </div>
        </div>
        <div className="bg-form w-1/2 container mx-auto xl:flex justify-center hidden ">
          <div>
            <div className="flex justify-center items-center mt-10">
              <Support />
              <h1 className="text-[#F7FAFC] TT-Medium text-xl">Support</h1>
            </div>
            <div className="flex justify-center items-center mt-40">
              <Image width={442} src={logoWhite} alt="#" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
