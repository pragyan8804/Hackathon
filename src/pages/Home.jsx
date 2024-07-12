import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import EventDetails from "../components/EventDetails";
import TracksSection from "../components/TracksSection";
import PrizesSection from "../components/PrizesSection";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Header />
            <HeroSection />
            <AboutSection />
            <EventDetails />
            <TracksSection />
            <PrizesSection />
            <Footer />
        </>
    );
};

export default Home;
