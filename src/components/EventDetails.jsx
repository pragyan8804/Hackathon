import React from "react";

const EventDetails = () => {
    return (
        <section
            id="details"
            className="py-20 px-4 bg-gray-100 text-center min-h-screen flex flex-col items-center"
        >
            <div className="md:w-10/12 mx-auto">
                <h2 className="text-5xl font-bold mb-10">Event Details</h2>
                <p className="text-lg mx-auto mb-6 text-left">
                    The objective of the hackathon is to bring together the best
                    minds from Engineering colleges in Mysore to provide
                    innovative solutions to key business problems. Participants
                    are invited to join either of the two tracks: Video Activity
                    Analysis and Recommendation.
                </p>
                <p className="text-lg mx-auto mb-6 text-left">
                    Our goal is to foster creativity and collaboration,
                    empowering participants to devise groundbreaking solutions.
                </p>
                <p className="text-lg mx-auto mb-6 text-left">
                    We encourage participants to take this opportunity to learn
                    new skills, technologies, and techniques from industry
                    experts and fellow participants.
                </p>
                <p className="text-lg mx-auto mb-6 text-left">
                    Top-performing teams will have the chance to win attractive
                    prizes and receive recognition for their innovative
                    solutions.
                </p>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:w-10/12 gap-6 mx-auto w-full">
                <div className="bg-white p-6 border rounded-lg shadow-lg hover:shadow-xl transition duration-300 w-full md:w-1/2 flex-grow">
                    <h3 className="text-2xl font-bold mb-4">Key Details</h3>
                    <div className="overflow-x-auto w-full">
                        <table className="table-auto w-full text-left text-xs md:text-sm lg:text-base">
                            <thead>
                                <tr className="bg-orange-500 text-white">
                                    <th className="px-3 py-2 rounded-tl-lg">
                                        Name
                                    </th>
                                    <th className="px-3 py-2 rounded-tr-lg">
                                        Details
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-3 py-2">
                                        Hackathon Event Name
                                    </td>
                                    <td className="border px-3 py-2">
                                        Vision Pulse 2024, Entelika LLP
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="border px-3 py-2">
                                        Final Selection
                                    </td>
                                    <td className="border px-3 py-2">
                                        09 Aug 2024
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2">
                                        Registration Link
                                    </td>
                                    <td className="border px-3 py-2">
                                        <a
                                            href="https://forms.office.com/r/cFdUKLbGPk"
                                            className="text-blue-500 hover:text-blue-400"
                                        >
                                            Register Here
                                        </a>
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="border px-3 py-2">
                                        Final Event Location
                                    </td>
                                    <td className="border px-3 py-2">
                                        Online/Main Auditorium, NIE, Mysore
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2">
                                        Organizing Team Details
                                    </td>
                                    <td className="border px-3 py-2">
                                        Prof. Rampur Srinath (NIE, Mysuru)
                                        <br />
                                        Ms. NagaSwetha Devarakonda (Director,
                                        Entelika LLP)
                                        <br />
                                        Ms. Ashwani Ittuveetil (Director,
                                        Entelika LLP)
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="border px-3 py-2">
                                        Chief Guest for Final Section Evaluation
                                    </td>
                                    <td className="border px-3 py-2">
                                        Mr. Leandro Ferreira Heroso (Houston,
                                        US)
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="bg-white p-6 border rounded-lg shadow-lg hover:shadow-xl transition duration-300 w-full md:w-1/2 flex-grow">
                    <h3 className="text-2xl font-bold mb-4">Key Dates</h3>
                    <div className="overflow-x-auto w-full">
                        <table className="table-auto w-full text-left text-xs md:text-sm lg:text-base">
                            <thead>
                                <tr className="bg-orange-500 text-white">
                                    <th className="px-3 py-2 rounded-tl-lg">
                                        Event
                                    </th>
                                    <th className="px-3 py-2">Date</th>
                                    <th className="px-3 py-2 rounded-tr-lg">
                                        Guidelines
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-3 py-2">
                                        Last date for online registration
                                    </td>
                                    <td className="border px-3 py-2">
                                        26 Jul 2024 5 PM IST
                                    </td>
                                    <td className="border px-3 py-2">
                                        Online registration with team and topic
                                        details must be submitted by this
                                        timeframe
                                    </td>
                                </tr>
                                <tr className="bg-gray-50">
                                    <td className="border px-3 py-2">
                                        First round of selection by college (3
                                        teams per college)
                                    </td>
                                    <td className="border px-3 py-2">
                                        02 Aug 2024 5 PM IST
                                    </td>
                                    <td className="border px-3 py-2">
                                        Colleges to identify and send top 3
                                        teams to main event
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border px-3 py-2">
                                        Final presentation round (Online + NIE
                                        College Auditorium)
                                    </td>
                                    <td className="border px-3 py-2">
                                        10 Aug 2024 5 PM IST onwards
                                    </td>
                                    <td className="border px-3 py-2">
                                        Final evaluation by NIE Professors and
                                        Chief Guest present online (Mr. Leandro
                                        Ferreira Heroso), Selected Faculty
                                        Members from other colleges and Entelika
                                        Representatives
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EventDetails;
