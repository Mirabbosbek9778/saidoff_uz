import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { BsArrowRightCircle } from "react-icons/bs";

const Accordion = ({ title, answer, i, text }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <Fade cascade>
      <div className="py-4 hover:bg-slate-50 transition-all border-slate-100 border-t border-b mt-4">
        <button
          onClick={() => setAccordionOpen(!accordionOpen)}
          className="group container px-5 lg:px-10 py-6 mx-auto flex justify-between transition-all"
        >
          <span className="text-[#999999] font-medium text-xl lg:text-2xl">
            0{i}
          </span>
          <span className="text-black font-bold text-xl lg:text-3xl uppercase Montserrat-Bold">
            {title}
          </span>
          <BsArrowRightCircle
            className={`lg:w-12 lg:h-12 hover: transform origin-center rotate-40 transition duration-200 ease-out border-none rounded-full mt-1 w-6 h-6 ${
              accordionOpen &&
              "!rotate-90 bg-black text-white rounded-full border-none"
            }`}
          />
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
            accordionOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className=" overflow-hidden container mx-auto px-5 lg:px-10">
            <div className="w-full py-10">
              <span className="text-black font-bold text-xl lg:text-2xl Montserrat-Medium">
                {text}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Accordion;
