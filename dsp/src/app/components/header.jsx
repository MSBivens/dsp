import Image from "next/image";

import logoSquare from "../../../public/images/logoSquare.png";

export default function Header() {
  return (
    <header className="max-w-screen-xl mx-auto p-4 ">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com" className="flex items-center">
              <Image src={logoSquare} className="w-56 h-36" alt="Logo" />

              {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Flowbite
              </span> */}
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Our Brotherhood
              </h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li className="mb-4">
                  <a href="/aboutUs" className="hover:underline">
                    About Us
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
                  <a href="/alumniChapter" className="hover:underline ">
                    Alumni Chapter
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
      </div>
    </header>
  );
}
