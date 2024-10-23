import React, { useState, useEffect } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import WinnersBg from "../assets/icon/Trophy.png";

const Winners = () => {
    const [isExploding, setIsExploding] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const section = document.getElementById("winners-section");
            const rect = section?.getBoundingClientRect();
            if (
                !hasScrolled &&
                rect &&
                rect.top < window.innerHeight &&
                rect.bottom >= 0
            ) {
                setHasScrolled(true);
                setTimeout(() => {
                    setIsExploding(true);
                }, 500);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [hasScrolled]);

    return (
        <section
            id="winners-section"
            className="bg-black text-white py-16 relative"
        >
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-5xl font-bold text-orange-400 mb-12 relative">
                    Hackathon Winners
                    {isExploding && (
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
                            <ConfettiExplosion force={1} duration={6000} />
                        </div>
                    )}
                </h2>
                {/* 
                <div className="relative flex flex-col lg:flex-row justify-center items-end pb-20 lg:pb-0 lg:gap-0">
                    <div className="order-3 lg:order-1 w-full lg:w-96 lg:h-[50%] lg:translate-y-1/2 border border-orange-400 rounded-lg p-6 text-center">
                        <h3 className="text-3xl font-bold text-orange-400 mb-4">
                            First Runner Up
                        </h3>
                        <p className="text-xl font-semibold">Team Mule</p>
                        <p className="text-md text-gray-400 mb-2">
                            Reva University
                        </p>
                        <p className="text-md mb-4">
                            Diverse Sports Activity Recognition
                        </p>
                        <p className="text-sm text-gray-300">
                            Sanjana K R, Gangavarapu Lakshmi Dhatri,
                            Jnaneshwari, Priyanka J
                        </p>
                    </div>

                    <div className="order-1 lg:order-2 w-full lg:w-96 lg:h-full border border-orange-400 rounded-lg p-6 text-center">
                        <h3 className="text-3xl font-bold text-orange-400 mb-4">
                            Winner
                        </h3>
                        <p className="text-xl font-semibold">Hack ML</p>
                        <p className="text-md text-gray-400 mb-2">NIE</p>
                        <p className="text-md mb-4">
                            Resume-Based Internship Matching
                        </p>
                        <p className="text-sm text-gray-300">
                            Ayush Satpathy, Ananth Prabhu T, Shreyas Nagoor,
                            Shreedhar A Sherlekar
                        </p>
                    </div>

                    <div className="order-2 lg:order-3 w-full lg:w-96 lg:h-[75%] lg:translate-y-1/4 border border-orange-400 rounded-lg p-6 text-center">
                        <h3 className="text-3xl font-bold text-orange-400 mb-4">
                            Runner Up
                        </h3>
                        <p className="text-xl font-semibold">Voiders</p>
                        <p className="text-md text-gray-400 mb-2">NIE</p>
                        <p className="text-md mb-4">
                            Soccer Action Recognition
                        </p>
                        <p className="text-sm text-gray-300">
                            Shivaprasad, Darshan Y, Abhishek M B, Vinay K V
                        </p>
                    </div>
                </div> */}

                {/* <div className="relative flex flex-col lg:flex-row justify-center items-end pb-20 lg:pb-0 gap-8 lg:gap-0">
                    <div className="flex flex-col justify-end order-3 lg:order-1 w-full lg:w-52 lg:flex-grow lg:flex-[0.25] border border-orange-400 rounded-lg p-6 text-center">
                        <h3 className="text-3xl font-bold text-orange-400 mb-4">
                            First Runner Up
                        </h3>
                        <p className="text-xl font-semibold">Team Mule</p>
                        <p className="text-md text-gray-400 mb-2">
                            Reva University
                        </p>
                        <p className="text-md mb-4">
                            Diverse Sports Activity Recognition
                        </p>
                        <p className="text-sm text-gray-300">
                            Sanjana K R, Gangavarapu Lakshmi Dhatri,
                            Jnaneshwari, Priyanka J
                        </p>
                    </div>

                    <div className="flex flex-col justify-end order-1 lg:order-2 w-full lg:w-52 lg:flex-grow lg:flex-[1] border border-orange-400 rounded-lg p-6 text-center">
                        <h3 className="text-3xl font-bold text-orange-400 mb-4">
                            Winner
                        </h3>
                        <p className="text-xl font-semibold">Hack ML</p>
                        <p className="text-md text-gray-400 mb-2">NIE</p>
                        <p className="text-md mb-4">
                            Resume-Based Internship Matching
                        </p>
                        <p className="text-sm text-gray-300">
                            Ayush Satpathy, Ananth Prabhu T, Shreyas Nagoor,
                            Shreedhar A Sherlekar
                        </p>
                    </div>

                    <div className="flex flex-col justify-end order-2 lg:order-3 w-full lg:w-52 lg:flex-grow lg:flex-[0.5] border border-orange-400 rounded-lg p-6 text-center">
                        <h3 className="text-3xl font-bold text-orange-400 mb-4">
                            Runner Up
                        </h3>
                        <p className="text-xl font-semibold">Voiders</p>
                        <p className="text-md text-gray-400 mb-2">NIE</p>
                        <p className="text-md mb-4">
                            Soccer Action Recognition
                        </p>
                        <p className="text-sm text-gray-300">
                            Shivaprasad, Darshan Y, Abhishek M B, Vinay K V
                        </p>
                    </div>
                </div> */}

                <div className="relative flex flex-col lg:flex-row justify-center items-center pb-20 gap-8 mx-auto">
                    <div className="order-3 lg:order-1 lg:absolute lg:left-0 lg:transform lg:translate-y-1/2 w-full lg:w-72 xl:w-96 border border-orange-400 rounded-lg p-6 text-center pb-24 md:pb-6">
                        <h3 className="text-3xl font-bold text-orange-400 mb-4">
                            First Runner Up
                        </h3>
                        <p className="text-xl font-semibold">Team Mule</p>
                        <p className="text-md text-gray-400 mb-2">
                            Reva University
                        </p>
                        <p className="text-md mb-4">
                            Diverse Sports Activity Recognition
                        </p>
                        <p className="text-sm text-gray-300 pb-16 lg:pb-0">
                            Sanjana K R, Gangavarapu Lakshmi Dhatri,
                            Jnaneshwari, Priyanka J
                        </p>
                    </div>

                    <div className="order-1 lg:order-2 relative z-10 w-full lg:w-72 xl:w-96 border pb-24 md:pb-12 border-orange-400 rounded-lg p-6 text-center flex flex-col justify-center">
                        <img
                            src={WinnersBg}
                            alt="Winners Background"
                            className=" w-10 h-24 object-cover self-center"
                        />
                        <h3 className="text-3xl font-bold text-orange-400 mb-4">
                            Winner
                        </h3>
                        <p className="text-xl font-semibold">Hack ML</p>
                        <p className="text-md text-gray-400 mb-2">NIE</p>
                        <p className="text-md mb-4">
                            Resume-Based Internship Matching
                        </p>
                        <p className="text-sm text-gray-300 lg:pb-32">
                            Ayush Satpathy, Ananth Prabhu T, Shreyas Nagoor,
                            Shreedhar A Sherlekar
                        </p>
                    </div>

                    <div className="order-2 md:order-3 lg:absolute lg:right-0 lg:transform lg:translate-y-1/4 pb-24 lg:pb-32 w-full lg:w-72 xl:w-96 border border-orange-400 rounded-lg p-6 text-center">
                        <h3 className="text-3xl font-bold text-orange-400 mb-4">
                            Runner Up
                        </h3>
                        <p className="text-xl font-semibold">Voiders</p>
                        <p className="text-md text-gray-400 mb-2">NIE</p>
                        <p className="text-md mb-4">
                            Soccer Action Recognition
                        </p>
                        <p className="text-sm text-gray-300">
                            Shivaprasad, Darshan Y, Abhishek M B, Vinay K V
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Winners;
