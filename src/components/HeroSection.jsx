import HeroWinners from "../assets/images/HeroCollage.png";
import HomeBg from "../assets/images/HomeBg.png";
import TextMarquee from "./TextMarquee";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative bg-black text-white py-5 min-h-screen flex flex-col justify-center"
      style={{
        backgroundImage: `url(${HomeBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content Wrapper */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center w-10/12 mx-auto z-10">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={HeroWinners}
            alt="Hero Image"
            className="h-full w-full object-cover rounded"
          />
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 flex flex-col justify-center items-center text-center px-8 my-10">
          <h1 className="text-5xl font-bold mb-6">Entelika AI Hackathon</h1>
          <p className="text-2xl mb-5">Sparc 2024</p>
          <p className="mb-1">
            We are thrilled to announce that the Hack ML team from NIE College
            emerged as the winner of the Sparc 2024 Hackathon! The team included
            Ananth Prabhu T, Shreyas Nagoor, Shreedhar A Sherlekar, and Ayush
            Satpathy.
          </p>
          <p className="mb-1">
            The runner-up title also goes to Team Voiders from NIE College, with
            an impressive performance by Shivaprasad Devadiga, Vinay KV,
            Abhishek Manohar Bilagi, and Darshan Y.
          </p>
          <p className="mb-10">
            The Second runner-up was Team Mule from Reva University, Bangalore,
            showcasing the talents of a dedicated team of Sanjana K R,
            Gangavarapu Lakshmi Dhatri, Jnaneshwari, and Priyanka J.
          </p>
        </div>
      </div>

      {/* Text Marquee - Placed Outside Flex Container */}
      <div className="relative z-10 mt-5 w-full">
        <TextMarquee />
      </div>
    </section>
  );
};

export default HeroSection;
