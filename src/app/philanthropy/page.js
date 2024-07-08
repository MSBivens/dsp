import Image from "next/image";

import placeholderImage from "../../../public/images/placeholder.png";

export default function philanthropy() {
  return (
    <main>
      {/* Hero Section - remove? */}
      {/* <section>
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Payments tool for software companies
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              From checkout to global sales tax compliance, companies around the
              world use Flowbite to simplify their payment stack.
            </p>
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Get started
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
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Speak to Sales
            </a>
          </div>
        </div>
      </section> */}
      {/* Feature Section */}
      <section>
        <div class="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
          <div class="col-span-2 mb-8">
            <h2 class="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
              Supporting Causes: Making a Differeince in Our Community
            </h2>
            <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              At Gamma Iota, we are proud to have raised a significant amount to
              support various causes and make a positive impact in our
              community. Through our philanthropic efforts, we strive to create
              a abetter future for those in need.
            </p>
          </div>
          <div class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
            <div>
              <svg
                class="w-10 h-10 mb-2 text-purple-500 md:w-12 md:h-12 dark:text-purple-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <h3 class="mb-2 text-2xl font-bold dark:text-white">
                Impactful Giving
              </h3>
              <p class="font-light text-gray-500 dark:text-gray-400">
                Every donation counts. Together, we have raised over $100,000 to
                support other causes
              </p>
            </div>
            <div>
              <svg
                class="w-10 h-10 mb-2 text-purple-500 md:w-12 md:h-12 dark:text-purple-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
              </svg>
              <h3 class="mb-2 text-2xl font-bold dark:text-white">
                Community Impact
              </h3>
              <p class="font-light text-gray-500 dark:text-gray-400">
                Our philanthropic efforts have amde a significant difference in
                the lives of many.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* B2B Video */}
      <section>
        <div class="py-8 px-4 mx-auto max-w-screen-xl ">
          <div class="flex flex-col justify-center text-center">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
              Bike to Boise
            </h1>
            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
              Please enjoy our montage of our brothers biking from Moscow to
              Boise, a tradition over 60 years old!
            </p>
          </div>
          <div>
            <iframe
              class="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
              src="https://www.youtube.com/embed/KaLxCiilHns"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
      {/* Benefits */}
      <section>
        <div class="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
          <div class="col-span-2 mb-8">
            <h2 class="mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
              The Benefits of Philantropy for Recipients and Brothers
            </h2>
            <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Philanthropy has a postiive impact on both the recipienmts and the
              brothers. Through charitbale giving and volunteer work, we are
              able to make a difference in the lives of others while also
              fostering personal growth and a sense of purpose within our
              fraternity.
            </p>
            <div class="pt-6 mt-6 col-span-2 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
              <div>
                <svg
                  class="w-10 h-10 mb-2 text-purple-500 md:w-12 md:h-12 dark:text-purple-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <h3 class="mb-2 text-2xl font-bold dark:text-white">
                  Impactful Giving
                </h3>
                <p class="font-light text-gray-500 dark:text-gray-400">
                  Our philanthhropic efforts create lasting change and improve
                  the lives of others in need.
                </p>
              </div>
              <div>
                <svg
                  class="w-10 h-10 mb-2 text-purple-500 md:w-12 md:h-12 dark:text-purple-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path>
                </svg>
                <h3 class="mb-2 text-2xl font-bold dark:text-white">
                  Personal Growth
                </h3>
                <p class="font-light text-gray-500 dark:text-gray-400">
                  Engaging in philanthropy helps our brothers develop leadership
                  skills and empathy.
                </p>
              </div>
            </div>
          </div>
          <div class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <Image src={placeholderImage}></Image>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
