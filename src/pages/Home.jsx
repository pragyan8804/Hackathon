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
import PoweredBySection from "../components/PoweredBySection";
import Winners from "../components/Winners";
import HackathonImages from "../components/HackathonImages";

const Home = () => {
    return (
        <>
            <Header />

            <HeroSection />

            <Winners />

            <HackathonImages />

            <EventDetails />

            <PoweredBySection />

            <TracksSection />

            <SportTrack />

            <InternTrack />

            <PrizesSection />

            <div className="bg-black">
                <TextMarquee />
            </div>

            <AboutSection />

            <Footer />
        </>
    );
};

export default Home;
