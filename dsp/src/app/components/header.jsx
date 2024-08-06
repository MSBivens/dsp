"use client";

import logoSquare from "../../../public/images/logoSquare.png";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa6";

export default function Header() {
  const navigationLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/aboutUs" },
    { label: "History", href: "/history" },
    { label: "Philanthropy", href: "/philanthropy" },
    { label: "Alumni Chapter", href: "/alumniChapter" },
    { label: "Volunteer", href: "/volunteer" },
    { label: "Donate", href: "/donate" },
    { label: "Events", href: "/events" },
    { label: "News", href: "/news" },
    { label: "Newsletter", href: "/newsletter" },
  ];

  const socialLinks = [
    { label: <FaFacebook size={24} />, href: "https://www.facebook.com/" },
    { label: <FaLinkedin size={24} />, href: "https://www.linkedin.com/" },
    { label: <FaInstagram size={24} />, href: "https://www.instagram.com/" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="mx-auto max-w-screen-xl text-center lg:py-4 ">
      <div className="container mx-auto flex justify-between items-center relative">
        <p>Logo and Socials on first</p>
        <p>Chapter and Links on second</p>
      </div>
      <div className="container mx-auto flex justify-between items-center relative">
        <div className="flex flex-wrap items-center mr-auto">
          {/* <Image
            src={logoSquare}
            alt="Gamma Iota Chapter Logo"
            width={50}
            height={50}
          /> */}
          <h1 className="text-2xl font-bold">Delta Sigma Phi</h1>

          {/* <h2 className="text-2xl font-medium">Gamma Iota Chapter</h2> */}
        </div>
        {/* Navigation Links */}
        <div className="hidden lg:flex space-x-4 nav-links mr-auto">
          {navigationLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-gray-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* Social Links */}
        <div className="hidden lg:flex space-x-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-gray-300"
            >
              {link.label}
            </a>
          ))}
        </div>
        {/* Hamburger Menu */}
        <button className="lg:hidden block" onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <div
          className={`absolute top-16 left-0 right-0 bg-white z-10 p-4 ${
            isOpen ? "block" : "hidden"
          }`}
          ref={menuRef}
        >
          <ul>
            {navigationLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block py-2 px-4 hover:bg-gray-700 text-black"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="mt-4">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="block py-2 px-4 hover:bg-gray-700 text-black"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
