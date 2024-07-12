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

const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <AboutSection />
            <EventDetails />
            <RuleSection />
            <PrizesSection />
            <TracksSection />
            <SportTrack />
            <InternTrack />
            <Footer />
        </>
    );
};

export default Home;
