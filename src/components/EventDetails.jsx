import React from "react";

const EventDetails = () => {
    return (
        <section
            id="details"
            className="py-20 px-4 bg-gray-100 text-center min-h-screen flex flex-col justify-center items-center"
        >
            <div className="flex flex-col md:flex-row items-center justify-center w-10/12">
                <div className="py-10 w-1/2">
                    <h2 className="text-5xl font-bold mb-10">Event Details</h2>
                    <p className="text-lg max-w-3xl mx-auto mb-6">
                        The objective of the hackathon is to bring together the
                        best minds from engineering colleges in Mysore to
                        provide innovative solutions to key business problems.
                        Participants are invited to join either of the two
                        tracks: Video Activity Analysis and Recommendation.
                    </p>
                </div>
                <ul className="list-disc list-inside max-w-3xl mx-auto text-left space-y-2">
                    <li>Event Name: Vision Pulse 2024, Entelika LLP</li>
                    <li>Final Selection: 09 Aug 2024</li>
                    <li>
                        Registration Link:{" "}
                        <a
                            href="https://forms.office.com/r/cFdUKLbGPk"
                            className="text-primary hover:text-accent"
                        >
                            Register Here
                        </a>
                    </li>
                    <li>Location: Online/Main Auditorium, NIE, Mysore</li>
                </ul>
            </div>
        </section>
    );
};

export default EventDetails;
