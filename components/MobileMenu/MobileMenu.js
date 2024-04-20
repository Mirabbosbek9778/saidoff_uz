import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/Logo_White.png";
import { useTranslation } from "next-i18next";
import { ArrowIcon, XIcon, ZvanokIcon } from "@/icons/icon";

function MobileMenu({ open, close }) {
  const { t } = useTranslation();

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto justify-between xl:ml-40 2xl:ml-80 overflow-x-hidden"
        onClose={close}
      >
        <div>
          <div className="flex justify-between container mx-auto px-5 pt-[24px] items-center">
            <div>
              <Link to="header" href="#">
                <Image width={200} src={Logo} alt="#" />
              </Link>
            </div>
            <div className=" mr-3" onClick={close}>
              <XIcon />
            </div>
          </div>
          <div>
            <div className="pt-20 w-3/4 ml-24 bg-black flex items-center justify-center">
              <div className="px-4">
                <div className="flex text-white">
                  <ZvanokIcon />
                  <Link
                    className="ml-2.5 font-extrabold TT-ExtraBold text-sm"
                    href="/"
                  >
                    {t("ГЛАВНАЯ")}
                  </Link>
                </div>
                <div className="flex text-white mt-7">
                  <ZvanokIcon />
                  <Link
                    className="ml-2.5 font-extrabold TT-ExtraBold text-sm"
                    href="/AboutUs"
                  >
                    {t("О КОМПАНИИ")}
                  </Link>
                </div>
                <div className="flex text-white mt-7">
                  <ZvanokIcon />
                  <Link
                    className="ml-2.5 font-extrabold TT-ExtraBold text-sm"
                    href="/OurServices"
                  >
                    {t("НАШИ УСЛУГИ И КЕЙСЫ")}
                  </Link>
                </div>
                <div className="flex text-white mt-7">
                  <ZvanokIcon />
                  <Link
                    className="ml-2.5 font-extrabold TT-ExtraBold text-sm"
                    href="https://saidoff-akademiya.vercel.app/"
                  >
                    {t("Akademiyamiz haqida")}
                  </Link>
                </div>
                <hr className="hr mt-9" />
                <div className="mt-12">
                  <Link
                    href="/Form"
                    className="flex items-center justify-center font-medium text-xs text-black
                                        text-center rounded-full bg-white uppercase h-[39px] w-[227px]"
                  >
                    {t("Contact Us")}
                    <ArrowIcon />
                  </Link>
                </div>
                <div className="mt-20 mb-10">
                  <h1 className="font-extrabold text-base tracking-wide text-white text-center">
                    {t("Ваш бизнес вместе")}
                  </h1>
                  <h1 className="font-extrabold text-3xl text-white text-center">
                    {t("We will build")}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default MobileMenu;
