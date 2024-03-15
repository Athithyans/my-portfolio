import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer bg-gray-900 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">ATHITHYAN</h2>
          <p className="text-sm text-gray-400">Web Developer & UI/UX Designer</p>
        </div>
        <div className="text-gray-400">
          <Link href="/#contact">
            <div className="text-[#ADB7BE] hover:text-gray-300">Contact me for any inquiry</div>
          </Link>
        </div>
      </div>
      <div className="text-center text-sm mt-4">
        <p>&copy; {new Date().getFullYear()} ATHITHYAN. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
