import Image from "next/image";

import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="max-w-screen-xl mx-auto p-4 ">
      <hr className=" border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Gamma Iota Chapter
            </span>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Our Brotherhood
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="/about" className="hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/history" className="hover:underline">
                    History
                  </a>
                </li>
                <li>
                  <a href="/philanthropy" className="hover:underline">
                    Philanthropy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Get Involved
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="/alumni" className="hover:underline ">
                    Alumni
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/volunteer" className="hover:underline ">
                    Volunteer
                  </a>
                </li>
                <li>
                  <a href="/donate" className="hover:underline">
                    Donate
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Stay Connected
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="/events" className="hover:underline">
                    Events
                  </a>
                </li>
                <li className="mb-4">
                  <a href="/news" className="hover:underline">
                    News
                  </a>
                </li>
                <li>
                  <a href="/newsletter" className="hover:underline">
                    Newsletter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 Delta Sigma Phi, Gamma Iota™. All Rights Reserved.
          </span>
          <div>
            <a href="/privacy" className="mr-4">
              Privacy Policy
            </a>
            <a href="/sitemap">Sitemap</a>
          </div>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="https://www.instagram.com/deltasig_idaho">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.facebook.com/deltasigvandals">
              <FaFacebook size={24} />
            </a>
            <a href="https://www.linkedin.com/groups/13505181/">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
