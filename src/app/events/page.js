import Image from "next/image";
import UpcomingEvents from "../components/upcomingEvents.jsx";
import placeholderImage from "../../../public/images/placeholder.png";

export default function events() {
  return (
    <main>
      {/* Hero Section */}
      <section>
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Don't Miss The Next Event
            </h2>
            <p className="mb-4">
              The events hosted by the undergraduate and alumni chapter are a
              great way to connect with old and new brothers and learn more
              about the fraternity. Check out the upcoming events below and make
              sure to RSVP if you plan on attending.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <Image
              className="w-full rounded-lg"
              src={placeholderImage}
              alt="Placeholder Image"
            ></Image>
            <Image
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src={placeholderImage}
              alt="Placeholder Image"
            ></Image>
          </div>
        </div>
      </section>
      <UpcomingEvents />
      {/* CTA */}
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Connect with Gamma Iota Brothers
            </h2>
            <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Stay updated on upcoming events and connect with fellow brothers.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-4 py-2.5 text-base font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Update Contact Information
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
