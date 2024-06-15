import Image from "next/image";

import placeholderImage from "../../public/images/placeholder.png";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Connecting Alumni, Empowering Brotherhood, Inspiring Impact
            </h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Welcome to the Gamma Iota chapter of Delta Sigma Phi at the
              University of Idaho.
            </p>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Join us in making a difference!
            </p>
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
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
              class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
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
      <section class="bg-gray-100 dark:bg-gray-800">
        <div class="max-w-screen-xl px-4 py-8 mx-auto">
          <div class="text-center">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
              Alumni Memories
            </h2>
            <p class="mt-2 text-gray-600 dark:text-gray-400">
              Relive the moments with our alumni community.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-8">
            <div>
              <Image
                src={placeholderImage}
                class="w-full h-auto rounded-lg"
              ></Image>
            </div>
            <div>
              <Image
                src={placeholderImage}
                class="w-full h-auto rounded-lg"
              ></Image>
            </div>
            <div>
              <Image
                src={placeholderImage}
                class="w-full h-auto rounded-lg"
              ></Image>
            </div>
            <div>
              <Image
                src={placeholderImage}
                class="w-full h-auto rounded-lg"
              ></Image>
            </div>
          </div>
        </div>
      </section>
      {/* Connect Section */}
      <section class="bg-white dark:bg-gray-900">
        <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div class="mr-auto place-self-center lg:col-span-7">
            <div class="max-w-screen-md">
              <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Connect with fellow alumni today
              </h2>
              <p class="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
                Stay connected with your brothers at the Gamma Iota Chapter and
                get involved
              </p>
              <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <a
                  href="#"
                  class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                  Events
                </a>
                <a
                  href="#"
                  class="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Testimonials
            </h2>
            <p class="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              Explore the whole collection of open-source web components and
              elements built with the utility classes from Tailwind
            </p>
          </div>
          <div class="grid mb-8 lg:mb-12 lg:grid-cols-2">
            <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Speechless with how easy this was to integrate
                </h3>
                <p class="my-4">
                  "I recently got my hands on Flowbite Pro, and holy crap, I'm
                  speechless with how easy this was to integrate within my
                  application. Most templates are a pain, code is scattered, and
                  near impossible to theme.
                </p>
                <p class="my-4">
                  Flowbite has code in one place and I'm not joking when I say
                  it took me a matter of minutes to copy the code, customise it
                  and integrate within a Laravel + Vue application.
                </p>
                <p class="my-4">
                  If you care for your time, I hands down would go with this."
                </p>
              </blockquote>
              <figcaption class="flex justify-center items-center space-x-3">
                <Image
                  src={placeholderImage}
                  class="w-9 h-9 rounded-full"
                ></Image>
                <div class="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Bonnie Green</div>
                  <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Developer at Open AI
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Solid foundation for any project
                </h3>
                <p class="my-4">
                  "FlowBite provides a robust set of design tokens and
                  components based on the popular Tailwind CSS framework. From
                  the most used UI components like forms and navigation bars to
                  the whole app screens designed both for desktop and mobile,
                  this UI kit provides a solid foundation for any project.
                </p>
                <p class="my-4">
                  Designing with Figma components that can be easily translated
                  to the utility classes of Tailwind CSS is a huge timesaver!"
                </p>
              </blockquote>
              <figcaption class="flex justify-center items-center space-x-3">
                <Image
                  src={placeholderImage}
                  class="w-9 h-9 rounded-full"
                ></Image>
                <div class="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Roberta Casas</div>
                  <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Lead designer at Dropbox
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Mindblowing workflow and variants
                </h3>
                <p class="my-4">
                  "As someone who mainly designs in the browser, I've been a
                  casual user of Figma, but as soon as I saw and started playing
                  with FlowBite my mind was 🤯.
                </p>
                <p class="my-4">
                  Everything is so well structured and simple to use (I've
                  learnt so much about Figma by just using the toolkit).
                </p>
                <p class="my-4">
                  Aesthetically, the well designed components are beautiful and
                  will undoubtedly level up your next application."
                </p>
              </blockquote>
              <figcaption class="flex justify-center items-center space-x-3">
                <Image
                  src={placeholderImage}
                  class="w-9 h-9 rounded-full"
                ></Image>
                <div class="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Jese Leos</div>
                  <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                    Software Engineer at Facebook
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure class="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
              <blockquote class="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Efficient Collaborating
                </h3>
                <p class="my-4">
                  "This is a very complex and beautiful set of elements. Under
                  the hood it comes with the best things from 2 different
                  worlds: Figma and Tailwind.
                </p>
                <p class="my-4">
                  You have many examples that can be used to create a fast
                  prototype for your team."
                </p>
              </blockquote>
              <figcaption class="flex justify-center items-center space-x-3">
                <Image
                  src={placeholderImage}
                  class="w-9 h-9 rounded-full"
                ></Image>
                <div class="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Joseph McFall</div>
                  <div class="text-sm font-light text-gray-500 dark:text-gray-400">
                    CTO at Google
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div class="max-w-screen-md mb-8 lg:mb-16">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Contact & Connect
            </h2>
          </div>
          <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 8 6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Email</h3>
              <p class="text-gray-500 dark:text-gray-400">
                Plan it, create it, launch it. Collaborate seamlessly with all
                the organization and hit your marketing goals every month with
                our marketing plan.
              </p>
            </div>
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Socials</h3>
              <p class="text-gray-500 dark:text-gray-400">
                Protect your organization, devices and stay compliant with our
                structured workflows and custom permissions made for you.
              </p>
            </div>
            <div>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg
                  class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path>
                </svg>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Mail</h3>
              <p class="text-gray-500 dark:text-gray-400">
                Auto-assign tasks, send Slack messages, and much more. Now power
                up with hundreds of new templates to help you get started.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
