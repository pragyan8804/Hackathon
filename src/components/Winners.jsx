import first from "../assets/images/hackathonWinners/first.png";
import second from "../assets/images/hackathonWinners/second.png";
import third from "../assets/images/hackathonWinners/third.png";

const winnersData = [
  {
    rank: "Winner",
    college: "The National Institute of Engineering, Mysore",
    project: "Resume-Based Internship Matching",
    members:
      "Ayush Satpathy, Ananth Prabhu T, Shreyas Nagoor, Shreedhar A Sherlekar",
    image: first,
  },
  {
    rank: "Runner Up",
    college: "The National Institute of Engineering, Mysore",
    project: "Soccer Action Recognition",
    members: "Shivaprasad, Darshan Y, Abhishek M B, Vinay K V",
    image: second,
  },
  {
    rank: "Second Runner Up",
    college: "Reva University",
    project: "Diverse Sports Activity Recognition",
    members: "Sanjana K R, Gangavarapu Lakshmi Dhatri, Jnaneshwari, Priyanka.J",
    image: third,
  },
];

const Winners = () => {
  return (
    <div className="bg-black text-white p-10">
      {/* Heading */}
      <h1 className="text-orange-400 lg:text-5xl text-3xl font-bold text-center mb-12">
        Hackathon Winners
      </h1>

      {/* Winners Sections */}
      <div className="space-y-10">
        {winnersData.map((winner, index) => (
          <div
            key={index}
            className={`flex flex-col lg:flex-row items-stretch min-h-[450px] ${
              index % 2 === 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center items-center p-6">
              <img
                src={winner.image}
                alt={winner.rank}
                className="max-h-full object-contain"
              />
            </div>

            {/* Content */}
            <div className="w-full lg:w-1/2 px-6 flex flex-col justify-center text-center">
              <h2 className="text-3xl lg:text-4xl mb-5">{winner.rank}</h2>
              <p className="text-lg mb-5">{winner.college}</p>
              <p className="text-lg italic mb-5">{winner.project}</p>
              <p className="text-gray-400">{winner.members}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Winners;
