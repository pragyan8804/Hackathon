import React from "react";
import firstPrize from "../assets/images/1stPrize.png";
import secondPrize from "../assets/images/2ndPrize.png";
import thirdPrize from "../assets/images/3rdPrize.png";

const PrizesSection = () => {
    return (
        <section
            id="prizes"
            className="py-20 px-4 bg-gray-100 text-center min-h-screen flex flex-col justify-center"
        >
            <h2 className="text-5xl font-bold mb-4">Prizes</h2>
            <div className="max-w-3xl mx-auto flex flex-wrap justify-center items-center space-y-4">
                <div className="flex items-center space-x-4">
                    <img
                        src={firstPrize}
                        alt="First Prize"
                        className="w-24 h-24"
                    />
                    <p className="text-xl">
                        Winner of Hackathon: INR 25K Amazon Gift Vouchers
                    </p>
                </div>
                <div className="flex items-center space-x-4">
                    <p className="text-xl">
                        2nd Winner: INR 20K Amazon Gift Vouchers
                    </p>
                    <img
                        src={secondPrize}
                        alt="Second Prize"
                        className="w-24 h-24"
                    />
                </div>
                <div className="flex items-center space-x-4 mb-10">
                    <img
                        src={thirdPrize}
                        alt="Third Prize"
                        className="w-24 h-24"
                    />
                    <p className="text-xl">
                        3rd Winner: INR 15K Amazon Gift Vouchers
                    </p>
                </div>
                <div className="flex items-center space-x-4 mt-10">
                    <p className="text-xl">
                        Top 10 entries: Goodie bag and guaranteed paid
                        internship at Entelika or its sister companies.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PrizesSection;
