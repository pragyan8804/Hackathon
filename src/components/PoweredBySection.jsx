import React from "react";
import IeiLogo from "../assets/logo/IeiCrop.jpeg";
import CsiLogo from "../assets/logo/CsiLogoCropped.png";
import NieLogo from "../assets/logo/NieLogo.jpeg";

const PoweredBySection = () => {
    return (
        <div className="bg-gray-100 py-16">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800">
                    Entelika AI Hackathon
                </h2>
                <h2 className="text-3xl font-bold text-gray-800">Powered By</h2>
            </div>{" "}
            <div className="flex flex-col md:flex-row justify-center items-center gap-12">
                {/* CSI Card */}
                <div className="bg-white rounded-lg shadow-lg p-8 text-center transition-transform transform hover:-translate-y-1 hover:shadow-2xl w-64 h-80">
                    <a
                        href="https://csiindia.org/home/index"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mb-6"
                    >
                        <img
                            src={CsiLogo}
                            alt="CSI Logo"
                            className="h-32 mx-auto"
                        />
                    </a>
                    <p className="text-gray-500 text-sm mt-3">
                        Computer Society of India (CSI)
                    </p>
                    <p className="mt-6 text-lg font-semibold text-gray-800">
                        J G Venkatesh
                    </p>
                    <p className="text-gray-500 text-sm">Vice Chairman</p>
                </div>

                {/* IEI Card */}
                <div className="bg-white rounded-lg shadow-lg p-8 text-center transition-transform transform hover:-translate-y-1 hover:shadow-2xl w-64 h-80">
                    <a
                        href="https://ieimysore.org.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mb-6"
                    >
                        <img
                            src={IeiLogo}
                            alt="IEI Logo"
                            className="h-32 mx-auto"
                        />
                    </a>
                    <p className="text-gray-500 text-sm mt-3">
                        Institution of Engineers (India)
                    </p>
                    <p className="mt-6 text-lg font-semibold text-gray-800">
                        Dr Deepu R
                    </p>
                    <p className="text-gray-500 text-sm">IEI President</p>
                </div>

                {/* NIE Card */}
                <div className="bg-white rounded-lg shadow-lg p-8 text-center transition-transform transform hover:-translate-y-1 hover:shadow-2xl w-64 h-80">
                    <a
                        href="https://nie.ac.in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mb-6"
                    >
                        <img
                            src={NieLogo}
                            alt="NIE Logo"
                            className="h-32 mx-auto"
                        />
                    </a>
                    <p className="text-gray-500 text-sm mt-3">
                        National Institute of Engineering
                    </p>
                    <p className="mt-6 text-lg font-semibold text-gray-800">
                        Rampur Srinath
                    </p>
                    <p className="text-gray-500 text-sm">Prof. NIE</p>
                </div>
            </div>
        </div>
    );
};

export default PoweredBySection;
