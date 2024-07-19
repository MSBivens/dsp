export default function upcomingEvents() {
  return (
    <section>
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 class="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Upcoming Events
          </h2>
        </div>
        <div class="grid gap-8 lg:grid-cols-2">
          <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-between items-center mb-5 text-gray-500"></div>
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Homecoming | Sept. 28 to Oct. 5
            </h2>
            <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
              Reconnect with brothers and celebrate the brotherhood at this
              years Homecoming event!
            </p>
            <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
              BBQ, games, and more!
            </p>
            <div class="flex justify-between items-center">
              <a
                href="https://www.uidaho.edu/events/signature-events/homecoming"
                class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
              >
                More Details
                <svg
                  class="ml-2 w-4 h-4"
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
            </div>
          </article>
          <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-between items-center mb-5 text-gray-500"></div>
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              75th Anniversary | April 25 to 27
            </h2>
            <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
              3 day event celebrating the 75th anniversary of the Gamma Iota
              chapter of Delta Sigma Phi at the University of Idaho. Planned
              activities include informal reception, golf tournament, campus
              tours, and dinner.
            </p>
            <div class="flex justify-between items-center">
              <a
                href="https://www.facebook.com/events/998261511948747"
                class="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
              >
                More Details
                <svg
                  class="ml-2 w-4 h-4"
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
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
