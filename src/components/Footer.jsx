import React from "react";

import WhiteLogo from "../assets/logo/EntlelikaLogoWhite.png";
import facebook_logo from "../assets/logo/FacebookLogo.png";
import twitter_logo from "../assets/logo/TwitterLogo.png";
import linkedin_logo from "../assets/logo/LinkedinLogo.png";
import instagram_logo from "../assets/logo/InstagramLogo.png";

const Footer = () => {
    return (
        <footer className="bg-orange-400 text-white p-4 text-center">
            <div className="flex sm:flex-row flex-col justify-between items-center w-10/12 mx-auto">
                <img src={WhiteLogo} alt="Entelika Logo" className="h-10" />
                <div className="flex space-x-4">
                    <a
                        href="https://www.facebook.com/Entelika/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
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
                        className="hover:underline"
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
                        className="hover:underline"
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
                        className="hover:underline"
                    >
                        <img
                            src={instagram_logo}
                            alt="Instagram"
                            className="h-6 w-6"
                        />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
