import { useEffect, useRef } from "react";

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
          <p className="text-lg mx-auto mb-6 text-left">
            Entelika IT Consulting and Services (An AI Product development firm
            incubated at NIE, Mysore) and National Institute of Engineering,
            Mysore Celebrate Successful Conclusion of Sparc 2024 AI Hackathon.
            It was also co-sponsored by the Institution of Engineers and
            Computer Society of India. Mysore Centres. They recently concluded
            its highly anticipated Sparc 2024 AI Hackathon on 19th Oct. The
            event was a grand success, reflecting the spirit of innovation and
            collaboration that drives our organization and our partners.
          </p>
          <p className="text-lg mx-auto mb-6 text-left">
            Hosted at the NIE campus , the hackathon saw an overwhelming
            response with 130 teams registering from 8 different colleges. The
            finals were intensely competitive, with 15 teams from 6 colleges
            battling it out. The event was inaugurated by the Principle of NIE
            Dr Rohini Nagapadma. Keynote and Welcome address were delivered by
            the director and Managing Partner of Entelika who also spoke about
            how AI is changing the way we work and the possibilities in the
            future with further advancement of AI and related technologies.
            Entire event was planned and managed by Entelika, TieOpp and the
            team of NIE college led by Professor Rampur Srinath and his team
            from Department of ISE under guidance of HoD Dr. Girish.
          </p>
          <p className="text-lg mx-auto mb-6 text-left">
            We were honoured to have an esteemed panel of judges who
            meticulously evaluated the submissions, ensuring a fair and
            insightful competition: Pruthvi Raj Venkatesh, a Senior Generative
            AI Research Scholar based in Bangalore working with bp business
            solutions, India. Leandro Ferreira Heroso, the Digital
            Transformation Lead and AI Enthusiast at ExxonMobil, who joined us
            from Houston, US via Teams.
          </p>
          <p className="text-lg mx-auto mb-6 text-left">
            Acknowledgements: We extend our heartfelt thanks to the Principals
            and Heads of Departments of all participating their unwavering
            support and encouragement. The participants and audience left the
            event with a drive to push the boundaries of AI and Data Science
            together.
          </p>
        </div>
      </div>
      {/* <div className="flex flex-col lg:flex-row justify-center items-center w-full gap-4 text-white">
        <div
          ref={(el) => (cardRefs.current[0] = el)}
          className="bg-gradient-to-r from-gray-800 via-gray-600 to-blue-400 rounded-lg border-r-4 border-b-4 border-orange-500 p-6 text-left w-full lg:w-1/3 flex flex-col"
        >
          <h3 className="text-2xl font-bold mb-4 text-orange-400">
            Key Details
          </h3>
          <ul className="list-disc list-inside mb-6 flex-grow">
            <li>Hackathon Event Name - Sparc 2024, Entelika LLP</li>
            <li>
              Registration Link -{" "}
              <a
                href="https://forms.office.com/r/cFdUKLbGPk"
                className="text-blue-500 hover:text-blue-400"
              >
                Register Here
              </a>
            </li>
            <li>Final Event Location - Online/Main Auditorium, NIE, Mysore</li>
            <li>
              Organizing Team Details
              <ul className="list-[circle] ml-6 mt-2">
                <li>Prof. Rampur Srinath (NIE, Mysuru)</li>
                <li>Ms. Swetha DN (Director, Entelika LLP)</li>
                <li>Ms. Ashwani Ittuveetil (Director, Entelika LLP)</li>
              </ul>
            </li>
            <li>
              Chief Guest for Final Section Evaluation - Mr. Leandro Ferreira
              Heroso (Houston, US)
            </li>
          </ul>
        </div>

        <div
          ref={(el) => (cardRefs.current[1] = el)}
          className="bg-gradient-to-r from-gray-800 via-gray-600 to-blue-400 rounded-lg border-r-4 border-b-4 border-orange-500 p-6 text-left w-full lg:w-1/3 flex flex-col"
        >
          <h3 className="text-2xl font-bold mb-4 text-orange-400">Key Dates</h3>
          <ul className="list-disc list-inside mb-6 flex-grow">
            <li>
              Last date for online registration - 29<sup>th </sup>
              September 2024 5 PM IST
            </li>
            <li>
              First round of selection by college (3 teams per college) - 12
              <sup>th </sup> October 2024
            </li>
            <li>
              Final presentation round (Online + NIE College Auditorium) - 19
              <sup>th </sup> October 2024
            </li>
          </ul>
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
              The hackathon is structured with two value streams: Video Analysis
              and Recommendation.
            </li>
            <li className="mb-2">
              Each stream features three different problem statements, providing
              participants with a variety of options to choose from.
            </li>
            <li className="mb-2">
              Participants are free to select any problem statement for
              resolution based on their interests and expertise.
            </li>
            <li className="mb-2">
              Teams can consist of a maximum of 4 participants and a minimum of
              1 participant.
            </li>
          </ul>
          <Link to="/rules">
            <p className="text-xl text-orange-400 hover:cursor-pointer hover:text-orange-500">
              Read More...
            </p>
          </Link>
        </div>
      </div> */}
    </section>
  );
};

export default EventDetails;
