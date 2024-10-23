import React from "react";
import HeroImage from "../assets/images/HeroImage.png";
import HeroWinners from "../assets/images/HeroWinnersImage.png";
import HomeBg from "../assets/images/HomeBg.png";
import TextMarquee from "./TextMarquee";

const HeroSection = () => {
    return (
        <section
            id="home"
            className="relative bg-black text-white text-center py-5 lg:min-h-screen items-center justify-center"
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
                        src={HeroWinners}
                        alt="Hero Image"
                        className="h-full w-full object-cover rounded"
                    />
                </div>
                <div className="md:w-1/2 flex flex-col justify-center items-center px-8 my-10">
                    <h1 className="text-5xl font-bold mb-6 relative z-10">
                        Entelika AI Hackathon
                    </h1>
                    <p className="text-2xl mb-5 relative z-10">Sparc 2024</p>
                    <p className="mb-1">
                        Are you passionate about artificial intelligence and
                        eager to turn your innovative ideas into reality? Join
                        us for an exhilarating AI Hackathon designed exclusively
                        for engineering minds who are ready to push the
                        boundaries of technology and creativity.
                    </p>
                    <p className="mb-10">
                        Whether you’re a seasoned coder or just starting out,
                        this is your chance to collaborate with like-minded
                        peers, tackle real-world challenges, and showcase your
                        skills. Dive into a dynamic environment where your ideas
                        can flourish and have a tangible impact on the future of
                        AI. Get ready to code, compete, and create the future!
                    </p>
                </div>
            </div>
            <TextMarquee />
        </section>
    );
};

export default HeroSection;
