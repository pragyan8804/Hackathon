import React from "react";
import { Link } from "react-scroll";
import HeroImage from "../assets/images/HeroImage.png";
import HomeBg from "../assets/images/HomeBg.png";

const HeroSection = () => {
    return (
        <section
            className="relative bg-black text-white text-center py-20 min-h-screen flex items-center justify-center"
            style={{
                backgroundImage: `url(${HomeBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative flex flex-col md:flex-row items-center justify-center w-10/12 mx-auto">
                <div className="w-full md:w-1/2">
                    <img
                        src={HeroImage}
                        alt="Hero Image"
                        className="h-full w-full object-cover rounded"
                    />
                </div>
                <div className="md:w-1/2 flex flex-col justify-center items-center px-8 my-10">
                    <h1 className="text-5xl font-bold mb-6 relative z-10">
                        Entelika AI Hackathon
                    </h1>
                    <p className="text-2xl mb-10 relative z-10">
                        Vision Pulse 2024
                    </p>
                    <Link
                        to="details"
                        smooth={true}
                        duration={500}
                        className="bg-white text-orange-400 px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-orange-400 hover:text-white transition duration-300 hover:cursor-pointer relative z-10"
                    >
                        Register Now
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
