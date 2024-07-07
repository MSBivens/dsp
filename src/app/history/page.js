import React from "react";
import Image from "next/image";

import placeholderImage from "../../../public/images/placeholder.png";

export default function history() {
  const responsiveEvents = [
    {
      year: "1950",
      event: "Founded",
      description:
        "The Gamma Iota Chapter was founded at the University of Idaho",
    },
    { year: "2022", event: "May", description: "Launched version 1.0" },
    { year: "2023", event: "February", description: "Reached 10,000 users" },
    { year: "2022", event: "January", description: "Started a new project" },
    { year: "2022", event: "May", description: "Launched version 1.0" },
    { year: "2023", event: "February", description: "Reached 10,000 users" },
    { year: "2022", event: "January", description: "Started a new project" },
    { year: "2022", event: "May", description: "Launched version 1.0" },
    { year: "2023", event: "February", description: "Reached 10,000 users" },
    // Add more events as needed
  ];
  return (
    <main>
      {/* Hero Section */}
      <section>
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Our Rich History
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Discover the legacy and accomplishments of the Gamma Iota Chapter.
          </p>
        </div>
      </section>
      {/* Timeline */}
      <section>
        <div className="max-w-screen-md mx-auto py-8">
          {/* Responsive timeline container */}
          <div className="flex flex-col md:flex-col">
            {/* Timeline items */}
            {responsiveEvents.map((event, index) => (
              <div key={index} className="flex items-start mb-8 md:pr-8">
                {/* Date */}
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">{event.year}</span>
                </div>
                {/* Event details */}
                <div className="ml-4">
                  <h3 className="text-lg font-bold mb-1">{event.event}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Historical Collection */}
      <section>
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h2 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Historical Collection
          </h2>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Explore our fraternity's rich history through photogrpaghs and
            memorabilia.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="grid gap-4">
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={placeholderImage}
                alt="Placeholder Image"
              ></Image>
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={placeholderImage}
                alt="Placeholder Image"
              ></Image>
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={placeholderImage}
                alt="Placeholder Image"
              ></Image>
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={placeholderImage}
                alt="Placeholder Image"
              ></Image>
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={placeholderImage}
                alt="Placeholder Image"
              ></Image>
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={placeholderImage}
                alt="Placeholder Image"
              ></Image>
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={placeholderImage}
                alt="Placeholder Image"
              ></Image>
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={placeholderImage}
                alt="Placeholder Image"
              ></Image>
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={placeholderImage}
                alt="Placeholder Image"
              ></Image>
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={placeholderImage}
                alt="Placeholder Image"
              ></Image>
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={placeholderImage}
                alt="Placeholder Image"
              ></Image>
            </div>
            <div>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={placeholderImage}
                alt="Placeholder Image"
              ></Image>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
