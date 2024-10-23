import React from "react";
import PrizesSectionNewImage from "../assets/images/PrizesSectionNewImage.png";
import HeroImage from "../assets/images/HeroImage.png";

const HackathonImages = () => {
    return (
        <section className="bg-black py-16 min-h-screen">
            <div className="container mx-auto px-4">
                <h2 className="text-5xl font-bold text-orange-400 text-center mb-12">
                    Hackathon Moments
                </h2>
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
                    {/* First Row: 2 images */}
                    <div className="relative overflow-hidden rounded-2xl h-72 lg:col-span-2">
                        <img
                            src={PrizesSectionNewImage}
                            alt="Hackathon 1"
                            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                    <div className="relative overflow-hidden rounded-2xl h-72 lg:col-span-3">
                        <img
                            src={HeroImage}
                            alt="Hackathon 2"
                            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                        />
                    </div>

                    {/* Second Row: 3 images */}
                    <div className="relative overflow-hidden rounded-2xl h-72 lg:col-span-1">
                        <img
                            src={PrizesSectionNewImage}
                            alt="Hackathon 3"
                            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                    <div className="relative overflow-hidden rounded-2xl h-72 lg:col-span-2">
                        <img
                            src={HeroImage}
                            alt="Hackathon 4"
                            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                    <div className="relative overflow-hidden rounded-2xl h-72 lg:col-span-2">
                        <img
                            src={PrizesSectionNewImage}
                            alt="Hackathon 5"
                            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HackathonImages;
