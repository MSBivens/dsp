import Image from "next/image";

import placeholderImage from "../../../public/images/placeholder.png";

export default function volunteer() {
  return (
    <main>
      {/* Feature */}
      <section class="py-24 ">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
            <div class="relative w-full text-center lg:text-left lg:w-2/4">
              <h2 class="text-4xl font-bold text-gray-900 leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">
                Volunteer Opportunities That Make a Difference
              </h2>
            </div>
            <div class="relative w-full text-center  lg:text-left lg:w-2/4">
              <p class="text-lg font-normal text-gray-500 mb-5">
                Discover the various volunteer opportunities available at Gamma
                Iota and how your contribution can help us build better men.
              </p>
              <a
                href="#"
                class="flex flex-row items-center justify-center gap-2 text-base font-semibold text-indigo-600 lg:justify-start hover:text-indigo-700 "
              >
                Volunteer Today
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
                    stroke="#4F46E5"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="flex justify-center items-center  gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            <div class="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-indigo-600">
              <h4 class="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Mentorship
              </h4>
              <p class="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                The Collegiate Chapter Advisory Board (CCAB) is a group of
                dedicated mentors who provide guidance and support to the
                undergraduate members.
              </p>
            </div>
            <div class="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-indigo-600">
              <h4 class="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Event Planning
              </h4>
              <p class="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                The Alumni Chapter hosts a variety of events throughout the
                year, including the Bike to Boise Alumni Dinner, Homecoming
                Receptions, and our Anniversary Celebrations.
              </p>
            </div>
            <div class="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-indigo-600">
              <h4 class="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Operations
              </h4>
              <p class="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                The Alumni Corporation Board (ACB) is responsible for the fiscal
                and legal oversight of Gamma Iota's assets and operations.
              </p>
            </div>
            <div class="group relative w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-64 xl:p-7 xl:w-1/4 hover:bg-indigo-600">
              <h4 class="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 group-hover:text-white">
                Fundraising
              </h4>
              <p class="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 group-hover:text-white">
                The Gamma Iota and Headquarters scholarship funds are vital to
                the continued success of our members.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ */}
      <div class="py-4 max-w-screen-lg mx-auto bg-white">
        <div class="text-center mb-16">
          <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            Frequently Asked <span class="text-indigo-600">Questions</span>
          </h3>
        </div>

        <div class="px-10 sm:px-16 sm:flex items-start mb-10">
          <h3 class="py-3 font-bold text-lg text-gray-900 w-3/12">Volunteer</h3>
          <div class="w-9/12">
            <div class="flex items-start mb-8">
              <div class="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                <svg
                  width="24px"
                  fill="white"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g data-name="Layer 2">
                    <g data-name="menu-arrow">
                      <rect
                        width="24"
                        height="24"
                        transform="rotate(180 12 12)"
                        opacity="0"
                      ></rect>
                      <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                      <circle cx="12" cy="19" r="1"></circle>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="text-md">
                <h1 class="text-gray-900 font-semibold mb-2">
                  How can I volunteer?
                </h1>
                <p class="text-gray-500 text-sm">
                  To volunteer, please fill out the contact form or reach out to
                  ACB leadership.
                </p>
              </div>
            </div>
            <div class="flex items-start mb-8">
              <div class="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                <svg
                  width="24px"
                  fill="white"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g data-name="Layer 2">
                    <g data-name="menu-arrow">
                      <rect
                        width="24"
                        height="24"
                        transform="rotate(180 12 12)"
                        opacity="0"
                      ></rect>
                      <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                      <circle cx="12" cy="19" r="1"></circle>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="text-md">
                <h1 class="text-gray-900 font-semibold mb-2">
                  Are there short-term volunteer opportunities?
                </h1>
                <p class="text-gray-500 text-sm">
                  Yes! If you would like to volunteer for a specific event or
                  project, please reach out to the ACB.
                </p>
              </div>
            </div>
            <div class="flex items-start mb-8">
              <div class="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                <svg
                  width="24px"
                  fill="white"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g data-name="Layer 2">
                    <g data-name="menu-arrow">
                      <rect
                        width="24"
                        height="24"
                        transform="rotate(180 12 12)"
                        opacity="0"
                      ></rect>
                      <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                      <circle cx="12" cy="19" r="1"></circle>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="text-md">
                <h1 class="text-gray-900 font-semibold mb-2">
                  What are the time commitments?
                </h1>
                <p class="text-gray-500 text-sm">
                  Time commitments vary depending on the volunteer opportunity.
                  Our leaderships can provide specific information about the
                  various roles and projects.
                </p>
              </div>
            </div>
            <div class="flex items-start mb-8">
              <div class="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                <svg
                  width="24px"
                  fill="white"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g data-name="Layer 2">
                    <g data-name="menu-arrow">
                      <rect
                        width="24"
                        height="24"
                        transform="rotate(180 12 12)"
                        opacity="0"
                      ></rect>
                      <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                      <circle cx="12" cy="19" r="1"></circle>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="text-md">
                <h1 class="text-gray-900 font-semibold mb-2">
                  What roles are available?
                </h1>
                <p class="text-gray-500 text-sm">
                  We have a variety of volunteeer roles available. Check out our
                  About Us page to see some of these, or fill out the contact
                  form to learn more.
                </p>
              </div>
            </div>
            <div class="flex items-start mb-8">
              <div class="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                <svg
                  width="24px"
                  fill="white"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g data-name="Layer 2">
                    <g data-name="menu-arrow">
                      <rect
                        width="24"
                        height="24"
                        transform="rotate(180 12 12)"
                        opacity="0"
                      ></rect>
                      <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                      <circle cx="12" cy="19" r="1"></circle>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="text-md">
                <h1 class="text-gray-900 font-semibold mb-2">
                  How do I get involved?
                </h1>
                <p class="text-gray-500 text-sm">
                  To get inovlved, please fill out the contact form or reach out
                  to leadership directly.
                </p>
              </div>
            </div>
            <div class="flex items-start mb-8">
              <div class="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                <svg
                  width="24px"
                  fill="white"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g data-name="Layer 2">
                    <g data-name="menu-arrow">
                      <rect
                        width="24"
                        height="24"
                        transform="rotate(180 12 12)"
                        opacity="0"
                      ></rect>
                      <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                      <circle cx="12" cy="19" r="1"></circle>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="text-md">
                <h1 class="text-gray-900 font-semibold mb-2">
                  I live far away, can I still volunteer?
                </h1>
                <p class="text-gray-500 text-sm">
                  Yes! Nearly every volunteer lives and volunteers distantly
                  from Moscow.
                </p>
              </div>
            </div>
            <div class="flex items-start mb-8">
              <div class="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                <svg
                  width="24px"
                  fill="white"
                  height="24px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g data-name="Layer 2">
                    <g data-name="menu-arrow">
                      <rect
                        width="24"
                        height="24"
                        transform="rotate(180 12 12)"
                        opacity="0"
                      ></rect>
                      <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                      <circle cx="12" cy="19" r="1"></circle>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="text-md">
                <h1 class="text-gray-900 font-semibold mb-2">
                  What are the time commitments?
                </h1>
                <p class="text-gray-500 text-sm">
                  Time commitments vary depending on the volunteer opportunity.
                  Our leaderships can provide specific information about the
                  various roles and projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Make a Difference Today */}
      <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Make a Difference Today
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Join us in volunterring and make a postive impact in the lives of
              our undergraduate members and fellow alumni.
            </p>
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get Started
              <svg
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image src={placeholderImage} alt="Placeholder Image"></Image>{" "}
          </div>
        </div>
      </section>
    </main>
  );
}
