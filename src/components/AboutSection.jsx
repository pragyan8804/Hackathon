import React from "react";
import AboutUsNewImage from "../assets/images/AboutUsNewImage.png";
import GlobeIcon from "../assets/icon/GlobeIcon.png";

const AboutSection = () => {
    return (
        <section
            id="about"
            className="relative flex flex-col items-center justify-center h-screen"
            style={{
                backgroundImage: `url(${AboutUsNewImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <h2 className="text-orange-500 text-3xl md:text-6xl font-bold mb-4">
                About Entelika
            </h2>
            <div className="bg-white bg-opacity-80 p-8 rounded-md w-3/5 text-center">
                <p className="text-orange-500 text-lg md:text-2xl mb-6">
                    <span className="text-xl md:text-5xl font-bold">E</span>
                    ntelika is an AI-based digital product development firm. We
                    enhance business processes and improve customer experiences
                    by leveraging emerging technologies.
                </p>
                <a
                    href="https://www.entelika.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-black bg-white hover:bg-gray-100 px-4 py-2 rounded-lg shadow"
                >
                    <img
                        src={GlobeIcon}
                        alt="Globe Icon"
                        className="w-4 h-4 mr-2"
                    />
                    Visit our website
                </a>
            </div>
        </section>
    );
};

export default AboutSection;
