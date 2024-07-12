import Image from "next/image";
import placeholderImage from "../../../public/images/placeholder.png";
import ACPeople from "../components/aCPeople.jsx";

export default function AboutUs() {
  return (
    <main>
      {/* ACB People */}
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Alumni Corporation Board
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Fiscal and operational oversight of the phsycial and monetary
              assets of Gamma Iota
            </p>
          </div>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="text-center text-gray-500 dark:text-gray-400">
              <Image
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src={placeholderImage}
                alt="Radley Peterson"
              ></Image>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Radley Peterson
              </h3>
              <p>ACB President</p>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <Image
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src={placeholderImage}
                alt="Sean Foster"
              ></Image>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Sean Foster
              </h3>
              <p>ACB Vice President</p>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <Image
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src={placeholderImage}
                alt="Grant Lund"
              ></Image>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Grant Lund
              </h3>
              <p>ACB Treasurer</p>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <Image
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src={placeholderImage}
                alt="Vacant"
              ></Image>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Vacant
              </h3>
              <p>ACB Secretary</p>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <Image
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src={placeholderImage}
                alt="Josh Rardon"
              ></Image>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Josh Rardon
              </h3>
              <p>Undergraduate President</p>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <Image
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src={placeholderImage}
                alt="Seth Rahe"
              ></Image>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Seth Rahe
              </h3>
              <p>Undergraduate President</p>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <Image
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src={placeholderImage}
                alt="Michael Bivens"
              ></Image>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Michael Bivens
              </h3>
              <p>Director of Development</p>
              <p>Webmaster</p>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <Image
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src={placeholderImage}
                alt="Vacant"
              ></Image>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Vacant
              </h3>
              <p>Director of Facilities</p>
            </div>
          </div>
        </div>
      </section>
      {/* Advising Board People */}
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Collegiate Chapter Advising Board
            </h2>
            Advisors to the undergraduate chapter, furthering the mission of
            personal and professional growth.
          </div>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="text-center text-gray-500 dark:text-gray-400">
              <Image
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src={placeholderImage}
                alt="Mil DeSilva"
              ></Image>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Mil DeSilva
              </h3>
              <p>Co-Lead Advisor</p>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <Image
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src={placeholderImage}
                alt="John Schisel"
              ></Image>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                John Schisel
              </h3>
              <p>Co-Lead Advisor</p>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <Image
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src={placeholderImage}
                alt="Stace Sievert"
              ></Image>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Stace Sievert
              </h3>
              <p>Financial Advisor</p>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <Image
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src={placeholderImage}
                alt="Neil Sims"
              ></Image>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Neil Sims
              </h3>
              <p>Vue.js Developer</p>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <Image
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src={placeholderImage}
                alt="Neil Sims"
              ></Image>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Neil Sims
              </h3>
              <p>Vue.js Developer</p>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <Image
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src={placeholderImage}
                alt="Neil Sims"
              ></Image>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Neil Sims
              </h3>
              <p>Vue.js Developer</p>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <Image
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src={placeholderImage}
                alt="Neil Sims"
              ></Image>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Neil Sims
              </h3>
              <p>Vue.js Developer</p>
            </div>
            <div className="text-center text-gray-500 dark:text-gray-400">
              <Image
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src={placeholderImage}
                alt="Neil Sims"
              ></Image>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Neil Sims
              </h3>
              <p>Vue.js Developer</p>
            </div>
          </div>
        </div>
      </section>
      {/* Alumni Chapter People */}
      <ACPeople />
      {/* Looking For Volunteers */}
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
              We&apos;re Looking for Volunteers
            </h2>
            <p className="mb-4 font-light">
              The organizations that make Gamma Iota possible are looking for
              volunteers to join. Note, this needs to be sold more, just
              placeholder text.
            </p>
            <a
              href="#"
              className="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
            >
              Learn How To Get Involved
              <svg
                className="ml-1 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      {/* Award Section TBD */}
      {/* FAQ Section */}
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Frequently asked questions
          </h2>
          <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
            <div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  How can I volunteer?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  To volunteer, please fill out the contact form or reach out to
                  ACB leadership.
                </p>
              </div>
            </div>
            <div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  How can I donate?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  See our Donate page for detailed information on how to donate
                  and where your generous donations go.
                </p>
              </div>
            </div>
            <div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  What is the ACB?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  The Alumni Corporation Board (ACB) is responsible for the
                  fiscal and operational oversight of the phsycial and monetary
                  assets of Gamma Iota. They are the legal owners of the chapter
                  facility.
                </p>
              </div>
            </div>
            <div>
              <div className="mb-10">
                <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                  <svg
                    className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  What is the CCAB?
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  The Collegiate Chapter Advising Board (CCAB) are the primary
                  advisors to the undergraduate chapter, furthering the mission
                  of personal and professional growth by supporting the members
                  and sharing their experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
