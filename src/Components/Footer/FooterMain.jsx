import React from "react";
const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experince", section: "experince" },
  { link: "Project", section: "project" },
  { link: "Contact", section: "contact" },
];
const FooterMain = () => {
  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>
      <div className="md:flex sm:hidden justify-between mx-auto mt-4 max-w-[1200px]">
        <p className="text-3xl text-lightGrey">Ashim Mollick</p>
        <ul className="flex gap-4 text-lightGrey text-xl">
          {links.map((item, index) => {
            return (
              <li key={index}>
                <a
                  href="#"
                  className="hover:text-white transition-all duration-500 cursor-pointer"
                >
                  {item.link}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown">
        © 2024 AshimMollick | All Rights Reserved.
      </p>
    </div>
  );
};

export default FooterMain;
