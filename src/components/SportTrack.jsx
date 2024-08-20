import React from "react";
import sportImage1 from "../assets/images/SportImage1.jpeg";
import sportImage2 from "../assets/images/SportImage2.jpeg";

const SportTrack = () => {
    return (
        <section
            id="SportTrack"
            className="py-20 px-4 bg-gray-100 min-h-screen md:w-10/12 mx-auto"
        >
            <div className="w-full text-center flex flex-col mb-10">
                <h2 className="text-5xl font-bold mb-5">SportTrack</h2>
                <p className="text-2xl">
                    Advanced Video Analysis for Athletic Activity Det
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mb-12">
                <img
                    src={sportImage1}
                    alt="Sport"
                    className="w-full lg:w-1/2 rounded"
                />
                <div className="w-full lg:w-1/2 text-left">
                    <p className="text-lg mb-6">
                        "SportTrack" offers an innovative platform for advanced
                        video analysis in sports, emphasizing athletic activity
                        detection. Participants explore cutting-edge algorithms
                        to classify activities like running, jumping, and
                        kicking. Leveraging computer vision and machine
                        learning, they tackle challenges in analyzing sports
                        footage.
                    </p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mb-12">
                <div className="w-full lg:w-1/2 text-left">
                    <h3 className="text-2xl font-bold mb-4">Topics</h3>
                    <ul className="list-disc list-inside">
                        <li className="mb-2">
                            <strong className="text-lg">
                                Topic 1 "Diverse Sports Activity Recognition“
                            </strong>
                            <p>
                                Objective: Construct action recognition models
                                for a diverse range of sports activities,
                                encompassing various athletic movements and
                                actions across different sports disciplines.
                            </p>
                        </li>
                        <li className="mb-2">
                            <strong className="text-lg">
                                Topic 2 "Soccer Action Recognition"
                            </strong>
                            <p>
                                Objective: Construct action recognition models
                                specifically tailored for soccer, with a focus
                                on identifying and classifying common actions
                                such as short passes, long passes, tackles, and
                                scoring goals, among others.
                            </p>
                        </li>

                        <li className="mb-2">
                            <strong className="text-lg">
                                Topic 3 "Player Tracking and Action
                                Identification“
                            </strong>
                            <p>
                                Objective: Implement player tracking algorithms
                                to pin down a specific player in a video of
                                diverse zoom levels. Identify and classify the
                                actions performed by the tracked player across
                                different zoom levels, providing insights into
                                player movements and behaviors during gameplay.
                            </p>
                        </li>
                    </ul>
                </div>
                <img
                    src={sportImage2}
                    alt="Sport"
                    className="w-full lg:w-1/2 rounded"
                />
            </div>

            <div className="flex flex-col xl:flex-row gap-6">
                <TableComponent
                    topic="SportTrack - Topic 1"
                    title="Diverse Sports Activity Recognition"
                    objective="Construct action recognition models for a diverse range of sports activities, encompassing various athletic
                    movements and actions across different sports disciplines."
                    dataset="CRCV | Center for Research in Computer Vision at the University of Central Florida (ucf.edu)"
                    URL="https://www.crcv.ucf.edu/data/UCF_Sports_Action.php"
                    points={25}
                    details={[
                        { name: "F1 Score", value: "8 points" },
                        { name: "Model Generalization", value: "5 points" },
                        { name: "Space Complexity", value: "4 points" },
                        { name: "Time Complexity", value: "4 points" },
                        {
                            name: "Transfer Learning/Fine tuning",
                            value: "4 points",
                        },
                    ]}
                />
                <TableComponent
                    topic="SportTrack - Topic 2"
                    title="Soccer Action Recognition"
                    points={25}
                    objective="Construct action recognition models specifically tailored for soccer, with
                             a focus on identifying and classifying common actions such as short passes, long passes, tackles, and scoring goals, among others."
                    dataset="to be provided"
                    URL=""
                    details={[
                        { name: "F1 Score", value: "8 points" },
                        { name: "Model Generalization", value: "5 points" },
                        { name: "Space Complexity", value: "4 points" },
                        { name: "Time Complexity", value: "4 points" },
                        {
                            name: "Transfer Learning/Fine tuning",
                            value: "4 points",
                        },
                    ]}
                />
                <TableComponent
                    topic="SportTrack - Topic 3"
                    title="Player Tracking and Action Identification"
                    points={25}
                    objective="Design a recommendation engine that prioritizes
                            internship opportunities based on geographical location. Develop algorithms to consider factors such as proximity to the student's location, transportation accessibility, and regional job market trends. Provide personalized internship recommendations that optimize for convenience and accessibility for students."
                    dataset="to be provided"
                    URL=""
                    details={[
                        { name: "F1 Score", value: "10 points" },
                        { name: "Model Generalization", value: "5 points" },
                        { name: "Space Complexity", value: "5 points" },
                        { name: "Time Complexity", value: "5 points" },
                    ]}
                />
            </div>
        </section>
    );
};

const TableComponent = ({
    topic,
    title,
    objective,
    dataset,
    points,
    details,
    URL,
}) => (
    <div className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-500 p-6 border rounded shadow-lg hover:shadow-xl transition duration-300 w-full xl:w-1/3 text-white flex flex-col justify-between">
        <div className="mb-4">
            <h1 className="text-3xl font-bold mb-4">{topic}</h1>
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            <p className="mb-4">
                <strong>Objective :</strong> {objective}
            </p>
            <a
                href={URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 mb-4"
            >
                <strong className="text-white">Dataset :</strong> {dataset}
            </a>
        </div>
        <div>
            <table className="table-auto w-full text-left text-black">
                <thead>
                    <tr className=" bg-blue-400 text-white">
                        <th className="px-4 py-2">Criterion</th>
                        <th className="px-4 py-2">Points</th>
                    </tr>
                </thead>
                <tbody>
                    {details.map((detail, index) => (
                        <tr
                            key={index}
                            className={
                                index % 2 === 0 ? "bg-gray-50" : "bg-gray-200"
                            }
                        >
                            <td className="border px-4 py-2">{detail.name}</td>
                            <td className="border px-2 py-2">{detail.value}</td>
                        </tr>
                    ))}
                    <tr className="font-bold">
                        <td className="border px-4 py-2 bg-gray-300">
                            Total Points
                        </td>
                        <td className="border px-4 py-2 bg-gray-300">
                            {points}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
);

export default SportTrack;
