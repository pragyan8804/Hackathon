import React from "react";
import PrizesSectionNewImage from "../assets/images/PrizesSectionNewImage.png";
import StarIcon from "../assets/icon/StarIcon.png";

const PrizesSection = () => {
    return (
        <section
            id="prizes"
            className="py-20 px-4 text-center md:min-h-screen flex flex-col justify-center bg-black"
        >
            <h2 className="text-5xl font-bold mb-4 text-orange-400 self-start md:self-auto">
                Awards
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center md:w-10/12 mx-auto text-white">
                <div className="md:w-1/2 p-10 w-10/12 text-lg">
                    <ul className="text-left">
                        <li className="flex items-center mb-8">
                            <img
                                src={StarIcon}
                                alt="Star Icon"
                                className="w-6 h-6 mr-2"
                            />
                            <span>
                                1st Prize – INR 25,000.00 Amazon Gift Vouchers
                            </span>
                        </li>
                        <li className="flex items-center mb-8">
                            <img
                                src={StarIcon}
                                alt="Star Icon"
                                className="w-6 h-6 mr-2"
                            />
                            <span>
                                2nd Prize – INR 20,000.00 Amazon Gift Vouchers
                            </span>
                        </li>
                        <li className="flex items-center mb-8">
                            <img
                                src={StarIcon}
                                alt="Star Icon"
                                className="w-6 h-6 mr-2"
                            />
                            <span>
                                3rd Prize – INR 15,000.00 Amazon Gift Vouchers
                            </span>
                        </li>
                        <li className="flex items-center mb-8">
                            <img
                                src={StarIcon}
                                alt="Star Icon"
                                className="w-6 h-6 mr-2"
                            />
                            <span>Top 10 entries: Goodie bag</span>
                        </li>
                        <li className="flex items-center mb-8">
                            <img
                                src={StarIcon}
                                alt="Star Icon"
                                className="w-6 h-6 mr-2"
                            />
                            <span>Paid internship opportunities</span>
                        </li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 p-10">
                    <img
                        src={PrizesSectionNewImage}
                        alt="Prizes Image"
                        className="h-full w-full object-cover rounded"
                    />
                </div>
            </div>
        </section>
    );
};

export default PrizesSection;
