import React from "react";

import SportCardBg from "../assets/images/SportCardBg.jpeg";
import InternCardBg from "../assets/images/InternCardBg.jpeg";

const TracksSection = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section
            id="tracks"
            className="py-20 px-4 text-center  flex flex-col justify-center md:w-10/12 mx-auto"
        >
            <h2 className="text-5xl font-bold my-10">
                Hackathon Value Streams
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div
                    className="relative p-6 border rounded shadow-lg hover:shadow-xl transition duration-300 overflow-hidden cursor-pointer"
                    style={{
                        backgroundImage: `url(${SportCardBg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    onClick={() => scrollToSection("SportTrack")}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 text-white">
                        <h3 className="text-2xl font-bold mb-2">
                            Sport Value Stream
                        </h3>
                        <p>
                            "Sport Value Stream" offers an innovative platform
                            for advanced video analysis in sports, emphasizing
                            athletic activity detection. Participants explore
                            cutting-edge algorithms to classify activities like
                            running, jumping, and kicking. Leveraging computer
                            vision and machine learning, they tackle challenges
                            in analyzing sports footage.
                        </p>
                    </div>
                </div>
                <div
                    className="relative p-6 border rounded shadow-lg hover:shadow-xl transition duration-300 overflow-hidden cursor-pointer"
                    style={{
                        backgroundImage: `url(${InternCardBg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    onClick={() => scrollToSection("InternTrack")}
                >
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                    <div className="relative z-10 text-white">
                        <h3 className="text-2xl font-bold mb-2">
                            Workforce Value Stream
                        </h3>
                        <p>
                            "Workforce Value Stream" is aimed to design a
                            revolutionized internship search process for
                            students. Participants are expected to build a smart
                            internship recommendation engine utilizing advanced
                            algorithms and machine learning techniques to
                            provide personalized internship recommendations
                            tailored to each student's unique profile and
                            preferences by analyzing factors such as skills,
                            location, salary expectations, and industry
                            interests.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TracksSection;
