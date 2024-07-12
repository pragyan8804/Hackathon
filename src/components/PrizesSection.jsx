import React from "react";

const PrizesSection = () => {
    return (
        <section
            id="prizes"
            className="py-20 px-4 bg-gray-100 text-center min-h-screen flex flex-col justify-center"
        >
            <h2 className="text-3xl font-bold mb-4">Prizes</h2>
            <ul className="list-disc list-inside max-w-3xl mx-auto text-left space-y-2">
                <li>Winner of Hackathon: INR 25K Amazon Gift Vouchers</li>
                <li>2nd Winner: INR 20K Amazon Gift Vouchers</li>
                <li>3rd Winner: INR 15K Amazon Gift Vouchers</li>
                <li>
                    Top 10 entries: Goodie bag and guaranteed paid internship at
                    Entelika or its sister companies.
                </li>
            </ul>
        </section>
    );
};

export default PrizesSection;
