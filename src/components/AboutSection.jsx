import React from "react";
import AboutUsImage from "../assets/images/AboutUsImage.jpeg";

const AboutSection = () => {
    return (
        <section
            id="about"
            className="py-20 px-4 text-center md:min-h-screen flex flex-col justify-center bg-orange-100"
        >
            <div className="flex flex-col md:flex-row items-center justify-center md:w-10/12 mx-auto">
                <div className="md:w-1/2 p-10">
                    <h2 className="text-5xl font-bold mb-4">About Entelika</h2>
                    <p className="text-lg max-w-3xl mx-auto mb-4">
                        Entelika is an AI-based digital product development
                        firm. We enhance business processes and improve customer
                        experiences by leveraging emerging technologies.
                    </p>
                    <a
                        href="https://www.entelika.com"
                        className="text-primary mt-4 inline-block hover:text-accent"
                    >
                        Visit our website
                    </a>
                </div>
                <div className="w-full md:w-1/2">
                    <img
                        src={AboutUsImage}
                        alt="About Us Image"
                        className="h-full w-full object-cover rounded"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
