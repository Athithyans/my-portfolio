"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10 ">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m on the lookout for fresh prospects, 
          my inbox is always wide open. 
          If you have a query or just fancy a chat, I&apos;ll do my utmost to respond!
        </p>
        <div className="socials flex flex-row gap-5 mt-10">
          <Link href="https://github.com/Athithyans"  target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://linkedin.com/in/athithyans" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      
      <div>
      <div className="social text-[#ADB7BE] flex px-3 py-2 mt-9">
        The below contact details should not be used for illegal 
        activities such as hacking into systems without permission
        or sending unsolicited emails. Please respect privacy and ethical guidelines.
      </div>
      
      <div className="socials flex text-[#ADB7BE] font-bold flex-col gap-2 mt-6 px-3 py-2">
      <h1>Name: Athithyan</h1>
      <p>Email: athithyans123@gmail.com</p>
      <p>Contact: +91 7092351820</p>
    </div>
      </div>
    </section>
  );

};
export default EmailSection;