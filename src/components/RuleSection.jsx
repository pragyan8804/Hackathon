import React from "react";

const RuleSection = () => {
    return (
        <section
            id="rules"
            className="py-20 px-4 bg-gray-100 min-h-screen flex flex-col justify-center w-10/12 mx-auto"
        >
            <div className="w-full text-center">
                <h2 className="text-5xl font-bold mb-10">Hackathon Rules</h2>
            </div>
            <div className="w-full lg:w-8/12 mx-auto">
                <ol className="list-decimal list-inside text-lg">
                    <li className="mb-4">
                        The hackathon is structured with two tracks: Video
                        Analysis and Recommendation.
                    </li>
                    <li className="mb-4">
                        Each track features three different problem statements,
                        providing participants with a variety of options to
                        choose from.
                    </li>
                    <li className="mb-4">
                        Participants are free to select any problem statement
                        for resolution based on their interests and expertise.
                    </li>
                    <li className="mb-4">
                        Problem statements are classified from complex to
                        simple, and evaluation points are allocated accordingly.
                    </li>
                    <li className="mb-4">
                        Each problem statement has an overall point allocation
                        based on its complexity, with sub-points for different
                        evaluation criteria within the problem statement.
                    </li>
                    <li className="mb-4">
                        Teams are encouraged to choose complex problems as they
                        not only hold more points but also offer opportunities
                        for learning and skill development.
                    </li>
                    <li className="mb-4">
                        Registration is required for participation, and teams
                        can register using the provided link [Insert
                        Registration Link].
                    </li>
                    <li className="mb-4">
                        Teams can consist of a maximum of 4 participants and a
                        minimum of 1 participant.
                    </li>
                    <li className="mb-4">
                        Evaluation criteria include but are not limited to
                        innovation, accuracy of results, time and space
                        complexity, and presentation quality.
                    </li>
                    <li className="mb-4">
                        Points allocation is based on the quality and creativity
                        of the solution, as well as adherence to the evaluation
                        criteria.
                    </li>
                </ol>
            </div>
        </section>
    );
};

export default RuleSection;
