import Image from "next/image";
import UpcomingEvents from "../components/upcomingEvents.jsx";
import placeholderImage from "../../../public/images/placeholder.png";
import event1 from "../../../public/images/event1.jpg";
import event2 from "../../../public/images/event2.jpg";

export default function events() {
  return (
    <main>
      {/* Hero Section */}
      <section>
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Don&apos;t Miss The Next Event
            </h2>
            <p className="mb-4">
              The events hosted by the undergraduate and alumni chapter are a
              great way to connect with old and new brothers and learn more
              about the fraternity. Check out the upcoming events below and make
              sure to RSVP if you plan on attending.
            </p>
          </div>
          <div className="">
            <Image
              className="rounded-lg"
              src={event1}
              alt="Placeholder Image"
              width={800}
              height={800}
            ></Image>
            {/* <Image
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src={event2}
              alt="Placeholder Image"
            ></Image> */}
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
            <div class="flex flex-col space-y-4 sm:flex-row  sm:space-y-0">
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
        </div>
      </section>
    </main>
  );
}
