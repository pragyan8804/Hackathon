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
            <h2 className="text-5xl font-bold mb-12">Prizes</h2>
            <div className="mx-auto flex flex-col justify-center items-center space-y-8 flex-wrap">
                <div className="flex justify-center items-center flex-col mb-10">
                    <img
                        src={firstPrize}
                        alt="First Prize"
                        className="w-24 h-24 mb-2"
                    />
                    <strong className="text-xl">Winner of Hackathon</strong>
                    <p className="text-xl">INR 25K Amazon Gift Vouchers</p>
                </div>
                <div
                    className="flex justify-center items-center flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8 my-10"
                    style={{ gap: "30px" }}
                >
                    <div className="flex justify-center items-center flex-col m-10">
                        <img
                            src={secondPrize}
                            alt="Second Prize"
                            className="w-24 h-24 mb-2"
                        />
                        <strong className="text-xl">2nd Winner</strong>
                        <p className="text-xl">INR 20K Amazon Gift Vouchers</p>
                    </div>
                    <div className="flex justify-center items-center flex-col sm:ml-8 mb-10">
                        <img
                            src={thirdPrize}
                            alt="Third Prize"
                            className="w-24 h-24 mb-2"
                        />
                        <strong className="text-xl">3rd Winner</strong>
                        <p className="text-xl">INR 15K Amazon Gift Vouchers</p>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <p className="text-xl text-center">
                        <strong className="text-xl">Top 10 entries:</strong>{" "}
                        Goodie bag and guaranteed paid internship at Entelika or
                        its sister companies.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PrizesSection;
