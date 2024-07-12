import React from "react";

const TracksSection = () => {
    return (
        <section
            id="tracks"
            className="py-20 px-4 text-center min-h-screen flex flex-col justify-center"
        >
            <h2 className="text-3xl font-bold mb-4">Hackathon Tracks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-6 border rounded shadow-lg hover:shadow-xl transition duration-300">
                    <h3 className="text-2xl font-bold mb-2">Video Analysis</h3>
                    <p>
                        Participants will explore cutting-edge algorithms to
                        classify activities like running, jumping, and kicking
                        using computer vision and machine learning.
                    </p>
                </div>
                <div className="p-6 border rounded shadow-lg hover:shadow-xl transition duration-300">
                    <h3 className="text-2xl font-bold mb-2">Recommendation</h3>
                    <p>
                        Participants will build a recommendation engine that
                        provides personalized internship recommendations
                        tailored to each student's unique profile and
                        preferences.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TracksSection;
