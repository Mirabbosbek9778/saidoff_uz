import React from 'react';
import Earth from "../../../public/img/ServicesImg/Earth.png"
import Image from "next/image";

function ServecesHeader(props) {
    return (
        <div className="servecesHeader">
            <div className="container mx-auto flex justify-center">
                <div className="relative mt-52 xl:mt-32">
                    <h1 className="xl:tracking-widest font-extrabold xl:font-bold text-[72px] xl:text-[135px] text-white text-center -mt-10 uppercase">в месте</h1>
                    <p className="text-[#999999] font-bold text-5xl xl:text-7xl text-center xl:-mt-14">по всему миру</p>
                    <div className="absolute xl:-mt-36">
                        <Image src={Earth} alt="#" />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default ServecesHeader;