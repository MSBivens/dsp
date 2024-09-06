import Image from "next/image";
import placeholderImage from "../../../public/images/placeholder.png";
import ACPeople from "../components/aCPeople.jsx";

import crest from "../../../public/images/crest.png";
import personPlaceholder from "../../../public/images/personPlaceholder.jpg";
import acbPresident from "../../../public/images/acbpresident.jpg";
import acbVP from "../../../public/images/acbvp.jpg";
import acbtreasurer from "../../../public/images/acbtreasurer.jpg";
import acbSecretary from "../../../public/images/acbsecretary.jpg";
import undergradPresident from "../../../public/images/undergradPresident.jpg";
import undergradTreasurer from "../../../public/images/undergradTreasurer.jpg";
import acbDoC from "../../../public/images/acbDoC.jpg";
import acbDoD from "../../../public/images/acbDoD.jpg";

export default function About() {
  return (
    <main>
      {/* MVV */}
      <section>
        <div className="gap-16 py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="mb-4">
            <h1 className="mb-4 tracking-tight font-extrabold ">
              Mission &amp; Vision
            </h1>
            <p className="mb-4">
              Our mission is to empower and encourage our members to become
              Better Men – men of culture, men of harmony, and men of
              friendship. Our vision is to become America&apos;s leading
              fraternity, with an unparalleled leadership experience; recognized
              as among the most respected and influential organizations on
              campuses; and a culture that compels all living members to
              actively participate.
            </p>
            <div className="flex justify-center">
              <Image
                className="rounded-lg"
                src={crest}
                alt="Placeholder Image"
                width={400}
                height={400}
              ></Image>
            </div>
          </div>
          <div>
            <h2>Our Core Values</h2>
            <p className="mt-4">
              Delta Sigma Phi is a values-based membership organization that
              seeks to enrich the lives of our members and all mankind. We
              believe in—and built Vision 2025 around—our three historical
              values:
            </p>
            <p className="mt-4">
              <b>Culture</b> | Encourage the pursuit of knowledge and
              intellectual development in our chapters and members.
            </p>
            <p className="mt-4">
              <b>Harmony</b> | Commit to high standards of moral conduct and
              bettering ourselves and the world around us.
            </p>
            <p className="mt-4">
              <b>Friendship</b> | Form lifelong bonds based on the values of our
              ritual and secured by honesty, integrity and care.
            </p>
          </div>
        </div>
      </section>
      {/* ACB People */}
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center ">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
              Alumni Corporation Board
            </h2>
            <p>
              Providing fiscal and operational oversight of the physical and
              monetary assets of Gamma lota
            </p>
          </div>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="text-center ">
              <Image
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src={acbPresident}
                alt="Radley Peterson"
              ></Image>
              <h3 className="mb-1 tracking-tight ">Radley Peterson</h3>
              <p>ACB President</p>
            </div>
            <div className="text-center ">
              <Image
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src={acbVP}
                alt="Sean Foster"
              ></Image>
              <h3 className="mb-1 tracking-tight ">Sean Foster</h3>
              <p>ACB Vice President</p>
            </div>
            <div className="text-center ">
              <Image
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src={acbtreasurer}
                alt="Grant Lund"
              ></Image>
              <h3 className="mb-1 tracking-tight ">Grant Lund</h3>
              <p>ACB Treasurer</p>
            </div>
            <div className="text-center ">
              <Image
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src={acbSecretary}
                alt="Vacant"
              ></Image>
              <h3 className="mb-1 tracking-tight ">Ted Sharpe</h3>
              <p>ACB Secretary</p>
            </div>
            <div className="text-center ">
              <Image
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src={undergradPresident}
                alt="Josh Rardon"
              ></Image>
              <h3 className="mb-1 tracking-tight ">Josh Rardon</h3>
              <p>Undergraduate President</p>
            </div>
            <div className="text-center ">
              <Image
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src={undergradTreasurer}
                alt="Seth Rahe"
              ></Image>
              <h3 className="mb-1 tracking-tight ">Seth Rahe</h3>
              <p>Undergraduate President</p>
            </div>
            <div className="text-center ">
              <Image
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src={acbDoC}
                alt="Tony Agenbroad"
              ></Image>
              <h3 className="mb-1 tracking-tight ">Tony Agenbroad</h3>
              <p>Director of Communication</p>
            </div>
            <div className="text-center ">
              <Image
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src={acbDoD}
                alt="Michael Bivens"
              ></Image>
              <h3 className="mb-1 tracking-tight ">Michael Bivens</h3>
              <p>Director of Development</p>
              <p>Webmaster</p>
            </div>
            {/* Commented Out While Vacant */}
            {/* <div className="text-center text-gray-500 dark:text-gray-400">
              <Image
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src={placeholderImage}
                alt="Vacant"
              ></Image>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Vacant
              </h3>
              <p>Director of Facilities</p>
            </div> */}
          </div>
        </div>
      </section>
      {/* Advising Board People */}
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold">
              Collegiate Chapter Advising Board
            </h2>
            <p>
              Advisors to the undergraduate chapter, furthering the mission of
              personal and professional growth.
            </p>
          </div>
          <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="text-center ">
              <Image
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src={personPlaceholder}
                alt="Mil DeSilva"
              ></Image>
              <h3 className="mb-1 tracking-tight ">Mil DeSilva</h3>
              <p>Co-Lead Advisor</p>
            </div>
            <div className="text-center ">
              <Image
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src={personPlaceholder}
                alt="John Schisel"
              ></Image>
              <h3 className="mb-1 tracking-tight ">John Schisel</h3>
              <p>Co-Lead Advisor</p>
            </div>
            <div className="text-center ">
              <Image
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src={personPlaceholder}
                alt="Stace Sievert"
              ></Image>
              <h3 className="mb-1 tracking-tight ">Stace Sievert</h3>
              <p>Financial Advisor</p>
            </div>
            <div className="text-center ">
              <Image
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src={personPlaceholder}
                alt="Neil Sims"
              ></Image>
              <h3 className="mb-1 tracking-tight ">Jarod DeLay</h3>
              <p>Recruitment Advisor</p>
            </div>
            {/* <div className="text-center text-gray-500 dark:text-gray-400">
              <Image
                className="mx-auto mb-4 w-36 h-36 rounded-full"
                src={personPlaceholder}
                alt="Neil Sims"
              ></Image>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Name
              </h3>
              <p>Title</p>
            </div> */}
          </div>
        </div>
      </section>
      {/* Alumni Chapter People */}
      {/* <ACPeople /> */}
      {/* Become A Delta Sig Volunteer */}
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="max-w-screen-lg ">
            <h2 className="mb-4 text-4xl tracking-tight font-bold ">
              Become A Delta Sig Volunteer
            </h2>
            <p className="mb-4 ">
              Want to make a difference and leave your mark on our fraternity?
              We&apos;re seeking passionate individuals to join our team and
              help us create unforgettable experiences. From event planning to
              community outreach, there&apos;s a role for everyone. Discover how
              you can contribute to our brotherhood and make a lasting impact.
            </p>
            <button className="cta-button inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center  rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              <a href="/volunteer">
                <p className="cta-text">Learn How To Get Involved</p>
              </a>
            </button>
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
                <button className="cta-button mt-4">
                  <a href="https://forms.gle/NCbcZWUJMMtmDzoVA">
                    <p className="cta-text">Volunteer Today</p>
                  </a>
                </button>
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
                <button className="cta-button mt-4">
                  <a href="/donate">
                    <p className="cta-text">Donate</p>
                  </a>
                </button>
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
                  fiscal and operational oversight of the physical and monetary
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
