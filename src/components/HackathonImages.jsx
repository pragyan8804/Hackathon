import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HackathonImageLandscape1 from "../assets/images/hackathonImages/HackathonImageLandscape1.jpeg";
import HackathonImageLandscape2 from "../assets/images/hackathonImages/HackathonImageLandscape2.jpeg";
import HackathonImageLandscape3 from "../assets/images/hackathonImages/HackathonImageLandscape3.jpeg";
import HackathonImageLandscape4 from "../assets/images/hackathonImages/HackathonImageLandscape4.jpeg";
import HackathonImageLandscape5 from "../assets/images/hackathonImages/HackathonImageLandscape5.jpeg";
import HackathonImageLandscape6 from "../assets/images/hackathonImages/HackathonImageLandscape6.jpeg";
import HackathonImageLandscape7 from "../assets/images/hackathonImages/HackathonImageLandscape7.jpeg";
import HackathonImageLandscape8 from "../assets/images/hackathonImages/HackathonImageLandscape8.jpeg";
import HackathonImagePortrait1 from "../assets/images/hackathonImages/HackathonImagePortrait1.jpeg";
import HackathonImagePortrait2 from "../assets/images/hackathonImages/HackathonImagePortrait2.jpeg";
import HackathonImagePortrait3 from "../assets/images/hackathonImages/HackathonImagePortrait3.jpeg";
import HackathonImagePortrait4 from "../assets/images/hackathonImages/HackathonImagePortrait4.jpeg";
import { useEffect } from "react";

const hackathonImages = [
  { id: 1, src: HackathonImageLandscape1, type: "landscape" },
  { id: 2, src: HackathonImageLandscape3, type: "landscape" },
  { id: 3, src: HackathonImagePortrait4, type: "portrait" },
  { id: 4, src: HackathonImagePortrait2, type: "portrait" },
  { id: 5, src: HackathonImageLandscape7, type: "landscape" },
  { id: 6, src: HackathonImageLandscape4, type: "landscape" },
  { id: 7, src: HackathonImageLandscape6, type: "landscape" },
  { id: 8, src: HackathonImageLandscape8, type: "landscape" },
  { id: 9, src: HackathonImagePortrait3, type: "portrait" },
  { id: 10, src: HackathonImagePortrait1, type: "portrait" },
  { id: 11, src: HackathonImageLandscape5, type: "landscape" },
  { id: 12, src: HackathonImageLandscape2, type: "landscape" },
];

const HackathonImages = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024); // lg breakpoint in Tailwind
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className="bg-black py-16 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-orange-400 text-center mb-12">
          Hackathon Moments
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
          {hackathonImages.map((image) => (
            <motion.div
              key={image.id}
              layoutId={image.id.toString()}
              onClick={() => setSelectedId(image.id)}
              className={`relative overflow-hidden rounded-2xl ${
                image.type === "landscape" ? "lg:col-span-2" : "lg:col-span-1"
              } h-72 cursor-pointer`}
            >
              <motion.img
                src={image.src}
                alt={`Hackathon ${image.id}`}
                className="object-contain lg:object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </motion.div>
          ))}
        </div>

        {isLargeScreen && (
          <AnimatePresence>
            {selectedId && (
              <motion.div
                layoutId={selectedId.toString()}
                className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80 z-50"
                onClick={() => setSelectedId(null)}
              >
                <motion.img
                  src={
                    hackathonImages.find((img) => img.id === selectedId)?.src
                  }
                  alt={`Hackathon ${selectedId}`}
                  className="object-cover rounded-2xl max-w-screen-lg max-h-screen"
                />
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    </section>
  );
};

export default HackathonImages;
