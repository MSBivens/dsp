import React from "react";
import Image from "next/image";

import placeholderImage from "../../../public/images/placeholder.png";
import history1 from "../../../public/images/history1.jpg";
import history2 from "../../../public/images/history2.jpg";
import history3 from "../../../public/images/history3.jpg";
import history4 from "../../../public/images/history4.jpg";
import history5 from "../../../public/images/history5.jpg";
import history6 from "../../../public/images/history6.jpg";
import history7 from "../../../public/images/history7.jpg";
import history8 from "../../../public/images/history8.jpg";
import history9 from "../../../public/images/history9.jpg";

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
  const collectionData = [
    {
      id: 1,
      imageSrc: history1,
      title: "Homecoming 1961",
      description:
        "Brothers at the 1961 Homecoming Celebration at the University of Idaho. Vandals defeated San Jose State Spartans, 27 - 18.",
    },
    {
      id: 2,
      imageSrc: history2,
      title: "Intramurals 1979-80",
      description: "Broathers participating in intramural sports.",
    },
    {
      id: 3,
      imageSrc: history3,
      title: "Bike to Boise, 1969",
      description:
        "In Spring of 69, brothers set out from Moscow to ride a tandem bicycle to Boise.",
    },
    {
      id: 4,
      imageSrc: history4,
      title: "Military History",
      description:
        "Our chapter has a long history of military service, dating back to founding member, Robin Faisant, who served in the Navy.",
    },
    {
      id: 5,
      imageSrc: history5,
      title: "Brothers for Life",
      description:
        "The pledge class of 1993 poses for a photo in front of the chapter house.",
    },
    {
      id: 6,
      imageSrc: history6,
      title: "The First Dream Girl",
      description:
        "Rae Reid, Junior from Kappa Kappa Gamma is announced as the first Dream Girl on May 4th, 1951.",
    },
    {
      id: 7,
      imageSrc: history7,
      title: "The Corner Club",
      description:
        "Brothers gathered at the Corner Club in Moscow, ID. A popular hangout for decades of brothers.",
    },
    {
      id: 8,
      imageSrc: history8,
      title: "Paying the Debt",
      description:
        "Alumni and Undergraduates join forces to build cabinets for the chapter facility.",
    },
    {
      id: 9,
      imageSrc: history9,
      title: "Alumni Work Parties",
      description:
        "Brothers return home to help with house updates and repairs.",
    },
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
        <div className="max-w-screen-md mx-auto ">
          {/* Responsive timeline container */}
          <div className="flex flex-col md:flex-col">
            {/* Timeline items */}
            {responsiveEvents.map((event, index) => (
              <div key={index} className="flex items-start mb-8 md:pr-8">
                {/* Date */}
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
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
      {/* HIstorical Collection */}
      <section className="mx-auto max-w-screen-xl text-center lg:py-16 ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Historical Collection
          </h2>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Explore our fraternity's rich history through photographs and
            memorabilia.
          </p>
        </div>

        <div className="mx-32 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {collectionData.map((item) => (
            <div
              key={item.id}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  className="w-full h-full"
                />
              </div>
              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
