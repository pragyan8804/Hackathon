import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo/EntlelikaLogoOrange.png";

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsSticky(scrollTop > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`bg-black p-4 py-10 shadow-md ${
                isSticky ? "sticky top-0 z-50" : ""
            }`}
        >
            <div className="flex justify-between items-center w-10/12 mx-auto">
                <img src={logo} alt="Entelika Logo" className="h-10" />
                <nav>
                    <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        className="text-white mx-4 cursor-pointer hover:text-orange-400"
                    >
                        About
                    </Link>
                    <Link
                        to="details"
                        smooth={true}
                        duration={500}
                        className="text-white mx-4 cursor-pointer hover:text-orange-400"
                    >
                        Details
                    </Link>
                    <Link
                        to="tracks"
                        smooth={true}
                        duration={500}
                        className="text-white mx-4 cursor-pointer hover:text-orange-400"
                    >
                        Tracks
                    </Link>
                    <Link
                        to="prizes"
                        smooth={true}
                        duration={500}
                        className="text-white mx-4 cursor-pointer hover:text-orange-400"
                    >
                        Prizes
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
