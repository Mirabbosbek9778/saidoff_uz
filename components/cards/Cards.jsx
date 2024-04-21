/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { CgArrowLongRightC } from "react-icons/cg";

const Cards = () => {
  return (
    <div className="flex justify-center items-center pt-[87px] pb-[150px]">
      <div className="flex flex-col gap-14">
        <h1 className="font-[TTRunsTrial,sans-serif] text-[33px] uppercase font-bold">
          Statistika va muvaffaqiyat
        </h1>
        <div className="flex flex-wrap w-[1300px]">
          <div className="w-[316px] h-[294px] bg-[#000] text-white font-[TTRunsTrial,sans-serif] text-[24px] uppercase font-bold flex justify-center items-center">
            Marketing xizmatlari
          </div>
          <div className="w-[316px] h-[294px] font-[Montserrat,sans-serif] uppercase text-[16px] font-normal text-[#000] flex justify-center items-center text-balance">
            <p className="w-[294px] flex justify-center">
              Biz xalqaro tajribaga ega internet-marketing agentligimiz. Bizning
              asosiy ixtisosligimiz biznesni yaratishdir. Raqamli marketing biz
              uchun onlayn reklama emas, balki ma'lumotlar bilan ishlashdir.
            </p>
          </div>
          <div className="w-[316px] h-[294px] bg-[#000] text-white font-[TTRunsTrial,sans-serif] flex justify-center items-center text-[24px] uppercase font-bold text-center">
            HR xizmatlari
          </div>
          <div className="w-[316px] h-[294px] flex justify-center items-center">
            <button
              className="font-[TTRunsTrial,sans-serif] border w-[236px] h-[64px] rounded-[2px] flex items-center justify-center bg-[#000] text-white font-medium uppercase text-[16px] gap-3 hover:bg-slate-950 shadow-inherit"
              type="submit"
            >
              Batafsil ma'lumot{" "}
              <CgArrowLongRightC className="w-[21px] h-[21px]" />
            </button>
          </div>
          <div className="w-[316px] h-[294px]"></div>
          <div className=" w-[316px] h-[294px] bg-[#000] text-white font-[TTRunsTrial,sans-serif flex justify-center items-center text-[24px] uppercase font-bold">
            Maqsadli reklama
          </div>
          <div className="w-[316px] h-[294px] font-[Montserrat,sans-serif] uppercase text-[16px] font-normal text-[#000] flex justify-center items-center text-balance">
            <p className="w-[294px] flex justify-center">
              Haqiqiy natijalarga faqat sa'y-harakatlar birlashtirilgan joyda
              erishiladi va muvaffaqiyat o'zaro hamkorlik, fikr almashish va
              ochiq muloqotga bog'liq
            </p>
          </div>
          <div className="w-[316px] h-[294px] bg-[#000] text-white font-[TTRunsTrial,sans-serif] flex justify-center items-center text-[24px] uppercase font-bold text-center">
            Brendni rivojlantirish
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
