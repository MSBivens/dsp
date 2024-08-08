import Image from "next/image";

import Contact from "../components/contact.jsx";
import GammaEyeSubscribe from "../components/gammaEyeSubscribe.jsx";

import donateWork from "../../../public/images/donate-work.jpg";

export default function donate() {
  const faqData = [
    {
      id: 1,
      question: "How can I make a donation?",
      answer:
        "You can make a donation to directly support Gamma Iota by sending a check or by use of the online donation form through PayPal.",
    },
    {
      id: 2,
      question: "Are donations tax deductible?",
      answer:
        "All donations to Headquarters and the University of Idaho are tax deductible. Direct donations to Gamma Iota are not tax deductible at this time. We are currently pursuing potential options.",
    },
    {
      id: 3,
      question: "How will my donations be used?",
      answer:
        "Donated funds will be allocated to the various funds established by the chapter, including scholarships, facility improvement, and more. You can also choose which specific fund to make your donation to",
    },
    {
      id: 4,
      question: "Is my donation secure?",
      answer:
        "We use PayPal to process online donations, which is a secure and trusted platform for online transactions.",
    },
    {
      id: 5,
      question: "What is the average donation amount?",
      answer:
        "Our average donation amount is $500, but any amount is greatly appreciated and will help us make a difference in the lives of our brothers.",
    },
    {
      id: 6,
      question: "Can I make a recurring donation?",
      answer:
        "We are working with PayPal to enable this option! In the meantime, you can set up a recurring donation through your bank.",
    },
    {
      id: 7,
      question: "What are the different donation levels and their benefits?",
      answer:
        "Stay tuned for more information on this! We are currently working on establishing different donation levels and their benefits.",
    },
    {
      id: 8,
      question: "How will my donation be recognized?",
      answer:
        "Donations will be recognized on our website and in our newsletter. We are also working on establishing a donor wall in the chapter house. If you would like to remain anonymous, please let us know.",
    },
  ];
  return (
    <main>
      {/* Hero */}
      <section className="donation-cover-image ">
        <div class="px-4 mx-auto max-w-screen-xl text-center py-32 ">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            Support Our Mission
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Your generous donations help us make a difference in the lives of a
            brother.
          </p>
        </div>
      </section>
      {/* Feature */}
      <section>
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Supporting Our Chapter: Making a Difference Through Alumni
              Donations
            </h2>
            <p className="mb-4">
              Your generous donations directly impact our chapter by funding
              projects and initiatives that enhace the undergraduate experience.
            </p>
          </div>
          <div className="">
            <Image
              className="rounded-lg"
              src={donateWork}
              alt="Placeholder Image"
              width={800}
              height={800}
            ></Image>
          </div>
        </div>
      </section>
      {/* Donation Options */}
      <section>
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Donation Options
            </h2>
            <p class="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              There are several ways for alumni to donate, including through the
              University of Idaho, Headquarters, and direct giving. Choose the
              option that works best for you.
            </p>
          </div>
          <div class="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 class="mb-4 text-2xl font-semibold">Direct Giving</h3>
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400 mb-8">
                You chose how the donation is used among the different funds
                established, including scholarships, facility improvement, and
                more.
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
                  <span>Facility Projects</span>
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
                  <span>Alumni Events</span>
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
                  <span>Recruitment</span>
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
                  <span>Scholarships</span>
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
                  <span>Non-Restrictive Giving</span>
                </li>
              </ul>
              <button className="cta-button mt-auto">
                <a href="/donate">
                  <p className="cta-text">Donate Today</p>
                </a>
              </button>
            </div>
            <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 class="mb-4 text-2xl font-semibold">University of Idaho</h3>
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400 mb-8">
                The T. J. Prichard Scholarship supports the upperclassman with
                the highest GPA in good standing within the Fraternity.
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
                  <span>T.J. Prichard Scholarship</span>
                </li>
              </ul>
              <button className="cta-button mt-auto">
                <a href="https://www.uidaho.edu/giving">
                  <p className="cta-text">Donate Today</p>
                </a>
              </button>
            </div>
            <div class="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 class="mb-4 text-2xl font-semibold">Headquarters</h3>
              <p class="font-light text-gray-500 sm:text-lg dark:text-gray-400 mb-8">
                Headquarters manages a large portfolio of alumni givings to
                support all chatpers.
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
                  <span>Gamma Iota Endowment</span>
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
                  <span>Leadership Institute</span>
                </li>
              </ul>
              <button className="cta-button mt-auto">
                <a href="https://give.deltasig.org/">
                  <p className="cta-text">Donate Today</p>
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <Contact />
      {/* Testimonial */}
      <section>
        <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <figure class="max-w-screen-md mx-auto">
            <svg
              class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p class="text-2xl font-medium text-gray-900 dark:text-white">
                &quot;Flowbite is just awesome. It contains tons of predesigned
                components and pages starting from login screen to complex
                dashboard. Perfect choice for your next SaaS application.&quot;
              </p>
            </blockquote>
            <figcaption class="flex items-center justify-center mt-6 space-x-3">
              <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                <div class="pr-3 font-medium text-gray-900 dark:text-white">
                  Micheal Gough
                </div>
                <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                  PC&apos;XX
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
      {/* FAQ Section */}
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
      {/* Still Questions & Subscribe*/}
      <section>
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
            <div>
              <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
                  {" "}
                  Still have questions?
                </h2>
                <p class="mx-auto mb-8 max-w-2xl font-light text-gray-500 md:mb-12 sm:text-xl dark:text-gray-400">
                  Contact volunteer leadership for further assistance.
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
              <GammaEyeSubscribe />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
