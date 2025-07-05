import React from "react";
import SingleContactSocial from "./SingleContactSocial";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial Link="#" Icon={FaLinkedinIn} />
      <SingleContactSocial Link="#" Icon={FaGithub} />
      <SingleContactSocial Link="#" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
