import React, {useState} from 'react';
import {arrowUpIcon, FacebookTwoIcon, InstagramTwoIcon} from "@/src/icons/icon";
import {useTranslation} from "next-i18next";
import {Notification} from "@/src/container/Contact/Notification";
import Link from "next/link";

function CantactForm(props) {
    const { t } = useTranslation()
    const [state, setState] = useState(false)
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
        setState(true)

    }
    return (
        <div>
            <div className="container mx-auto px-5 lg:px-10 mt-[70px] lg:flex justify-between">
                <Link to="navbar" href='#'
                      className="px-3 py-4 border-2 border-black opacity-60 rounded-full bg-white fixed bottom-20 right-1 lg:right-12 cursor-pointer sm:bottom-9 w-12 h-12">
                    <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 9L9 1L17 9" stroke="#65696B" strokeWidth="2" strokeLinejoin="round"></path>
                    </svg>
                </Link>
                <div className="mt-4">
                    <h1 className="text-2xl lg:text-4xl font-bold uppercase">
                        {t("Давайте работать вместе.")}
                    </h1>
                    <p className="text-base font-medium text-[#999] mt-2">
                        {t( "мы ради что  выбрали команду")}
                    </p>
                    <h1 className="text-xl lg:text-3xl font-bold uppercase mt-12">
                        {t("Подписывайтесь на нас")}
                    </h1>
                    <div className="flex mt-6">
                        <div className="border-2 border-solid border-black p-3.5 bg-black rounded-full">
                            <InstagramTwoIcon/>
                        </div>
                        <div className="border-2 border-solid border-black p-3.5 bg-black rounded-full ml-2.5">
                            <FacebookTwoIcon />
                        </div>
                    </div>
                </div>
                <div>
                    <Notification open={state} close={() => setState(false)}/>

                    <form action="#" method="post" className="space-y-4">
                        <label className="text-sm text-[#01162C]" htmlFor="name">{t("Имя")}</label> <br/>
                        <input
                            onChange={(e) => setName(e.target.value)}
                            className=" py-[18px] px-6 border border-[#EBEBEB] rounded-md justify-center w-[340px] md:w-[420px] xl:w-[625px]"
                            id="name" type="text" name="name" placeholder={t("Ваше имя")}/> <br/> <br/>
                        <label className="text-sm text-[#01162C]" htmlFor="name">{t("Номер телефона")}</label> <br/>
                        <input
                            onChange={(e) => setPhone(e.target.value)}
                            className=" py-[18px] px-6 border border-[#EBEBEB] rounded-md justify-center w-[340px] md:w-[420px] xl:w-[625px]"
                            id="tel" type="number" name="tel" placeholder={t("Номер телефона")}/> <br/> <br/>
                        <label className="text-sm text-[#01162C]" htmlFor="w3review">{t("Сообщение")}</label> <br/>

                        <textarea
                            onChange={(e) => setText(e.target.value)}
                            className="p-4 w-full border border-[#EBEBEB] rounded-md justify-center"
                            id="w3review"
                            name="w3review" rows="6" cols="50"/> <br/>
                        <input
                            type="checkbox"
                            id="vehicle1"
                            name="vehicle1"
                            value="Bike"/>
                        <label htmlFor="vehicle1"> {t("Вы соглашаетесь с политикой конфиденциальности.")}</label><br/>
                    </form>
                    <div className="mt-10">
                        <button
                            onClick={sendMassageFunction}
                            className=" py-3.5 px-4 border border-black rounded-full uppercase font-semibold text-base tracking-widest"
                            type="submit">
                            {t("Отправить запрос")}
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CantactForm;