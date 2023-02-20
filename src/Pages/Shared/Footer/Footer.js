import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
    <footer className="px-24 pt-10 bg-secondary text-white">
     <div className="flex justify-between footer">
      <div className="flex flex-col">
        <span className="footer-title">Services</span>
        <Link className="hover:text-primary hover:font-bold">Branding</Link>
        <Link className="hover:text-primary hover:font-bold">Design</Link>
        <Link className="hover:text-primary hover:font-bold">Marketing</Link>
        <Link className="hover:text-primary hover:font-bold">Advertisement</Link>
      </div>
      <div className="flex flex-col">
        <span className="footer-title">Company</span>
        <Link className="hover:text-primary hover:font-bold">About us</Link>
        <Link className="hover:text-primary hover:font-bold">Contact</Link>
        <Link className="hover:text-primary hover:font-bold">Jobs</Link>
        <Link className="hover:text-primary hover:font-bold">Press kit</Link>
      </div>
      <div className="flex flex-col">
        <span className="footer-title">Legal</span>
        <Link className="hover:text-primary hover:font-bold">Terms of use</Link>
        <Link className="hover:text-primary hover:font-bold">Privacy policy</Link>
        <Link className="hover:text-primary hover:font-bold">Cookie policy</Link>
      </div>
     </div>
      <div className="text-center pt-16 lg:p-16 mb-12 lg:mb-0">
        <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
      </div>
    </footer>
  </div>

  );
};

export default Footer;
