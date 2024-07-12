import Image from "next/image";
import Contact from "./components/contact.jsx";
import placeholderImage from "../../public/images/placeholder.png";

export default function Home() {
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
            <a
              href="/donate"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center  rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Donate Now
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="/volunteer"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center  border rounded-lg "
            >
              Volunteer
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image src={placeholderImage} alt="Placeholder Image"></Image>
          </div>
        </div>
      </section>
      {/* Alumni Memories Gallery */}
      <section>
        <div className="max-w-screen-xl px-4 py-8 mx-auto">
          <div className="text-center">
            <h2>Alumni Memories</h2>
            <p className="mb-8">
              Relive the moments with our alumni community from Bike to Boise,
              to Sailors Ball, and more!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              <Image
                src={placeholderImage}
                alt="Placeholder Image"
                className="w-full h-auto rounded-lg"
              ></Image>{" "}
            </div>
            <div>
              <Image
                src={placeholderImage}
                alt="Placeholder Image"
                className="w-full h-auto rounded-lg"
              ></Image>{" "}
            </div>
            <div>
              <Image
                src={placeholderImage}
                alt="Placeholder Image"
                className="w-full h-auto rounded-lg"
              ></Image>{" "}
            </div>
            <div>
              <Image
                src={placeholderImage}
                alt="Placeholder Image"
                className="w-full h-auto rounded-lg"
              ></Image>{" "}
            </div>
            <div>
              <Image
                src={placeholderImage}
                alt="Placeholder Image"
                className="w-full h-auto rounded-lg"
              ></Image>{" "}
            </div>
            <div>
              <Image
                src={placeholderImage}
                alt="Placeholder Image"
                className="w-full h-auto rounded-lg"
              ></Image>{" "}
            </div>
            <div>
              <Image
                src={placeholderImage}
                alt="Placeholder Image"
                className="w-full h-auto rounded-lg"
              ></Image>{" "}
            </div>
            <div>
              <Image
                src={placeholderImage}
                alt="Placeholder Image"
                className="w-full h-auto rounded-lg"
              ></Image>{" "}
            </div>
            <div>
              <Image
                src={placeholderImage}
                alt="Placeholder Image"
                className="w-full h-auto rounded-lg"
              ></Image>{" "}
            </div>
            <div>
              <Image
                src={placeholderImage}
                alt="Placeholder Image"
                className="w-full h-auto rounded-lg"
              ></Image>{" "}
            </div>
            <div>
              <Image
                src={placeholderImage}
                alt="Placeholder Image"
                className="w-full h-auto rounded-lg"
              ></Image>{" "}
            </div>
            <div>
              <Image
                src={placeholderImage}
                alt="Placeholder Image"
                className="w-full h-auto rounded-lg"
              ></Image>{" "}
            </div>
          </div>
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
                <a
                  href="/events"
                  className="inline-flex items-center justify-center px-4 py-2.5 text-center rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                >
                  Events
                </a>
                <a
                  href="/gammaEye"
                  className="inline-flex items-center justify-center px-4 py-2.5 text-center  border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100  dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  Gamma Eye Newsletter
                </a>
              </div>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image src={placeholderImage} alt="Placeholder Image"></Image>
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
            <blockquote className="mb-6">
              “Joining this fraternity has been an incredible experience. I've
              made lifelong friends, developed valuable leadership skills, and
              discovered a strong sense of belonging. I highly recommend it to
              anyone seeking a supportive and enriching community.”
            </blockquote>
            <figcaption className="flex items-center space-x-2">
              <div className="text-left">
                <h4 className="text-lg font-medium">John Doe</h4>
                <p className="text-sm text-gray-500">Pledge Class XX</p>
              </div>
            </figcaption>
          </figure>
          <figure className="rounded-lg shadow-md bg-white p-8 flex flex-col items-center justify-center hover:shadow-lg">
            <blockquote className="text-xl font-light mb-6">
              “Being a part of this fraternity has challenged me to grow both
              personally and professionally. The brotherhood has provided me
              with invaluable mentorship and opportunities to give back to the
              community. It's truly a place where you can find your purpose.
              pen_spark ”
            </blockquote>
            <figcaption className="flex items-center space-x-2">
              <div className="text-left">
                <h4 className="text-lg font-medium">Jane Doe</h4>
                <p className="text-sm text-gray-500">Active Member</p>
              </div>
            </figcaption>
          </figure>
          <figure className="rounded-lg shadow-md bg-white p-8 flex flex-col items-center justify-center hover:shadow-lg">
            <blockquote className="text-xl font-light mb-6">
              “The brotherhood has been a source of constant support throughout
              my college years. From late-night study sessions to celebrating
              milestones, these guys have always been there for me. I'm grateful
              for the lasting friendships and memories I've made here.”
            </blockquote>
            <figcaption className="flex items-center space-x-2">
              <div className="text-left">
                <h4 className="text-lg font-medium">Jane Doe</h4>
                <p className="text-sm text-gray-500">Active Member</p>
              </div>
            </figcaption>
          </figure>
          <figure className="rounded-lg shadow-md bg-white p-8 flex flex-col items-center justify-center hover:shadow-lg">
            <blockquote className="text-xl font-light mb-6">
              “This fraternity has pushed me outside my comfort zone in the best
              way possible. From participating in philanthropy events to taking
              on leadership roles, I've gained valuable skills and confidence.
              It's been a journey of self-discovery and personal growth.
              pen_spark ”
            </blockquote>
            <figcaption className="flex items-center space-x-2">
              <div className="text-left">
                <h4 className="text-lg font-medium">Jane Doe</h4>
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
