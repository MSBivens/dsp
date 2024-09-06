import Image from "next/image";

import volunteerImage from "../../../public/images/volunteer.jpg";

export default function Volunteer() {
  const faqData = [
    {
      id: 1,
      question: "How can I volunteer?",
      answer:
        "To volunteer, please fill out the contact form or reach out to ACB leadership.",
    },
    {
      id: 2,
      question: "Are there short-term volunteer opportunities?",
      answer:
        "Yes! If you would like to volunteer for a specific event or project, please reach out to the ACB.",
    },
    {
      id: 3,
      question: "What are the time commitments?",
      answer:
        "Time commitments vary depending on the volunteer opportunity. Our leadership can provide specific information about the various roles and projects.",
    },
    {
      id: 4,
      question: "What roles are available?",
      answer:
        "We have a variety of volunteeer roles available. Check out our About Us page to see some of these, or fill out the contact form to learn more.",
    },
    {
      id: 5,
      question: "How do I get involved?",
      answer:
        "To get involved, please fill out the contact form or reach out to leadership directly.",
    },
    {
      id: 6,
      question: "I live far away, can I still volunteer?",
      answer:
        "Yes! Nearly every volunteer lives and volunteers distantly from Moscow.",
    },
  ];
  return (
    <main>
      {/* Feature */}
      <section class="py-24 ">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
            <div class="w-full text-center lg:text-left lg:w-2/4">
              <h1 class="lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">
                Volunteer Opportunities That Make a Difference
              </h1>
              <p class="text-lg font-norma mb-5">
                Discover the various volunteer opportunities available at Gamma
                Iota and how your contribution can help us build better men.
              </p>
            </div>
            <div class="w-full text-center  lg:text-left lg:w-2/4">
              <div className="">
                <Image
                  className="rounded-lg"
                  src={volunteerImage}
                  alt="Placeholder Image"
                  width={800}
                  height={800}
                ></Image>
              </div>
            </div>
          </div>
          <div class="flex justify-center items-center  gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            <div class="w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-44 xl:p-7 xl:w-1/4">
              <h4 class="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 ">
                Mentorship
              </h4>
              <p class="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 ">
                The Collegiate Chapter Advisory Board (CCAB) is a group of
                dedicated mentors who provide guidance and support to the
                undergraduate members.
              </p>
            </div>
            <div class="w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-44 xl:p-7 xl:w-1/4">
              <h4 class="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 ">
                Event Planning
              </h4>
              <p class="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 ">
                The Alumni Chapter hosts a variety of events throughout the
                year, including the Bike to Boise Alumni Dinner, Homecoming
                Receptions, and our Anniversary Celebrations.
              </p>
            </div>
            <div class="w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-44 xl:p-7 xl:w-1/4">
              <h4 class="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 ">
                Operations
              </h4>
              <p class="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 ">
                The Alumni Corporation Board (ACB) is responsible for the fiscal
                and operational oversight of Gamma Iota&apos;s assets and
                operations.
              </p>
            </div>
            <div class="w-full bg-gray-100 rounded-2xl p-4 transition-all duration-500 max-md:max-w-md max-md:mx-auto md:w-2/5 md:h-44 xl:p-7 xl:w-1/4">
              <h4 class="text-xl font-semibold text-gray-900 mb-3 capitalize transition-all duration-500 ">
                Fundraising
              </h4>
              <p class="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 ">
                The Gamma Iota and Headquarters scholarship funds are vital to
                the continued success of our members.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Ready To Get involved? */}
      <section>
        <div className="gap-16 py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light mb-4">
            <h2 className="mb-4 tracking-tight font-extrabold ">
              Ready To Get Involved?
            </h2>
            <p className="mb-4">
              Join us in volunteering and make a postive impact in the lives of
              our undergraduate members and fellow alumni.
            </p>
            <button className="cta-button">
              <a href="https://forms.gle/NCbcZWUJMMtmDzoVA">
                <p className="cta-text">Volunteer Today</p>
              </a>
            </button>
          </div>
          <div>
            <div>
              <h3>Open Opportunities</h3>
              <ul>
                <li>Alumni Chapter Officers</li>
                <li>ACB Facility Director</li>
                <li>Chapter Advisor for Risk</li>
                <li>Chapter Advisor for Campus Experience</li>
                <li>Chapter Advisor for Membership Experience</li>
              </ul>
              <p className="mt-8 mb-4">
                Contact us today to learn more about these opportunities or log
                into your MyDeltaSig account
              </p>
              <button className="cta-button inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center  rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSdoXOOfRoRTSZvIRiCr7ryQ3vNiRH--6dPl_0UwxYwZ1oJjUA/viewform">
                  <p className="cta-text">Contact</p>
                </a>
              </button>
              <button className="cta-button">
                <a href="https://mydeltasig.org/">
                  <p className="cta-text">MyDeltaSig</p>
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Mapped */}
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Frequently asked questions
          </h2>
          <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
            {faqData.map((item) => (
              <div key={item.id}>
                <div className="mb-10">
                  <h3 className="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
                    <svg
                      className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span aria-labelledby={`question-${item.id}`}>
                      {item.question}
                    </span>
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
