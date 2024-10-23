import { motion } from "framer-motion";
import React from "react";

const MovingLineBorder = ({ children }) => {
    return (
        <div className="relative border-4 border-orange-400 rounded-lg">
            <motion.div
                className="absolute inset-0 rounded-lg"
                style={{
                    border: "4px solid transparent",
                    borderImage:
                        "linear-gradient(90deg, #ff6f61, #ffa500, #ffbd59, #f0e68c, #ffa500) 1",
                    borderWidth: "4px",
                }}
                initial={{ x: 0, y: 0 }}
                animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
                transition={{
                    ease: "linear",
                    duration: 8,
                    repeat: Infinity,
                }}
            />
            <div className="relative z-10 p-6 bg-black rounded-lg">
                {children}
            </div>
        </div>
    );
};

export default MovingLineBorder;
