import React from "react";
import internImage1 from "../assets/images/InternImage1.jpeg";
import internImage2 from "../assets/images/InternImage2.jpeg";

const InternTrack = () => {
    return (
        <section
            id="InternTrack"
            className="py-20 px-4 bg-gray-100 min-h-screen md:w-10/12 mx-auto"
        >
            <div className="w-full text-center">
                <h2 className="text-5xl font-bold mb-10">
                    InternTrack - Smart Internship Recommendation Engine
                </h2>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mb-12">
                <img
                    src={internImage1}
                    alt="Internship"
                    className="w-full lg:w-1/2 rounded"
                />
                <div className="w-full lg:w-1/2 text-left">
                    <p className="text-lg mb-6">
                        "InternTrack" is aimed to design a revolutionized
                        internship search process for students. Participants are
                        expected to build a smart internship recommendation
                        engine utilizing advanced algorithms and machine
                        learning techniques to provide personalized internship
                        recommendations tailored to each student's unique
                        profile and preferences by analyzing factors such as
                        skills, location, salary expectations, and industry
                        interests.
                    </p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mb-12">
                <div className="w-full lg:w-1/2 text-left">
                    <h3 className="text-2xl font-bold mb-4">Topics</h3>
                    <ul className="list-disc list-inside">
                        <li className="mb-2">
                            <strong className="text-lg">
                                Topic 1: "Personalized Internship
                                Recommendations“
                            </strong>
                            <p>
                                Objective: Develop a recommendation engine that
                                provides personalized internship recommendations
                                based on each student's unique profile,
                                including skills, location, salary expectations,
                                and industry interests. Utilize advanced
                                algorithms and machine learning techniques to
                                analyze and match students with internship
                                opportunities that align with their career
                                goals.
                            </p>
                        </li>
                        <li className="mb-2">
                            <strong className="text-lg">
                                Topic 2: “Resume-Based Internship Matching“
                            </strong>
                            <p>
                                Objective: Develop a recommendation engine that
                                matches students with internship opportunities
                                based on the skills listed in their resumes.
                                Utilize natural language processing (NLP)
                                techniques to extract skills from resumes and
                                match them with internship requirements. Explore
                                methods for skill assessment, matching, and
                                recommendation to enhance internship relevance
                                and fit.
                            </p>
                        </li>
                        <li className="mb-2">
                            <strong className="text-lg">
                                Topic 3: "Job Portal Parsing for Skill-Centric
                                Job Recommendations“
                            </strong>
                            <p>
                                Objective: Develop approaches for parsing
                                through any career portal and recommending jobs
                                based on user-provided skills. Utilize natural
                                language processing (NLP) techniques to extract
                                skills from user inputs and match them with job
                                requirements. Explore algorithms and
                                methodologies to enhance the relevance and fit
                                of job recommendations based on userprovided
                                skills.
                            </p>
                        </li>
                    </ul>
                </div>
                <img
                    src={internImage2}
                    alt="Internship"
                    className="w-full lg:w-1/2 rounded"
                />
            </div>

            <div className="flex flex-col gap-6">
                <TableComponent
                    topic="Interntrack - Topic 1"
                    title="Personalized Internship Recommendations"
                    objective="Develop a recommendation engine that provides personalized internship recommendations based on each student's unique profile, including skills, location, salary expectations, and industry interests. Utilize advanced algorithms and machine learning techniques to analyze and match students with internship opportunities that align with their career goals."
                    dataset="To be provided"
                    URL=""
                    points={15}
                    details={[
                        { name: "Accuracy", value: "5 points" },
                        { name: "Space Complexity", value: "5 points" },
                        { name: "Time Complexity", value: "5 points" },
                    ]}
                />
                <TableComponent
                    topic="Interntrack - Topic 2"
                    title="Resume-Based Internship Matching"
                    objective="Develop a recommendation engine that matches students with internship opportunities based on the skills listed in their resumes. Utilize natural language processing (NLP) techniques to extract skills from resumes and match them with internship requirements. Explore methods for skill assessment, matching, and recommendation to enhance internship relevance and fit."
                    dataset="To be provided"
                    URL=""
                    points={20}
                    details={[
                        { name: "Accuracy", value: "5 points" },
                        { name: "Space Complexity", value: "5 points" },
                        { name: "Time Complexity", value: "5 points" },
                        { name: "Layout Agnostic", value: "5 points" },
                    ]}
                />
                <TableComponent
                    topic="InternTrack - Topic 3"
                    title="Job Portal Parsing for Skill-Centric Job Recommendations"
                    objective="Develop approaches for parsing through any career portal and recommending jobs based on user-provided skills. Utilize natural language processing (NLP) techniques to extract skills from user inputs and match them with job requirements. Explore algorithms and methodologies to enhance the relevance and fit of job recommendations based on user-provided skills."
                    dataset="To be provided"
                    URL=""
                    points={25}
                    details={[
                        { name: "Accuracy", value: "5 points" },
                        { name: "Space Complexity", value: "5 points" },
                        { name: "Time Complexity", value: "5 points" },
                        { name: "Layout Agnostic", value: "10 points" },
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
    <div className="bg-white p-6 border rounded shadow-lg hover:shadow-xl transition duration-300">
        <h1 className="text-3xl font-bold mb-4">{topic}</h1>
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="mb-4">
            <strong>Objective :</strong> {objective}
        </p>
        <a href={URL} className="text-blue-400 mb-4">
            <strong className="text-black">Dataset :</strong> {dataset}
        </a>
        <table className="table-auto w-full text-left">
            <thead>
                <tr className="bg-orange-500 text-white">
                    <th className="px-4 py-2">Criterion</th>
                    <th className="px-4 py-2">Points</th>
                </tr>
            </thead>
            <tbody>
                {details.map((detail, index) => (
                    <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-gray-50" : ""}
                    >
                        <td className="border px-4 py-2">{detail.name}</td>
                        <td className="border px-4 py-2">{detail.value}</td>
                    </tr>
                ))}
                <tr className="font-bold">
                    <td className="border px-4 py-2">Total Points</td>
                    <td className="border px-4 py-2">{points}</td>
                </tr>
            </tbody>
        </table>
    </div>
);

export default InternTrack;