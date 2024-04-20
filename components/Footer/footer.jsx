import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";
import Logo from "@/public/Saidoff logo_white+d.png";

import {
  FacebookIcons,
  Icon,
  IconThere,
  IconTwo,
  InstagiramIcon,
  LinkedinIcon,
  TelegiramIcon,
} from "@/src/icons/icon";
import Linkedin from "../../src/icons/linkedin.png";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <div className="bg-black py-20 md:py-12">
      <div className="container FooterCenter mx-auto flex border-b-2 md:border-b-0">
        <div className="hidden md:flex w-full  justify-evenly text-white">
          <div className="">
            <h1 className="font-bold text-2xl TT-Bold">{t("Resources")}</h1>
            <ul className=" text-base flex flex-col mt-6 Roboto-Regular">
              <Link href="#" alt="#">
                {t("Academy")}
              </Link>
              <Link href="#" alt="#" className="mt-4">
                {t("Blog")}
              </Link>
              <Link href="#" alt="#" className="mt-4">
                {t("Themes")}
              </Link>
              <Link href="#" alt="#" className="mt-4">
                {t("Hosting")}
              </Link>
            </ul>
          </div>
          <div className="">
            <h1 className="font-bold text-2xl TT-Bold">{t("Company")}</h1>
            <ul className=" text-base flex flex-col  mt-6 Roboto-Regular">
              <Link href="#" alt="#">
                {t("Biznes_Noldan")}
              </Link>
              <Link href="#" alt="#" className="mt-4">
                {t("Careers")}
              </Link>
              <Link href="#" alt="#" className="mt-4">
                {t("FAQs")}
              </Link>
              <Link href="#" alt="#" className="mt-4">
                {t("Teamss")}
              </Link>
              <Link href="#" alt="#" className="mt-4">
                {t("Contact Us")}
              </Link>
            </ul>
          </div>
        </div>
        <div className="hidden md:block w-1/4 border-l pl-8 border-white">
          <div className="flex m-4">
            <Image width={160} src={Logo} alt="#" />
          </div>
          <div>
            <div className="text-white my-5 font-bold text-base TT-Bold">
              <Link href="">{t("Contact Us")}</Link>
            </div>
            <div className="flex text-sm Roboto-Regular">
              <Icon />
              <h1 className="text-white ml-3">{t("Address")}</h1>
            </div>
            <div className="flex mt-3 Roboto-Regular">
              <IconTwo />
              <h1 className="text-white ml-3">saidoffgroup@gmail.com</h1>
            </div>
            <div className="flex mt-4">
              <IconThere />
              <div>
                <h1 className="text-white ml-3 font-semibold font-[Roboto,sans-serif]">
                  +9989 95 181 03 30
                </h1>
                <h1 className="text-white ml-3 font-semibold font-[Roboto,sans-serif]">
                  +998 95 185 03 30
                </h1>
              </div>
            </div>
            <div className="flex mt-10 justify-between w-1/3 items-center gap-4">
              <Link
                target="_blank"
                href="https://www.facebook.com/profile.php?id=61557297758694"
              >
                <FacebookIcons />
              </Link>
              <Link target="_blank" href="https://t.me/saidoffgrouppseo">
                <TelegiramIcon />
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/saidoffgroup/"
              >
                <InstagiramIcon />
              </Link>
            </div>
          </div>
        </div>
        <div className="md:hidden flex justify-between pt-10 pl-5">
          <div>
            <div className="flex">
              <Image width={180} src={Logo} alt="#" />
            </div>
            <div className="mt-10">
              <div className="flex items-center">
                <Link
                  target="_blank"
                  href="https://www.instagram.com/saidoffgroup/"
                >
                  <InstagiramIcon />
                </Link>
                <h1 className="text-xs text-white ml-1">saidoff.group</h1>
              </div>
              <div className="flex items-center mt-4">
                <Link target="_blank" href="https://t.me/saidoffgrouppseo">
                  <TelegiramIcon />
                </Link>
                <h1 className="text-xs text-white ml-1">@saidoff.groupp</h1>
              </div>
              <div className="flex items-center mt-4">
                <Link
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61557297758694"
                >
                  <FacebookIcons />
                </Link>
                <h1 className="text-xs text-white ml-1">@saidoff.groupp</h1>
              </div>
            </div>
          </div>
          <div className="block justify-end ml-4">
            <h1 className="text-white font-medium text-sm mt-12">
              {t("Address")}
            </h1>
            <div className="flex items-center mt-8">
              <IconTwo />
              <h1 className="font-medium text-sm text-white ml-2">
                saidoffgroup@gmail.com
              </h1>
            </div>
            <div className="flex items-center mt-4">
              <IconThere />
              <div>
                <h1 className="text-white text-base font-semibold">
                  +9989 95 181 03 30
                </h1>
                <h1 className="text-white text-base ml-2 font-semibold">
                  +998 95 185 03 30
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
