import Image from "next/image";
import Contact from "./components/contact.jsx";

import placeholderImage from "../../public/images/placeholder.png";
import homeCover from "../../public/images/homeCover.jpg";
import home1 from "../../public/images/home1.jpg";
import home2 from "../../public/images/home2.jpg";
import home3 from "../../public/images/home3.jpg";
import home4 from "../../public/images/home4.jpg";
import home5 from "../../public/images/home5.jpg";
import home6 from "../../public/images/home6.jpg";
// import home7 from "../../public/images/home7.jpg";
// import home8 from "../../public/images/home8.jpg";
// import home9 from "../../public/images/home9.jpg";
import homeConnect from "../../public/images/homeConnect.jpg";

export default function Home() {
  const collectionData = [
    {
      id: 1,
      imageSrc: home1,
      title: "Sailors Ball",
      description: "The annual Spring Campout",
    },
    {
      id: 2,
      imageSrc: home2,
      title: "Community Service",
      description: "Broathers making a difference in their local community.",
    },
    {
      id: 3,
      imageSrc: home3,
      title: "Recruiting",
      description:
        "Paying the debt by bringing better men into the Fraternity.",
    },
    {
      id: 4,
      imageSrc: home4,
      title: "Bike 2 Boise",
      description: "Annual B2B ride from Moscow to Boise",
    },
    {
      id: 5,
      imageSrc: home5,
      title: "B2B Alumni Dinner",
      description:
        "Gathering of brothers from all years to celebrate the end of the bike trip.",
    },
    {
      id: 6,
      imageSrc: home6,
      title: "Personal Growth",
      description:
        "Professional and personal devlopment, bringing lasting change to every member",
    },
    // {
    //   id: 7,
    //   imageSrc: home7,
    //   title: "The Corner Club",
    //   description:
    //     "Brothers gathered at the Corner Club in Moscow, ID. A popular hangout for decades of brothers.",
    // },
    // {
    //   id: 8,
    //   imageSrc: home8,
    //   title: "Paying the Debt",
    //   description:
    //     "Alumni and Undergraduates join forces to build cabinets for the chapter facility.",
    // },
    // {
    //   id: 9,
    //   imageSrc: home9,
    //   title: "Alumni Work Parties",
    //   description:
    //     "Brothers return home to help with house updates and repairs.",
    // },
  ];
  return (
    <main>
      {/* Hero Section */}
      <section>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4">
              Connecting Alumni, Empowering Brotherhood, Inspiring Impact
            </h1>
            <p className="max-w-2xl mb-6 lg:mb-8 md:text-lg lg:text-xl ">
              Welcome to the Gamma Iota chapter of Delta Sigma Phi at the
              University of Idaho.
            </p>
            <p className="max-w-2xl mb-6  lg:mb-8 md:text-lg lg:text-xl ">
              Join us in making a difference!
            </p>
            <button className="cta-button inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center  rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
              <a href="https://forms.gle/NCbcZWUJMMtmDzoVA">
                <p className="cta-text">Volunteer</p>
              </a>
            </button>
            <button className="cta-button">
              <a href="/donate">
                <p className="cta-text">Donate Today</p>
              </a>
            </button>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              src={homeCover}
              width={1200}
              height={1200}
              alt="Placeholder Image"
            ></Image>
          </div>
        </div>
      </section>
      {/* Alumni Memories Gallery */}
      <section className="mx-auto max-w-screen-xl text-center lg:py-16 ">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Alumni Memories
          </h2>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Relive the moments with our alumni community from Bike to Boise, to
            Sailors Ball, and more!
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
      {/* Connect Section */}
      <section>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <div className="max-w-screen-md">
              <h2 className="mb-4 ">Connect with fellow alumni today</h2>
              <p className="mb-8 ">
                Stay connected with your brothers at the Gamma Iota Chapter and
                get involved
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <button className="navigation-button inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center  rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                  <a href="/events">
                    <p className="cta-text">Events</p>
                  </a>
                </button>
                <button className="navigation-button inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center  rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                  <a href="/newsletter">
                    <p className="cta-text">Gamma Eye Newsletter</p>
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image src={homeConnect} alt="Placeholder Image"></Image>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-8 px-4 mx-auto max-w-screen-xl">
        <div className="text-center">
          <h2 className="text-4xl tracking-tight font-bold mb-8">
            Testimonials
          </h2>
          <p className="text-xl mb-16 sm:text-lg">
            Explore the positive experiences of our members!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <figure className="rounded-lg shadow-md bg-white p-8 flex flex-col items-center justify-center hover:shadow-lg">
            <blockquote className="text-xl font-light mb-6">
              “In terms of influences that contributed to my personal and
              professional development, I would place my time in the Gamma Iota
              chapter of Delta Sigma Phi near the top!
            </blockquote>
            <blockquote className="text-xl font-light mb-6">
              While one is &quot;in the moment&quot; during their college years,
              it is not until years later that you realize just how important
              that experience played in your maturation process.
            </blockquote>
            <blockquote className="text-xl font-light mb-6">
              The brotherly bond, building of trust, great times, challenges and
              innumerable experiences all contributed to making be the person I
              am today. I am an enthusiastic advocate for the fraternity
              experience, and am forever grateful for what Gamma Iota did for
              me.”
            </blockquote>
            <figcaption className="flex items-center space-x-2">
              <div className="text-left">
                <p className="font-medium">John Heffner</p>
                <p className="text-sm text-gray-500">Pledge Class 1981</p>
              </div>
            </figcaption>
          </figure>
          <figure className="rounded-lg shadow-md bg-white p-8 flex flex-col items-center justify-center hover:shadow-lg">
            <blockquote className="text-xl font-light mb-6">
              “When it&apos;s all over you&apos;ll only be remembered by your
              good deeds. And the people who&apos;ll be doing the most
              remembering... That&apos;s your family and your friends.
            </blockquote>
            <blockquote className="text-xl font-light mb-6">
              Delta Sigma Phi crosses those boundaries. I met friends at first.
              30 years later, I mean it when I call them brothers. I run into
              someone I haven&apos;t seen for 20 years, and it&apos;s like we
              talked yesterday. Adventures we had, and our successes and
              failures since the last time we met. I&apos;ve had business
              partners from the fraternity. Brothers have helped me along the
              way, went to my wedding, supported me in harder times. When I need
              them in the future, they&apos;ll be there.”
            </blockquote>
            <figcaption className="flex items-center space-x-2">
              <div className="text-left">
                <p className="font-medium">Chris Hall</p>
                <p className="text-sm text-gray-500">Pledge Class 1995</p>
              </div>
            </figcaption>
          </figure>
          <figure className="rounded-lg shadow-md bg-white p-8 flex flex-col items-center justify-center hover:shadow-lg">
            <blockquote className="text-xl font-light mb-6">
              “Lorem Ipsum”
            </blockquote>
            <figcaption className="flex items-center space-x-2">
              <div className="text-left">
                <p className="text-lg font-medium">Jane Doe</p>
                <p className="text-sm text-gray-500">Active Member</p>
              </div>
            </figcaption>
          </figure>
          <figure className="rounded-lg shadow-md bg-white p-8 flex flex-col items-center justify-center hover:shadow-lg">
            <blockquote className="text-xl font-light mb-6">
              “Lorem Ipsum”
            </blockquote>
            <figcaption className="flex items-center space-x-2">
              <div className="text-left">
                <p className="text-lg font-medium">Jane Doe</p>
                <p className="text-sm text-gray-500">Active Member</p>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
      {/* Contact Section */}
      <Contact />
    </main>
  );
}
