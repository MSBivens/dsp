import GammaEyeSubscribe from "../components/gammaEyeSubscribe.jsx";

export default function newsletter() {
  return (
    <main>
      {/* Update Information */}
      <section>
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Sign up to receive the Gamma Eye
          </p>
          <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
            Stay Informed With Our Newsletter
          </h2>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Our newsletter, the Gamma Eye, has kept our community updated on
            chapter news for decades. The triannual publication is a great way
            to stay connected with the chapter and your brothers and provides
            insight that is valuable for alumni, parents, volunteers, and more.
          </p>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Stay up to date with Gamma Iota news, events, and more by updating
            your contact information today!
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <button className="cta-button">
              <a
                href="https://forms.gle/S8zq5axy76Xd7KJ87"
                className="cta-text"
              >
                Update Your Information
              </a>
            </button>
          </div>
        </div>
      </section>
      {/* Most Recent Issue */}
      <section>
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto  sm:text-center">
            <h2 class="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl dark:text-white">
              Most Recent Issue
            </h2>
            <div class="flex justify-center">
              <embed
                src="../../files/GammaEyeED16.pdf"
                type="application/pdf"
                width="1200"
                height="800"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Past Issues */}
      <section class="antialiased">
        <div class="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div class="max-w-3xl mx-auto text-center">
            <h2 class="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
              View Past Issues
            </h2>
          </div>

          <div class="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
            <div class="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
              <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  Fall 2023
                </p>
                <p class="text-lg font-semibold text-gray-900 dark:text-white ">
                  <a
                    href="../../files/GammaEyeED16.pdf"
                    class="hover:underline"
                  >
                    Gamma Eye 16th Edition
                  </a>
                </p>
              </div>

              <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  Spring 2023
                </p>
                <p class="text-lg font-semibold text-gray-900 dark:text-white">
                  <a
                    href="../../files/GammaEyeED15.pdf"
                    class="hover:underline"
                  >
                    Gamma Eye 15th Edition
                  </a>
                </p>
              </div>

              <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  Fall 2022
                </p>
                <p class="text-lg font-semibold text-gray-900 dark:text-white">
                  <a
                    href="../../files/GammaEyeED14.pdf"
                    class="hover:underline"
                  >
                    Gamma Eye 14th Edition
                  </a>
                </p>
              </div>

              <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  July, 2022
                </p>
                <p class="text-lg font-semibold text-gray-900 dark:text-white">
                  <a
                    href="../../files/GammaEyeED13.pdf"
                    class="hover:underline"
                  >
                    Gamma Eye 13th Edition
                  </a>
                </p>
              </div>

              <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  Jan, 2022
                </p>
                <p class="text-lg font-semibold text-gray-900 dark:text-white">
                  <a
                    href="../../files/GammaEyeED12.pdf"
                    class="hover:underline"
                  >
                    Gamma Eye 12th Edition
                  </a>
                </p>
              </div>

              <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  June, 2021
                </p>
                <p class="text-lg font-semibold text-gray-900 dark:text-white">
                  <a
                    href="../../files/GammaEyeED11.pdf"
                    class="hover:underline"
                  >
                    Gamma Eye 11th Edition
                  </a>
                </p>
              </div>

              <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  Nov, 2017
                </p>
                <p class="text-lg font-semibold text-gray-900 dark:text-white">
                  <a href="../../files/GammaEyeED4.pdf" class="hover:underline">
                    Gamma Eye 4th Edition
                  </a>
                </p>
              </div>

              <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  July, 2017
                </p>
                <p class="text-lg font-semibold text-gray-900 dark:text-white">
                  <a href="../../files/GammaEyeED3.pdf" class="hover:underline">
                    Gamma Eye 3rd Edition
                  </a>
                </p>
              </div>

              <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  June, 2016
                </p>
                <p class="text-lg font-semibold text-gray-900 dark:text-white">
                  <a href="../../files/GammaEyeED2.pdf" class="hover:underline">
                    Gamma Eye 2nd Edition
                  </a>
                </p>
              </div>

              <div class="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
                <p class="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                  2016
                </p>
                <p class="text-lg font-semibold text-gray-900 dark:text-white">
                  <a href="../../files/GammaEyeED1.pdf" class="hover:underline">
                    Gamma Eye 1st Edition
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
