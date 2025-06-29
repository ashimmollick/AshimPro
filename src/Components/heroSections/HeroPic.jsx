import React from "react";
import { PiHexagonThin } from "react-icons/pi";
const HeroPic = () => {
  return (
    <div className="h-full flex items-center justify-center">
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
    </div>
  );
};

export default HeroPic;
