import Image from "next/image";

import serviceImage from "../../../public/images/service.jpg";

import { FaHandHoldingDollar, FaSeedling, FaHandshake } from "react-icons/fa6";

export default function philanthropy() {
  return (
    <main>
      {/* Supporting Causes */}
      <section>
        <div class="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
          <div class="col-span-2 mb-8">
            <h2 class="mt-3 mb-4 tracking-tight">
              Supporting Causes: Making a Differeince in Our Community
            </h2>
            <p>
              At Gamma Iota, we are proud to have raised a significant amount to
              support various causes and make a positive impact in our
              community. Through our philanthropic efforts, we strive to create
              a better future for those in need.
            </p>
            <div class="pt-6 mt-6 col-span-2 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
              <div>
                <svg
                  class="w-10 h-10 mb-"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <FaHandshake />
                </svg>
                <h3 class="mb-2 text-2xl font-bold dark:text-white">
                  Impactful Giving
                </h3>
                <p class="font-light text-gray-500 dark:text-gray-400">
                  Every donation counts. Together, we have raised over $200,000
                  to support other causes
                </p>
              </div>
              <div>
                <svg
                  class="w-10 h-10 mb-2 md:w-12 md:h-12 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <FaSeedling />
                </svg>
                <h3 class="mb-2 text-2xl font-bold dark:text-white">
                  Community Impact
                </h3>
                <p class="font-light text-gray-500 dark:text-gray-400">
                  Our philanthropic efforts have made a significant difference
                  in the lives of many.
                </p>
              </div>
            </div>
          </div>
          <div class="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <Image src={serviceImage} alt="image"></Image>
            </div>
          </div>
        </div>
      </section>
      {/* Volunteer */}
      <section class="py-24 ">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mb-10 lg:mb-16 flex justify-center items-center flex-col gap-x-0 gap-y-6 lg:gap-y-0 lg:flex-row lg:justify-between max-md:max-w-lg max-md:mx-auto">
            <div class="relative w-full text-center lg:text-left lg:w-2/4">
              <h3 class="font-bold  leading-[3.25rem] lg:mb-6 mx-auto max-w-max lg:max-w-md lg:mx-0">
                Looking To Make a Difference?
              </h3>
            </div>
            <div class="relative w-full text-center  lg:text-left lg:w-2/4">
              <p class="text-lg font-normal text-gray-500 mb-5">
                Discover the various volunteer opportunities available at Gamma
                Iota and how your contribution can help us build better men.
              </p>
              <button className="cta-button">
                <a href="https://forms.gle/NCbcZWUJMMtmDzoVA">
                  <p className="cta-text">Volunteer Today</p>
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Benefits */}
      <section>
        <div class="items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
          <div class="col-span-2 mb-8">
            <h3 class="mt-3 mb-4 tracking-tight">
              The Benefits of Philantropy for Recipients and Brothers
            </h3>
            <p>
              Philanthropy has a positive impact on both the recipients and the
              brothers. Through charitbale giving and volunteer work, we are
              able to make a difference in the lives of others while also
              fostering personal growth and a sense of purpose within our
              fraternity.
            </p>
            <div class="pt-6 mt-6 col-span-2 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
              <div>
                <svg
                  class="w-10 h-10 mb-2 md:w-12 md:h-12 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <FaHandshake />
                </svg>
                <h3 class="mb-2 text-2xl font-bold dark:text-white">
                  Intentional Giving
                </h3>
                <p class="font-light text-gray-500 dark:text-gray-400">
                  Our philanthhropic efforts create lasting change and improve
                  the lives of others in need.
                </p>
              </div>
              <div>
                <svg
                  class="w-10 h-10 mb-2  md:w-12 md:h-12 "
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <FaSeedling />
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
              <Image src={serviceImage} alt="image"></Image>
            </div>
          </div>
        </div>
      </section>
      {/* B2B Video */}
      <section>
        <div class="py-8 px-4 mx-auto max-w-screen-xl ">
          <div class="flex flex-col justify-center text-center">
            <h2 class="mb-4 font-extrabold tracking-tight leading-none ">
              Bike to Boise
            </h2>
            <p class="mb-8 font-normal">
              Please enjoy our montage of our brothers biking from Moscow to
              Boise, a tradition over 60 years old! This event is a time honored
              tradition that raises money to support charitable organizations
              like Hope House and X.
            </p>
          </div>
          <div>
            <iframe
              class="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
              src="https://www.youtube.com/embed/YIPh4V6ORoM?si=Ih6gvC9uvVQxXFk0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
