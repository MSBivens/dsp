import Image from "next/image";

import Contact from "./components/contact.jsx";

import placeholderImage from "../../public/images/placeholder.png";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section>
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4">
              Connecting Alumni, Empowering Brotherhood, Inspiring Impact
            </h1>
            <p class="max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl ">
              Welcome to the Gamma Iota chapter of Delta Sigma Phi at the
              University of Idaho.
            </p>
            <p class="max-w-2xl mb-6  lg:mb-8 md:text-lg lg:text-xl ">
              Join us in making a difference!
            </p>
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center  rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Donate Now
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
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center  border rounded-lg "
            >
              Volunteer
            </a>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image src={placeholderImage}></Image>
          </div>
        </div>
      </section>
      {/* Alumni Memories Gallery */}
      <section>
        <div class="max-w-screen-xl px-4 py-8 mx-auto">
          <div class="text-center">
            <h2>Alumni Memories</h2>
            <p class="mt-2 mb-2">
              Relive the moments with our alumni community.
            </p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <Image
                src={placeholderImage}
                class="w-full h-auto rounded-lg"
              ></Image>{" "}
            </div>
            <div>
              <Image
                src={placeholderImage}
                class="w-full h-auto rounded-lg"
              ></Image>{" "}
            </div>
            <div>
              <Image
                src={placeholderImage}
                class="w-full h-auto rounded-lg"
              ></Image>{" "}
            </div>
            <div>
              <Image
                src={placeholderImage}
                class="w-full h-auto rounded-lg"
              ></Image>{" "}
            </div>
            <div>
              <Image
                src={placeholderImage}
                class="w-full h-auto rounded-lg"
              ></Image>{" "}
            </div>
            <div>
              <Image
                src={placeholderImage}
                class="w-full h-auto rounded-lg"
              ></Image>{" "}
            </div>
            <div>
              <Image
                src={placeholderImage}
                class="w-full h-auto rounded-lg"
              ></Image>{" "}
            </div>
            <div>
              <Image
                src={placeholderImage}
                class="w-full h-auto rounded-lg"
              ></Image>{" "}
            </div>
            <div>
              <Image
                src={placeholderImage}
                class="w-full h-auto rounded-lg"
              ></Image>{" "}
            </div>
            <div>
              <Image
                src={placeholderImage}
                class="w-full h-auto rounded-lg"
              ></Image>{" "}
            </div>
            <div>
              <Image
                src={placeholderImage}
                class="w-full h-auto rounded-lg"
              ></Image>{" "}
            </div>
            <div>
              <Image
                src={placeholderImage}
                class="w-full h-auto rounded-lg"
              ></Image>{" "}
            </div>
          </div>
        </div>
      </section>
      {/* Connect Section */}
      <section>
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <div class="max-w-screen-md">
              <h2 class="mb-4 ">Connect with fellow alumni today</h2>
              <p class="mb-8 ">
                Stay connected with your brothers at the Gamma Iota Chapter and
                get involved
              </p>
              <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <a
                  href="#"
                  class="inline-flex items-center justify-center px-4 py-2.5 text-center rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                  Events
                </a>
                <a
                  href="#"
                  class="inline-flex items-center justify-center px-4 py-2.5 text-center  border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100  dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  Gamma Eye Newsletter
                </a>
              </div>
            </div>
          </div>
          <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image src={placeholderImage}></Image>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section>
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm">
            <h2 class="mb-4 text-4xl tracking-tight f">Testimonials</h2>
            <p class="mb-8  lg:mb-16 sm:text-xl ">
              Explore the whole collection of open-source web components and
              elements built with the utility classes from Tailwind
            </p>
          </div>
          <div class="grid mb-8 lg:mb-12 lg:grid-cols-2">
            <figure class="flex flex-col justify-center items-center p-8 text-center bg-green-900 border-b border-amber-400 md:p-12 lg:border-r">
              <blockquote class="mx-auto mb-8 max-w-2xl">
                <h3>Pull Quote</h3>
                <p class="my-4">"Text</p>
                <p class="my-4">Text</p>
                <p class="my-4">Text."</p>
              </blockquote>
              <figcaption class="flex justify-center items-center space-x-3">
                <div class="space-y-0.5 text-left">
                  <div>John Doe</div>
                  <div class="text-sm font-light ">Pledge Class XX</div>
                </div>
              </figcaption>
            </figure>
            <figure class="flex flex-col justify-center items-center p-8 text-center bg-green-900 border-b border-amber-400 md:p-12 lg:border-r">
              <blockquote class="mx-auto mb-8 max-w-2xl">
                <h3>Pull Quote</h3>
                <p class="my-4">"Text</p>
                <p class="my-4">Text</p>
                <p class="my-4">Text."</p>
              </blockquote>
              <figcaption class="flex justify-center items-center space-x-3">
                <div class="space-y-0.5 text-left">
                  <div>John Doe</div>
                  <div class="text-sm font-light ">Pledge Class XX</div>
                </div>
              </figcaption>
            </figure>
            <figure class="flex flex-col justify-center items-center p-8 text-center bg-green-900 border-b border-amber-400 md:p-12 lg:border-r">
              <blockquote class="mx-auto mb-8 max-w-2xl">
                <h3>Pull Quote</h3>
                <p class="my-4">"Text</p>
                <p class="my-4">Text</p>
                <p class="my-4">Text."</p>
              </blockquote>
              <figcaption class="flex justify-center items-center space-x-3">
                <div class="space-y-0.5 text-left">
                  <div>John Doe</div>
                  <div class="text-sm font-light ">Pledge Class XX</div>
                </div>
              </figcaption>
            </figure>
            <figure class="flex flex-col justify-center items-center p-8 text-center bg-green-900 border-b border-amber-400 md:p-12 lg:border-r">
              <blockquote class="mx-auto mb-8 max-w-2xl">
                <h3>Pull Quote</h3>
                <p class="my-4">"Text</p>
                <p class="my-4">Text</p>
                <p class="my-4">Text."</p>
              </blockquote>
              <figcaption class="flex justify-center items-center space-x-3">
                <div class="space-y-0.5 text-left">
                  <div>John Doe</div>
                  <div class="text-sm font-light ">Pledge Class XX</div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <Contact />
    </main>
  );
}
