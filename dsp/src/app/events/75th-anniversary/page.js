import Image from "next/image";
import reunionCover from "../../../../public/images/anniversary.jpg";

export default function events() {
  return (
    <main>
      {/* Hero Section */}
      <section>
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h1 className="mb-4 tracking-tight">
              Delta Sigma Phi 75th Anniversary Celebration
            </h1>
            <p className="mb-4">
              Join us as we commemorate 75 years of brotherhood, friendship, and
              lasting memories. This event is open to all brothers, big/little
              sisters, dream girls, and partners/spouses.
            </p>
          </div>
          <div className="">
            <Image
              className="rounded-lg"
              src={reunionCover}
              alt="Brothers gathered at the chapter house"
              width={800}
              height={800}
            ></Image>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md">
            <h3 className="mb-4 tracking-tight">
              Celebrate with us in Moscow, Idaho
            </h3>
            <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Late registration begins April 6th
            </p>
            <div class="flex flex-col space-y-4 sm:flex-row  sm:space-y-0">
              <button className="cta-button">
                <a
                  href="https://www.eventbrite.com/e/delta-sigma-phi-75th-anniversary-celebration-tickets-1154180818899?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl"
                  className="cta-text"
                >
                  RSVP Today!
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Hotels */}
      <section>
        <div className="px-4 mx-auto max-w-screen-xl">
          <div className="max-w-screen-md">
            <h3 className="mb-4 tracking-tight">
              Hotel Information and Accommodations
            </h3>
            <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              While Airbnb is an option, these can be very limited in Moscow. We
              have contracted with two hotels in the area to help accomodate our
              brothers and guests.
            </p>
            <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              <strong>Residence Inn Pullman</strong>
              <br />
              - Price: $169.00 USD per night
              <br />- Last Day to Book:{" "}
              <strong>Wednesday, March 26, 2025</strong>
              <br />- Registration Link:
              <a
                href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1736442177167&key=GRP&guestreslink2=true&app=resvlink"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Click here to book
              </a>
              <br />- Or call: <strong>509-332-4400</strong>
            </p>

            <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              <strong>Best Western Plus</strong>
              <br />
              - Double Queen Room: $179.00 per night
              <br />
              - Single King Room: $169.00 per night
              <br />- Book by: <strong>February 25, 2025</strong>
              <br />- To reserve:
              <ul>
                <li>
                  Visit the{" "}
                  <a
                    href="https://www.bestwestern.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500"
                  >
                    Reservations page
                  </a>
                </li>
                <li>
                  Or call: <strong>208-882-0550 x 0</strong> and mention{" "}
                  <strong>Delta Sigma Phi 75th Reunion</strong>
                </li>
              </ul>
              - When using the link, please confirm your arrival and departure
              dates at the top of the first page.
            </p>
          </div>
        </div>
      </section>
      {/* Schedule */}
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl">
          <div className="max-w-screen-md">
            <h3 className="mb-4 tracking-tight">Schedule of Events</h3>
          </div>
          <div className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            <h2 className="text-xl font-semibold">Friday, April 25th</h2>
            <ul className="list-disc pl-6">
              <li>
                <strong>Noon - 4:00 p.m.</strong> - Early Check-In, Chapter
                Facility
              </li>
              <li>
                <strong>3:00 p.m. - 5:00 p.m.</strong> - 9 Hole Golf Tournament,
                Golf Course
              </li>
              <li>
                <strong>6:00 p.m. - 9:00 p.m.</strong> - Check-In & Informal
                Reception, Vandal Ballroom, Bruce Pitman Center
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">Saturday, April 26th</h2>
            <ul className="list-disc pl-6">
              <li>
                <strong>7:00 a.m. - 8:30 a.m.</strong> - Continental Breakfast &
                House Tour, Chapter Facility
              </li>
              <li>
                <strong>9:00 a.m.</strong> - Campus Tour
              </li>
              <li>
                <strong>10:00 a.m. - 11:00 a.m.</strong> - House Tours, Chapter
                Facility
              </li>
              <li>
                <strong>Noon - 2:00 p.m.</strong> - Corn Hole Tournament,
                Chapter Facility
              </li>
              <li>
                <strong>Noon - 2:00 p.m.</strong> - Food Truck, Chapter Facility
              </li>
              <li>
                <strong>3:00 p.m.</strong> - Campus Tour
              </li>
              <li>
                <strong>6:00 p.m. - 9:00 p.m.</strong> - Formal Reception &
                Banquet, International Ballroom, Bruce Pitman Center
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">Sunday, April 27th</h2>
            <ul className="list-disc pl-6">
              <li>
                <strong>8:00 a.m. - 9:00 a.m.</strong> - Continental Breakfast,
                Chapter Facility
              </li>
              <li>
                <strong>9:00 a.m. - 10:00 a.m.</strong> - Future of Gamma Iota &
                Send-Off, Chapter Facility
              </li>
              <li>
                <strong>11:00 a.m. - 1:00 p.m.</strong> - ACB & CCAB Planning
                Meeting, Borah Theater, Bruce Pitman Center
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
