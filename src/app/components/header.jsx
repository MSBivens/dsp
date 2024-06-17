"use client";

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl">Delta Sigma Phi, Gamma Iota</div>
        <div className="hidden lg:flex space-x-4">
          <a className="text-gray-300 hover:text-white" href="/">
            Home
          </a>
          <a className="text-gray-300 hover:text-white" href="/about">
            About Us
          </a>
          <a className="text-gray-300 hover:text-white" href="/services">
            Alumni Chapter
          </a>
          <a className="text-gray-300 hover:text-white" href="/contact">
            Events
          </a>
          <a className="text-gray-300 hover:text-white" href="/">
            News
          </a>
          <a className="text-gray-300 hover:text-white" href="/about">
            Gamma Eye
          </a>
          <a className="text-gray-300 hover:text-white" href="/services">
            History
          </a>
          <a className="text-gray-300 hover:text-white" href="/contact">
            Philanthropy
          </a>
        </div>
        <div className="hidden lg:flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            Donate
          </button>
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Volunteer
          </button>
        </div>
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a className="block text-gray-300 hover:text-white" href="/">
              Home
            </a>
            <a className="block text-gray-300 hover:text-white" href="/about">
              About Us
            </a>
            <a
              className="block text-gray-300 hover:text-white"
              href="/services"
            >
              Alumni Chapter
            </a>
            <a className="block text-gray-300 hover:text-white" href="/contact">
              Events
            </a>
            <a className="block text-gray-300 hover:text-white" href="/">
              News
            </a>
            <a className="block text-gray-300 hover:text-white" href="/about">
              Gamma Eye
            </a>
            <a
              className="block text-gray-300 hover:text-white"
              href="/services"
            >
              History
            </a>
            <a className="block text-gray-300 hover:text-white" href="/contact">
              Philanthropy
            </a>
          </div>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button className="block w-full text-left bg-blue-500 text-white px-4 py-2 rounded mb-2">
              Donate
            </button>
            <button className="block w-full text-left bg-green-500 text-white px-4 py-2 rounded">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
