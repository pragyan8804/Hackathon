import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import EventDetails from "../components/EventDetails";
import TracksSection from "../components/TracksSection";
import PrizesSection from "../components/PrizesSection";
import Footer from "../components/Footer";
import SportTrack from "../components/SportTrack";
import InternTrack from "../components/InternTrack";
import RuleSection from "../components/RuleSection";
import TextMarquee from "../components/TextMarquee";

const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            {/* <AboutSection /> */}
            <AboutSection />
            {/* <EventDetails /> */}
            <EventDetails />
            {/* <RuleSection /> */}
            {/* <PrizesSection /> */}
            <div className="bg-black">
                <TextMarquee />
            </div>
            <PrizesSection />
            <TracksSection />
            {/* <SportTrack /> */}
            <SportTrack />
            {/* <InternTrack /> */}
            <InternTrack />
            <Footer />
        </>
    );
};

export default Home;
