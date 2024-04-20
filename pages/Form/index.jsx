import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../pages/Form/Saidoff logo_black+d.png";

import { useTranslation } from "next-i18next";
import { Back, Support } from "@/icons/icon";
import { Notification } from "@/container/Contact/Notification";
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

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="bg-black md:bg-white h-screen overflow-y-hidden">
      <div className="flex justify-between">
        <div className="bg-white xl:w-1/2 container ">
          <div className="flex justify-between items-center my-2 ml-[50px] mt-[30px]">
            <Link href="/">
              <Back />
            </Link>
            <Image width={161} height={161} src={Logo} alt="#" />
            <div />
          </div>
          <div>
            <h1 className="font-bold TT-Bold xl:text-[40px] mx-20 mt-10">
              Murojaat uchun
            </h1>
          </div>
          <Notification open={state} close={() => setState(false)} />
          <form
            action="#"
            method="post"
            className="space-y-4 my-4 mx-10 xl:mx-20"
          >
            <div className="flex flex-col gap-3">
              <label className="text-sm text-[#01162C]" htmlFor="name">
                Ism Familiyangiz *
              </label>
              <input
                onChange={(e) => setName(e.target.value)}
                className="py-3 px-3 border border-[#CBD5E0] rounded-xl justify-center w-full outline-none bg-[#F7FAFC]"
                id="name"
                type="text"
                name="name"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-sm text-[#01162C]" htmlFor="name">
                Telefon raqamingiz *
              </label>
              <input
                onChange={(e) => setPhone(e.target.value)}
                className="py-3 px-3 border border-[#CBD5E0] rounded-xl justify-center w-full outline-none bg-[#F7FAFC]"
                id="tel"
                type="tel"
                name="tel"
                placeholder={"+ 998"}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-sm text-[#01162C]" htmlFor="w3review">
                Xabarnoma *
              </label>
              <textarea
                onChange={(e) => setText(e.target.value)}
                className="p-4 w-full border border-[#EBEBEB] rounded-xl justify-center outline-none bg-[#F7FAFC] h-[196px]"
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
                placeholder="Xabarnoma yozish..."
              />
            </div>
          </form>
          <div className="flex flex-col justify-between">
            <div className="flex items-center mb-8 xl:mb-0 flex-col justify-between gap-28">
              <div className="flex items-center flex-col justify-between gap-[13px]">
                <h1 className="flex items-center gap-[10px] font-[Poppins,sans-serif] text-[#161616] font-normal text-[14px]">
                  <input
                  className="cursor-pointer"
                    type="checkbox"
                    name="answer"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />{" "}
                  Men shartlar va maxfiylik siyosati bilan tanishdim
                </h1>
                <button
                  onClick={sendMassageFunction}
                  className="w-[270px] xl:w-[386px] h-[54px] xl:h-[72px] rounded-lg border border-black bg-black text-white font-semibold text-base xl:text-2xl hover:bg-black/85 cursor-pointer"
                  type="submit"
                  disabled={!isChecked}
                >
                  Habar Jo`natish
                </button>
              </div>
              <div className="flex justify-center flex-col items-center gap-[18px]">
                <div className="w-[1100px] h-[1px] border items-center justify-center ml-[300px]"></div>
                <p className="font-[Inter,sans-serif] font-extralight text-[14px] text-[#000]">
                  ©2023-2024 Saidoff.group®
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-form w-1/2 container mx-auto xl:flex justify-center hidden xl:h-screen">
          <div>
            <div className="flex justify-center items-center mt-10">
              <Support />
              <h1 className="text-[#F7FAFC] TT-Medium text-xl">Support</h1>
            </div>
            <div className="flex flex-col items-center gap-[430px]">
              <div className="flex justify-center items-center mt-40 flex-col text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="542  "
                  height="137"
                  viewBox="0 0 542 137"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M514.639 115.243V68.4333H506.841V56.588H514.639C514.639 50.495 513.553 41.5563 518.337 37.1781C520.814 34.8917 524.805 33.7729 530.333 33.7729H542V45.6182C540.169 45.6182 532.53 45.1683 531.468 46.2628C530.468 47.406 530.87 54.7637 530.87 56.588H541.939V68.4333H530.87V115.243H514.627H514.639ZM310.046 49.5829C303.553 49.5829 299.306 45.3628 299.306 38.8929C299.306 32.4229 303.504 28.1907 310.046 28.1907C316.587 28.1907 320.785 32.3378 320.785 38.8929C320.785 45.448 316.574 49.5829 310.046 49.5829ZM105.427 25.5395L106.904 24.8949L106.55 26.2084C106.513 26.4273 106.452 26.707 105.952 26.9867C52.1583 56.6731 47.6186 70.7683 18.6838 121.835C12.3501 122.175 4.42992 132.063 0 136.331C33.682 82.0786 41.0774 53.7178 105.427 25.5395ZM104.439 11.0186C63.0806 16.1386 12.8748 50.7504 20.5021 97.5481C20.3435 79.8409 27.2385 66.9253 36.135 54.3746C35.4882 59.9689 36.0129 64.5295 36.7207 70.0995C38.1852 59.3608 39.3811 49.1329 47.5332 41.4103C47.2769 45.3628 48.1311 47.8073 49.2539 51.4071C49.7786 46.1169 50.8525 40.0239 54.0987 35.6944C61.8602 29.5285 70.5736 24.4571 79.7996 20.8086C77.8348 26.0624 77.7738 30.0514 77.847 35.512C79.6775 31.0122 83.0457 21.8181 86.3651 18.4858C89.953 17.3548 93.5897 16.4426 97.263 15.7738C100.399 15.19 103.56 14.7765 106.757 14.5454C103.121 18.6682 102.413 20.9911 100.826 25.953C103.353 23.0099 105.647 20.3465 108.673 17.8412C110.492 16.3332 112.31 15.0805 113.897 14.3265C118.424 14.3873 122.964 14.813 127.479 15.64C131.274 16.3454 135.058 17.3304 138.792 18.6317C131.787 20.9667 125.588 23.9463 119.998 27.3881C114.019 31.0852 108.759 35.2931 103.975 39.805C96.5796 40.0847 91.332 42.7846 84.9983 46.275C89.9408 45.0466 93.7239 43.7818 98.8982 44.8764C97.0433 46.8344 95.2494 48.8167 93.5164 50.8234C91.5273 53.1098 89.6235 55.4205 87.7563 57.7311C86.1943 59.6527 84.5468 61.7323 82.9115 63.7876C82.4966 64.3106 82.0816 64.8335 80.9833 66.1956C77.7982 66.3659 74.3933 66.9739 71.1472 67.8861C67.6447 68.8711 64.3131 70.1967 61.5795 71.7048L57.1862 74.1249L62.0555 72.9088C64.7403 72.2399 67.5959 71.6075 70.2929 71.3521C72.5628 71.1332 74.7351 71.1575 76.59 71.644C75.9432 72.4345 75.3452 73.1763 74.7473 73.9182C64.4352 86.627 55.917 97.1346 38.6001 100.066L33.7552 100.88L38.6367 101.355C60.6399 103.507 71.1838 89.2782 82.46 74.0641C85.2058 70.367 87.9882 66.6091 90.9781 63.0336C98.825 53.657 106.245 45.5817 115.068 38.4429C123.879 31.3041 134.106 25.1017 147.542 19.4709L148.762 18.9601L147.615 18.3034C135.082 11.1159 119.888 9.09706 104.426 11.0064L104.439 11.0186ZM128.529 7.3458C102.657 -3.29557 63.7762 -2.52939 35.8787 10.6416C14.2538 20.833 -7.52964 42.7238 22.5279 60.7472C24.1632 57.5122 26.128 54.2773 28.2148 51.3098C13.8023 39.805 29.8867 26.4394 40.6625 20.6141C65.2162 7.3458 106.916 3.34464 128.529 7.3458ZM90.9293 69.2238C87.4512 73.7236 84.1441 78.345 80.6782 82.8448C142.612 106.913 22.5645 133.291 2.42852 136.307C61.006 143.02 178.551 99.3359 90.9293 69.2238ZM191.682 116.654C175.122 116.654 159.892 109.637 157.024 91.9416L174.561 88.4148C175.183 98.7156 181.334 103.021 191.304 103.021C197.919 103.021 205.351 100.99 205.351 93.0848C205.351 83.7691 192.708 82.9056 185.739 81.5678C172.999 79.1477 160.832 74.4898 160.832 59.1905C160.832 42.3711 175.781 35.6093 190.914 35.6093C206.046 35.6093 219.629 41.836 222.802 57.4514L205.57 60.9783C204.472 52.6598 199.773 49.2424 191.512 49.2424C185.8 49.2424 178.429 51.2126 178.429 58.1568C178.429 64.6268 187.423 66.4875 192.439 67.4482C207.645 70.5008 223.339 73.298 223.339 92.0997C223.339 109.929 207.62 116.642 191.682 116.642V116.654ZM270.701 106.852C272.41 113.054 276.852 115.243 283.234 115.243H290.971V103.398C289.812 103.398 286.822 103.641 286.102 102.802C282.246 98.3264 292.777 65.9159 274.57 57.5852C261.255 51.4679 236.873 55.688 233.7 72.5439L250.272 75.3776C250.968 69.309 254.189 65.8672 260.462 65.8672C268.992 65.8672 269.798 72.3007 269.554 79.2693C260.816 79.2693 248.222 79.3058 239.875 83.9758C224.12 92.7808 229.746 116.642 252.017 116.642C259.815 116.642 266.674 113.881 270.689 106.84L270.701 106.852ZM253.848 90.1417C258.156 88.1472 264.965 88.6215 269.786 88.6215C269.786 96.9279 267.247 104.225 257.851 105.648C247.294 107.241 244.06 94.7266 253.848 90.1417ZM301.93 115.243V56.588H318.173V115.243H301.93ZM340.738 112.957C331.902 106.949 329.413 95.8333 329.413 85.8C329.413 75.7667 331.939 64.6024 340.799 58.7892C347.12 54.5935 355.467 53.9732 362.35 56.7947C365.462 58.0717 368.269 60.0418 370.453 62.6931C370.71 62.9971 371.967 64.8335 372.04 64.8821V33.7607H388.283V115.243H372.894V103.446C371.174 107.192 368.708 111.473 365.06 113.638C357.896 117.907 347.645 117.639 340.75 112.957H340.738ZM359.495 104.432C369.721 104.432 372.833 94.4834 372.833 86.0189C372.833 79.8287 371.564 75.1708 369.013 72.0575C366.487 68.9441 363.339 67.3874 359.604 67.3874C349.512 67.3874 346.559 77.8464 346.559 86.1284C346.559 94.4104 349.439 104.419 359.482 104.419L359.495 104.432ZM429.568 116.642C418.45 116.642 408.736 111.765 403.306 101.902C400.755 97.2805 399.486 91.9416 399.486 85.8973C399.486 68.1779 411.177 55.1651 429.568 55.1651C440.698 55.1651 450.424 59.9567 455.891 69.8441C458.442 74.4655 459.699 79.8165 459.699 85.8973C459.699 97.0252 455.183 107.095 445.262 112.762C440.722 115.34 435.474 116.642 429.568 116.642ZM429.629 104.76C439.746 104.76 442.711 94.2158 442.711 85.9095C442.711 77.6031 439.77 67.0591 429.58 67.0591C419.39 67.0591 416.498 77.5788 416.498 85.9095C416.498 94.2402 419.439 104.76 429.629 104.76ZM473.342 115.231V68.4333H465.544V56.588H473.342C473.342 50.5923 472.232 41.5684 477.04 37.1781C479.517 34.8917 483.508 33.7729 489.036 33.7729H500.703V45.6182H492.465C491.355 45.6182 490.586 45.8371 490.171 46.2628C489.195 47.3817 489.573 54.3746 489.573 56.588H500.642V68.4333H489.573V115.243H473.33L473.342 115.231Z"
                    fill="white"
                  />
                </svg>
                <p className="TextTitle">Proffesional kelajak kurslari</p>
              </div>
              <div className="flex gap-8 items-center text-[#FFFEFE] font-light text-[16px] ml-[150px] uppercase font-[TT Runs Trial,sans-serif]">
                <Link href="https://www.instagram.com/saidoffgroup?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                  Instagram
                </Link>
                <Link href="https://www.facebook.com/people/Saidoffgroup/61557297758694/">
                  Facebook
                </Link>
                <Link href="https://t.me/saidoffgrouppseo">Telegram</Link>
                <Link href="">Linkedin</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
