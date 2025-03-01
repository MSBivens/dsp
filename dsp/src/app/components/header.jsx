"use client";

import Link from "next/link";
import { useState } from "react";

import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa6";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="mx-auto max-w-screen-xl text-center h-24">
      <div className="flex items-center justify-between px-4 mx-auto h-full w-full">
        <div className="flex justify-center items-center pt-4">
          <h1>
            <a href="/" className="text-green-600">
              ΔΣΦ Gamma Iota
            </a>
          </h1>
        </div>
        <div className="hidden lg:flex">
          <ul className="hidden lg:flex lg:space-x-4 ">
            <Link
              href="/about"
              className="block pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              <li>About</li>
            </Link>
            <Link
              href="/history"
              className="block pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              <li>History</li>
            </Link>
            <Link
              href="/philanthropy"
              className="block pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              <li>Philanthropy</li>
            </Link>
            <Link
              href="/alumni"
              className="block pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              <li>Alumni</li>
            </Link>
            <Link
              href="/volunteer"
              className="block pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              <li>Volunteer</li>
            </Link>
            <Link
              href="/donate"
              className="block pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              <li>Donate</li>
            </Link>
            <Link
              href="/events"
              className="block pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              <li>Events</li>
            </Link>
            <Link
              href="/news"
              className="block pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              <li>News</li>
            </Link>
            <Link
              href="/newsletter"
              className="block pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
            >
              <li>Newsletter</li>
            </Link>
          </ul>
        </div>
        <div className="hidden lg:flex flex-row justify-center items-center">
          <a href="https://www.instagram.com/" className="mr-4">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.facebook.com/">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.linkedin.com/" className="ml-4">
            <FaLinkedin size={24} />
          </a>
        </div>
        <div onClick={handleNav} className="lg:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-[65%] lg:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer">
            <AiOutlineClose size={24} />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul>
            <Link href="/about">
              About
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              ></li>
            </Link>
            <Link href="/history">
              History
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              ></li>
            </Link>
            <Link href="/philanthropy">
              Philanthropy
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              ></li>
            </Link>
            <Link href="/alumni">
              Alumni
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              ></li>
            </Link>
            {/* Issue////////////////////////////////////// */}
            <Link href="/volunteer">
              Volunteer
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              ></li>
            </Link>
            <Link href="/donate">
              Donate
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              ></li>
            </Link>
            {/* Issue////////////////////////////////////// */}
            <Link href="/events">
              Events
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              ></li>
            </Link>
            <Link href="/news">
              News
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              ></li>
            </Link>
            <Link href="/newsletter">
              Newsletter
              <li
                onClick={() => setMenuOpen(false)}
                className="py-4 cursor-pointer"
              ></li>
            </Link>
          </ul>
        </div>
        <div className="flex flex-row justify-center pt-10 items-center">
          <a href="https://www.instagram.com/" className="mr-6">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.facebook.com/">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.linkedin.com/" className="ml-6">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
}
