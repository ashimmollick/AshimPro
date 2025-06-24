import React from "react";
import { LuArrowDownRight } from "react-icons/lu";
const NavbarBtn = () => {
  return (
    <button className="px-4 py-2 rounded-full text-xl font-bold font-body text-white border-cyan border flex items-center gap-1 bg-gradient-to-t from-cyan to-orange   hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-cyanShadow">
      Hire me
      <LuArrowDownRight />
    </button>
  );
};

export default NavbarBtn;
