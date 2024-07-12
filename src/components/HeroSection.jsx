import React from "react";
import { Link } from "react-scroll";
import HeroImage from "../assets/images/HeroImage.jpeg";
import HomeBg from "../assets/images/HomeBg.jpeg";

const HeroSection = () => {
    return (
        <section className="bg-black text-white text-center py-20 min-h-screen">
            <div className="flex flex-col md:flex-row items-center justify-center w-10/12 mx-auto">
                <div className="w-full md:w-1/2">
                    <img
                        src={HeroImage}
                        alt="Hero Image"
                        className="h-full w-full object-cover rounded"
                    />
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center px-8 my-10">
                    <h1 className="text-5xl font-bold mb-6">
                        Entelika AI Hackathon
                    </h1>
                    <p className="text-2xl mb-10">Vision Pulse 2024</p>
                    <Link
                        to="details"
                        smooth={true}
                        duration={500}
                        className="bg-white text-orange-400 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-orange-400 hover:text-white transition duration-300 hover:cursor-pointer"
                    >
                        Register Now
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
