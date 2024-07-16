import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const EventDetails = () => {
    const cardRefs = useRef([]);

    useEffect(() => {
        // Calculate the maximum height of the cards
        const heights = cardRefs.current.map((ref) => ref.offsetHeight);
        const maxHeight = Math.max(...heights);

        // Set each card's height to the maximum height
        cardRefs.current.forEach((ref) => {
            ref.style.height = `${maxHeight}px`;
        });
    }, []);

    return (
        <section
            id="details"
            className="py-20 px-4 bg-black text-center min-h-screen flex flex-col items-center"
        >
            <div className="md:w-10/12 mx-auto flex lg:flex-row flex-col lg:items-center text-white mb-10">
                <h2 className="text-5xl font-bold mb-10 w-full lg:w-1/3 text-orange-400">
                    Event Details
                </h2>
                <div className="w-full lg:w-2/3">
                    <p className="text-md mx-auto mb-6 text-left">
                        The objective of the hackathon is to bring together the
                        best minds from Engineering colleges in Mysore to
                        provide innovative solutions to key business problems.
                        Participants are invited to join either of the two
                        tracks: Video Activity Analysis and Recommendation.
                    </p>
                    <p className="text-lg mx-auto mb-6 text-left">
                        Our goal is to foster creativity and collaboration,
                        empowering participants to devise groundbreaking
                        solutions.
                    </p>
                    <p className="text-lg mx-auto mb-6 text-left">
                        We encourage participants to take this opportunity to
                        learn new skills, technologies, and techniques from
                        industry experts and fellow participants.
                    </p>
                    <p className="text-lg mx-auto mb-6 text-left">
                        Top-performing teams will have the chance to win
                        attractive prizes and receive recognition for their
                        innovative solutions.
                    </p>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-4 text-white">
                <div
                    ref={(el) => (cardRefs.current[0] = el)}
                    className="bg-gradient-to-r from-gray-800 via-gray-600 to-blue-400 rounded-lg border-r-4 border-b-4 border-orange-500 p-6 text-left w-full lg:w-1/3 flex flex-col"
                >
                    <h3 className="text-2xl font-bold mb-4 text-orange-400">
                        Key Details
                    </h3>
                    <p>
                        Hackathon Event Name - Vision Pulse 2024, Entelika LLP
                    </p>
                    <p>Final Selection - 09 Aug 2024</p>
                    <p>
                        Registration Link -{" "}
                        <a
                            href="https://forms.office.com/r/cFdUKLbGPk"
                            className="text-blue-500 hover:text-blue-400"
                        >
                            Register Here
                        </a>
                    </p>
                    <p>
                        Final Event Location - Online/Main Auditorium, NIE,
                        Mysore
                    </p>
                    <p>
                        Organizing Team Details - Prof. Rampur Srinath (NIE,
                        Mysuru) - Ms. NagaSwetha Devarakonda (Director, Entelika
                        LLP) - Ms. Ashwani Ittuveetil (Director, Entelika LLP)
                    </p>
                    <p>
                        Chief Guest for Final Section Evaluation - Mr. Leandro
                        Ferreira Heroso (Houston, US)
                    </p>
                </div>
                <div
                    ref={(el) => (cardRefs.current[1] = el)}
                    className="bg-gradient-to-r from-gray-800 via-gray-600 to-blue-400 rounded-lg border-r-4 border-b-4 border-orange-500 p-6 text-left w-full lg:w-1/3 flex flex-col"
                >
                    <h3 className="text-2xl font-bold mb-4 text-orange-400">
                        Key Dates
                    </h3>
                    <p>
                        Last date for online registration - 26 Jul 2024 5 PM IST
                    </p>
                    <p>
                        First round of selection by college (3 teams per
                        college) - 02 Aug 2024 5 PM IST
                    </p>
                    <p>
                        Final presentation round (Online + NIE College
                        Auditorium) - 10 Aug 2024 5 PM IST onwards
                    </p>
                </div>
                <div
                    ref={(el) => (cardRefs.current[2] = el)}
                    className="bg-gradient-to-r from-gray-800 via-gray-600 to-blue-400 rounded-lg border-r-4 border-b-4 border-orange-500 p-6 text-left w-full lg:w-1/3 flex flex-col"
                >
                    <h3 className="text-2xl font-bold mb-4 text-orange-400">
                        Hackathon Rules
                    </h3>
                    <ul className="list-disc list-inside mb-6 flex-grow">
                        <li className="mb-2">
                            The hackathon is structured with two tracks: Video
                            Analysis and Recommendation.
                        </li>
                        <li className="mb-2">
                            Each track features three different problem
                            statements, providing participants with a variety of
                            options to choose from.
                        </li>
                        <li className="mb-2">
                            Participants are free to select any problem
                            statement for resolution based on their interests
                            and expertise.
                        </li>
                        <li className="mb-2">
                            Teams can consist of a maximum of 4 participants and
                            a minimum of 1 participant.
                        </li>
                    </ul>
                    <Link to="/rules">
                        <p className="text-xl text-orange-400 hover:cursor-pointer hover:text-orange-500">
                            Read More...
                        </p>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default EventDetails;
