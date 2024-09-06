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
    {
      year: "1951",
      event: "The First Dream Girl",
      description:
        "Gamma Iota crowns it first Dream Girl, Rae Reid of Kappa Kappa Gamma",
    },
    {
      year: "1953",
      event: "The First Gamma Eye",
      description:
        "The inaugural edition of our alumni newsletter, The Gamma Eye is published.",
    },
    {
      year: "1954",
      event: "Charles Bartell Recruited",
      description:
        "University architecture professor Charles Bartell is recruited and initiated as the lead chapter advisor. He would go on to serve our chapter for over 40 years. Our national fraternity named its Chapter Advisor Award after him in 1985. He was the first recipient.",
    },
    {
      year: "1956",
      event: "Our First Home",
      description:
        "The alumni board purchases the property at the corner of Deakin and College and moves out of the old photo studio.",
    },
    {
      year: "1959",
      event: "Gamma Iota awarded Chapter Leadership Award",
      description:
        "Gamma Iota is presented the Chapter Leadership Award at the summer convention recognizing it as the top chapter in the nation for universities of our size.",
    },
    {
      year: "1963",
      event: "Bike 2 Boise Established",
      description:
        "Our primary philanthropy was established and called Bike to Boise which involved riding a tandem bicycle from Moscow, ID. to the steps of the capitol in Boise and continues to this day. Over the years the undergraduate members have raised money for Easter Seals, March of Dimes, Mountain States Tumor Institute, and Hope House.",
    },
    {
      year: "1967",
      event: "Gamma Iota Pledges First African American Student on Campus",
      description:
        "Gamma Iota became the first fraternity on campus to pledge and initiate an African American student, Daniel Gaither He was an outstanding individual and multiple other fraternities recruited him as well during rush that fall. He went on to be elected Senior Class President of the University.",
    },
    {
      year: "1969",
      event: "503 University Ave is Purchased",
      description:
        "Having outgrown our chapter house, we purchased our current location from the Kappa Alpha Theta sorority. It was officially opened at Homecoming that fall.",
    },
    {
      year: "1971",
      event: "Vietnam War",
      description:
        "Gamma Iota loses 3 brothers who made the ultimate sacrifice in the Vietnam War. Richard Livingston, Robert Green, and Robert Willey",
    },
    {
      year: "1975",
      event: "The 25th Anniversary",
      description:
        "Gamma Iota celebrated its 25 anniversary with a large gathering of alumni and friends at the chapter house.",
    },
    {
      year: "1980",
      event: "First In Grades and Intramurals",
      description:
        "Gamma Iota accomplishes the rare feat of #1 in grades and intramurals for all fraternities on campus.",
    },
    {
      year: "1980",
      event: "Prichard Scholarship Established",
      description:
        "Gamma Iota celebrates its 30th Anniversary on campus with a weekend celebration where it received multiple awards from headquarters. The Prichard Scholarship is established going to the member with the highest GPA living in the chapter house each year.",
    },
    {
      year: "1981",
      event: "Burning of the Mortgage",
      description:
        "Gamma Iota celebrates its 31st anniversary and mortgage burning for the property purchased in 1969.",
    },
    {
      year: "1990s",
      event: "Largest Recruitment Classes",
      description:
        "Gamma Iota saw its largest membership numbers with a peak of 30 initiates in 1996. It also dominated the campus intramurals competition winning the majority of the titles during the decade.",
    },
    {
      year: "2018",
      event: "First in Grades",
      description:
        "Gamma Iota achieves the #1 GPA ranking among all fraternities, 3.32.",
    },
    {
      year: "2022",
      event: "Dedication to Charles Bartell",
      description:
        "After 2 years of cancellations due to COVID, Gamma Iota holds its 70th Anniversary Celebration. It was the largest gathering ever for a chapter function with over 220 alumni, undergrads, spouses, dream girls, and honored guests attending. Our chapter dining room was formally dedicated in Charles Bartell's name during the weekend. ",
    },
    {
      year: "2025",
      event: "The 75th Anniversary",
      description: "Gamma Iota's 75th Anniversary Celebration is set.",
    },
  ];
  const collectionData = [
    {
      id: 1,
      imageSrc: history6,
      title: "The First Dream Girl",
      description:
        "Rae Reid, Junior from Kappa Kappa Gamma is announced as the first Dream Girl on May 4th, 1951.",
    },
    {
      id: 2,
      imageSrc: history1,
      title: "Homecoming 1961",
      description:
        "Brothers at the 1961 Homecoming Celebration at the University of Idaho. Vandals defeated San Jose State Spartans, 27 - 18.",
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
      imageSrc: history2,
      title: "Intramurals 1979-80",
      description: "Brothers participating in intramural sports.",
    },

    {
      id: 5,
      imageSrc: history4,
      title: "Military History",
      description:
        "Our chapter has a long history of military service, dating back to founding member, Robin Faisant, who served in the Navy.",
    },
    {
      id: 6,
      imageSrc: history5,
      title: "Brothers for Life",
      description:
        "The pledge class of 1993 poses for a photo in front of the chapter house.",
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
          <h1 class="mb-4 font-extrabold tracking-tight leading-none ">
            Our Rich History
          </h1>
          <p class="mb-8 font-normal  sm:px-16 xl:px-48 ">
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
                <div>
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {event.year}
                    </span>
                  </div>
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
      {/* Historical Collection - Coming back once articles are written*/}
      {/* <section className="mx-auto max-w-screen-xl text-center ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h2 className="mb-4 font-extrabold tracking-tight leading-none ">
            Historical Collection
          </h2>
          <p className="mb-4 font-normal sm:px-16 xl:px-48">
            Explore our fraternity&apos;s rich history through photographs and
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
      </section> */}
    </main>
  );
}
