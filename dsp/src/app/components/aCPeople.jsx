import Image from "next/image";

import placeholderImage from "../../../public/images/placeholder.png";

export default function aCPeople() {
  return (
    <section>
      <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div class="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Alumni Chapter
          </h2>
          <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Striving for the betterment of the alumni experience for every
            brother by providing opportunities for networking, support, and
            social engagement.
          </p>
        </div>
        <div class="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div class="text-center text-gray-500 dark:text-gray-400">
            <Image
              class="mx-auto mb-4 w-36 h-36 rounded-full"
              src={placeholderImage}
            ></Image>
            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Vacant
            </h3>
            <p>President</p>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
            <Image
              class="mx-auto mb-4 w-36 h-36 rounded-full"
              src={placeholderImage}
            ></Image>
            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Vacant
            </h3>
            <p>Treasurer</p>
          </div>
          <div class="text-center text-gray-500 dark:text-gray-400">
            <Image
              class="mx-auto mb-4 w-36 h-36 rounded-full"
              src={placeholderImage}
            ></Image>
            <h3 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Vacant
            </h3>
            <p>Secretary</p>
          </div>
        </div>
      </div>
    </section>
  );
}
