import UpcomingEvents from "../components/upcomingEvents.jsx";

import ACPeople from "../components/aCPeople.jsx";

export default function alumni() {
  return (
    <main>
      {/* Hero Section */}
      <section>
        <div class="pt-20 mx-auto max-w-screen-xl text-center ">
          <h1 class="mb-4 font-extrabold tracking-tight leading-none">
            Connect with Brothers Today!
          </h1>
          <p class="mb-8 sm:px-16 xl:px-48 ">
            The Gamma Iota Alumni Chapter strives for the betterment of the
            alumni experience for every brother by providing opportunities for
            networking, support, and social engagement.
          </p>
          <div class="flex flex-colspace-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <button className="cta-button inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center  rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              <a href="/events">
                <p className="cta-text">Check Out The Next Event!</p>
              </a>
            </button>
          </div>
        </div>
      </section>
      {/* Upcoming Events */}
      <UpcomingEvents />
      {/* Reach Out & Volunteer*/}
      <section>
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="grid pt-8 text-left md:gap-16  md:grid-cols-2">
            <div>
              <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <h2 class="mb-4 tracking-tight font-extrabold ">
                  Reach Out To Us
                </h2>
                <p class="mx-auto mb-8 max-w-2xl font-light md:mb-12 ">
                  Looking to reconnect, learn more, or just say hi? We&apos;d
                  love to hear from you!
                </p>
                <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 ">
                  <button className="cta-button mt-auto">
                    <a href="https://forms.gle/ppJWRxMXeTaAQxLQ7">
                      <p className="cta-text">Contact Us</p>
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <h2 class="mb-4 tracking-tight font-extrabold ">
                  Make A Difference
                </h2>
                <p class="mx-auto mb-8 max-w-2xl font-light md:mb-12 ">
                  Your time and talents can help us build the future.
                </p>
                <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 ">
                  <button className="cta-button mt-auto">
                    <a href="https://forms.gle/ppJWRxMXeTaAQxLQ7">
                      <p className="cta-text">Volunteer Today</p>
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Alumni Chapter People */}
      {/* <ACPeople /> */}
      {/* Resources */}
      <section>
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 class="mb-4 ttracking-tight font-extrabold ">
              Headquarters Resources
            </h2>
            <p class="mb-5 font-light ">
              As a Fraternity, Delta Sigma Phi offers resources to support
              brothers of all backgrounds and interests.
            </p>
          </div>
          <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 class="mb-4 text-2xl font-semibold">The LAMP</h3>
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400 mb-8">
                A wealth of educational and professional resources for brothers.
              </p>
              <ul role="list" class="mb-8 space-y-4 text-left">
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Volunteer Training</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Personal Development</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Professional Development</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Foundation Information</span>
                </li>
              </ul>
              <button className="cta-button mt-auto">
                <a href="https://mydeltasig.org/">
                  <p className="cta-text">Access via MyDeltaSig</p>
                </a>
              </button>
            </div>
            <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 class="mb-4 text-2xl font-semibold">PerkSpot</h3>
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400 mb-8">
                Access to discounts and exclusive offers on all kinds of goods
                and services, free for members!
              </p>
              <ul role="list" class="mb-8 space-y-4 text-left">
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Travel Deals</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Special Insurance Rates</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Tickets & Entertainment</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Office & Business</span>
                </li>
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Cable and Home Services</span>
                </li>
              </ul>
              <button className="cta-button mt-auto">
                <a href="https://mydeltasig.org/">
                  <p className="cta-text">Access via MyDeltaSig</p>
                </a>
              </button>
            </div>
            <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 class="mb-4 text-2xl font-semibold">Graduate Scholarships</h3>
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400 mb-8">
                Headquarters offers annual scholarships for Delta Sigs looking
                to attend graduate school.
              </p>
              <ul role="list" class="mb-8 space-y-4 text-left">
                <li class="flex items-center space-x-3">
                  <svg
                    class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>Graduate Scholarships</span>
                </li>
              </ul>
              <button className="cta-button mt-auto">
                <a href="https://deltasig.org/scholarships/">
                  <p className="cta-text">Learn More</p>
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
