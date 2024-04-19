import React, { useCallback, useState } from "react";
import Logo from "@/public/Saidoff logo_white+d.png";
import Image from "next/image";
import Link from "next/link";

import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { Notification } from "@/src/container/Contact/Notification";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import { HamburgerIcon, XIcon } from "@/src/icons/icon";
import equals from "equals";

export default function Navbar() {
  const { pathname } = useRouter();
  const [mobile, setMobile] = useState(false);
  const { t } = useTranslation();
  const router = useRouter();
  const Locale = (event) => {
    const value = event.target.value;

    router.push(router.route, router.asPath, {
      locale: value,
    });
  };
  const [state, setState] = useState(false);
  const [navigation, setNavigation] = useState(false);
  const [navigations, setNavigations] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");

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

  const handleToggle = useCallback(() => {
    setNavigation((prev) => !prev);
  }, []);
  const handleToggles = useCallback(() => {
    setNavigations((prev) => !prev);
  }, []);

  function Hamburger() {
    if (equals(pathname, "/")) {
      return <HamburgerIcon />;
    }
    return <HamburgerIcon />;
  }
  return (
    <>
      <div className="bg-black ">
        <div className="w-full relative h-[100px] flex flex-col container mx-auto  justify-center text-[#FFFFFF]">
          <Notification open={state} close={() => setState(false)} />

          <div className="absolute z-10 container mx-auto  flex justify-between items-center">
            <div className="px-5  xl:px-20">
              <Link href="/">
                <Image width={200} src={Logo} alt="" />
              </Link>
            </div>
            <div className="uppercase w-9/12 justify-evenly hidden md:flex">
              <Link href="/">{t("ГЛАВНАЯ")}</Link>
              <Link href="/AboutUs">{t("О КОМПАНИИ")}</Link>
              <Link href="/OurServices">{t("НАШИ УСЛУГИ И КЕЙСЫ")}</Link>
              <Link href="https://saidoff-akademiya.vercel.app/">
                {t("Akademiyamiz haqida")}
              </Link>
            </div>
            <div className="flex justify-between w-32 items-center">
              <div className="flex  justify-between">
                <div>
                  <select
                    className=" text-whiteБИЗ СИЗНИНГ outline-none bg-inherit border-b border-b-[FFFFFF] cursor-pointer"
                    onChange={Locale}
                    value={router.locale}
                  >
                    {t("trans")}
                    <option
                      className="block text-md text-white p-3.5 underline bg-black"
                      value="en"
                    >
                      EN
                    </option>
                    <option
                      className="  block text-md text-white underline bg-black"
                      value="uz"
                    >
                      UZ
                    </option>
                    <option
                      className="block text-md text-white underline bg-black"
                      value="ru"
                    >
                      RU
                    </option>
                  </select>
                </div>
              </div>
              <button
                className="w-10 h-10 z-40 inline md:hidden"
                onClick={() => setMobile(!mobile)}
              >
                {state && (
                  <div className="z-50 fixed">
                    <XIcon />
                  </div>
                )}
                {!mobile && Hamburger()}
              </button>
              <div className="inline lg:hidden">
                {mobile && (
                  <MobileMenu open={mobile} close={() => setMobile(false)} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
