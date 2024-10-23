import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "../assets/logo/EntlelikaLogoOrange.png";
import menuIcon from "../assets/icon/MenuIcon.png";
import closeIcon from "../assets/icon/CloseIcon.png";
import facebook_logo from "../assets/logo/FacebookLogo.png";
import twitter_logo from "../assets/logo/TwitterLogo.png";
import linkedin_logo from "../assets/logo/LinkedinLogo.png";
import instagram_logo from "../assets/logo/InstagramLogo.png";

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsSticky(scrollTop > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header
            className={`bg-black p-4 py-5 shadow-md ${
                isSticky ? "sticky top-0 z-50" : ""
            }`}
        >
            <div className="flex justify-between items-center w-10/12 mx-auto">
                <Link to="home" smooth={true} duration={500}>
                    <img
                        src={logo}
                        alt="Entelika Logo"
                        className="h-10 cursor-pointer"
                    />
                </Link>
                <nav className="hidden md:flex">
                    <Link
                        to="details"
                        smooth={true}
                        duration={500}
                        className="text-white mx-4 cursor-pointer hover:text-orange-400"
                    >
                        Event Info
                    </Link>
                    <Link
                        to="partners"
                        smooth={true}
                        duration={500}
                        className="text-white mx-4 cursor-pointer hover:text-orange-400"
                    >
                        Our Partners
                    </Link>
                    <Link
                        to="tracks"
                        smooth={true}
                        duration={500}
                        className="text-white mx-4 cursor-pointer hover:text-orange-400"
                    >
                        Value Streams
                    </Link>
                    <Link
                        to="prizes"
                        smooth={true}
                        duration={500}
                        className="text-white mx-4 cursor-pointer hover:text-orange-400"
                    >
                        Awards
                    </Link>

                    <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        className="text-white mx-4 cursor-pointer hover:text-orange-400"
                    >
                        About
                    </Link>
                </nav>
                <div className="md:hidden">
                    <img
                        src={menuIcon}
                        alt="Open Menu"
                        className="h-8 w-8 cursor-pointer"
                        onClick={toggleMenu}
                    />
                </div>
            </div>

            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={closeMenu}
                ></div>
            )}

            <div
                className={`fixed top-0 right-0 h-full bg-black text-white w-64 transform ${
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out z-50`}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-end my-5 mx-10">
                    <img
                        src={closeIcon}
                        alt="Close Menu"
                        className="h-10 w-10 cursor-pointer"
                        onClick={toggleMenu}
                    />
                </div>
                <div className="flex flex-col justify-around h-full p-4">
                    <nav className="flex flex-col items-center space-y-4 mt-10 text-2xl">
                        <Link
                            to="details"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer hover:text-orange-400"
                            onClick={toggleMenu}
                        >
                            Event Info
                        </Link>
                        <Link
                            to="partners"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer hover:text-orange-400"
                            onClick={toggleMenu}
                        >
                            Our Partners
                        </Link>
                        <Link
                            to="tracks"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer hover:text-orange-400"
                            onClick={toggleMenu}
                        >
                            Value Streams
                        </Link>
                        <Link
                            to="prizes"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer hover:text-orange-400"
                            onClick={toggleMenu}
                        >
                            Awards
                        </Link>

                        <Link
                            to="about"
                            smooth={true}
                            duration={500}
                            className="cursor-pointer hover:text-orange-400"
                            onClick={toggleMenu}
                        >
                            About
                        </Link>
                    </nav>
                    <div className="flex justify-center space-x-4 mt-10">
                        <a
                            href="https://www.facebook.com/Entelika/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={facebook_logo}
                                alt="Facebook"
                                className="h-6 w-6"
                            />
                        </a>
                        <a
                            href="https://x.com/EntelikaLLP"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={twitter_logo}
                                alt="Twitter"
                                className="h-6 w-6"
                            />
                        </a>
                        <a
                            href="https://in.linkedin.com/company/entelika"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={linkedin_logo}
                                alt="LinkedIn"
                                className="h-6 w-6"
                            />
                        </a>
                        <a
                            href="https://www.instagram.com/entelikallp/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={instagram_logo}
                                alt="Instagram"
                                className="h-6 w-6"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
