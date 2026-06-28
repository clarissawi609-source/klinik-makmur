import React from "react";
import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            At Klinik Makmur Jaya, we are committed to providing trusted
            healthcare services with experienced medical professionals and
            modern facilities. Every patient receives personalized attention,
            compassionate care, and quality treatment to support a healthier
            community.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 text-[#2E7D32]">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 text-[#2E7D32]">
            GET IN TOUCH
          </p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+62 812-3456-7890</li>
            <li>info@klinikmakmurjaya.com</li>
            <li className="cursor-pointer">Instagram</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          © 2026 Klinik Makmur Jaya. Website developed by Rissa. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
