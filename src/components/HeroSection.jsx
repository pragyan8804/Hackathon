import React from "react";
import HeroImage from "../assets/images/HeroImage.png";
import HomeBg from "../assets/images/HomeBg.png";
import TextMarquee from "./TextMarquee";

const HeroSection = () => {
    return (
        <section
            className="relative bg-black text-white text-center py-20 min-h-screen items-center justify-center"
            style={{
                backgroundImage: `url(${HomeBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative flex flex-col lg:flex-row items-center justify-center w-10/12 mx-auto">
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
                    <p className="mb-10">
                        We provide a unique opportunity for young engineering
                        students to create groundbreaking solutions to the
                        biggest issues in the manufacturing industry. Through
                        our program, we offer training, mentorship, and
                        recognition to top project teams, helping them reach
                        their highest potential. If you are an ambitious,
                        inventive individual with a passion for innovation, our
                        hackathon is the perfect place for you to thrive.
                    </p>
                    <a
                        href="https://forms.office.com/r/cFdUKLbGPk"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-grad"
                    >
                        Register Now
                    </a>
                </div>
            </div>
            <TextMarquee />
        </section>
    );
};

export default HeroSection;
