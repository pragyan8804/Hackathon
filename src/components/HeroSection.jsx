import React from "react";
import HeroImage from "../assets/images/HeroImage.png";
import HomeBg from "../assets/images/HomeBg.png";
import TextMarquee from "./TextMarquee";

const HeroSection = () => {
    return (
        <section
            id="home"
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
                        Join us for an exhilarating journey into the world of
                        Artificial Intelligence and Machine Learning! This
                        hackathon is designed exclusively for engineering
                        students, providing a platform to showcase your
                        innovative ideas, collaborate with like-minded peers,
                        and solve real-world challenges. Whether you’re a
                        seasoned coder or a passionate beginner, this event
                        promises to ignite your creativity and push the
                        boundaries of technology. Get ready to code, compete,
                        and create the future! 🚀
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
