import React from "react";
import { motion } from 'motion/react';
import { fadeIn } from "../../../src/framerMotion/variants";
import { PiHexagonThin } from "react-icons/pi";
const HeroPic = () => {
  return (
    <motion.div 
    variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
    className="h-full flex items-center justify-center">
      <div>
        <img
          src="../../../public/images/HexaPic.png"
          alt="Ashim Mollick"
          className="max-h-[450px] w-auto "
        />
      </div>
      
      <div className="absolute -z-10 flex items-center overflow-hidden justify-center animate-pulse">
        <PiHexagonThin className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan opacity-70 blur-lg  animate-[spin_20s_linear_infinite]" />
      </div>
    </motion.div>
  );
};

export default HeroPic;
