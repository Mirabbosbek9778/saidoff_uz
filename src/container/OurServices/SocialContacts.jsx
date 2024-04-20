import Image from "next/image";
import Link from "next/link";
import React from "react";
import Telegram from "../../icons/telegram.png";
import Youtube from "../../icons/youtube.png";
import Instagram from "../../icons/instagram.png";
import Linkedin from "../../icons/linkedinIcon.png";

const SocialContacts = () => {
  return (
    <div className="flex justify-center items-center mb-20 mt-[180px]">
      <div className="border lg:w-[1024px] lg:h-[250px] rounded-[10px] bg-white shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] lg:flex lg:items-center w-[380px]  lg:gap-[33px]  absolute  justify-center items-center pl-3 pt-[35px] pb-[39px] pr-3 ">
        <h1 className="text-[#0A142F] font-[TTRunsTrial,sans-serif] uppercase font-bold text-[25px] flex items-center justify-center pl-16">
          Bizning ijtimoiy tarmoqlarimiz
        </h1>
        <div className="lg:flex flex-wrap lg:w-full lg:items-center lg:gap-11 w-[full] flex gap-7">
          <Link
            href="https://t.me/saidoffgrouppseo"
            className="flex gap-[3px] items-center text-[#0A142F] font-[Inter,sans-serif] text-base lg:text-[24px] italic font-normal leading-normal"
          >
            <Image src={Telegram} alt="Telegram" />
            @saidoff.group
          </Link>
          <Link
            href="https://www.youtube.com/@Saidoff_group"
            className="flex gap-1 items-center text-[#0A142F] font-[Inter,sans-serif] text-base lg:text-[24px] italic font-normal leading-normal"
          >
            <Image src={Youtube} alt="Youtube" />
            @saidoff.group
          </Link>
          <Link
            href="https://www.instagram.com/saidoffgroup?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="flex gap-1 items-center text-[#0A142F] font-[Inter,sans-serif] text-base lg:text-[24px] italic font-normal leading-normal"
          >
            <Image src={Instagram} alt="Instagram" />
            @saidoff.group
          </Link>
          <Link
            href=""
            className="flex gap-1 items-center text-[#0A142F] font-[Inter,sans-serif] text-base lg:text-[24px] italic font-normal leading-normal"
          >
            <Image src={Linkedin} alt="Linkedin" />
            @saidoff.group
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialContacts;
