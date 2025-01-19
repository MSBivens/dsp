export default function events() {
  return (
    <main>
      {/* Hero Section */}
      <section>
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h1 className="mb-4 tracking-tight">A Time Honored Tradition</h1>
            <p className="mb-4">
              Please enjoy our montage of our brothers biking from Moscow to
              Boise, a time-honored tradition over 60 years old! This event has
              been the focal point of the chapter&amp;s efforts to raises money
              to support charitable organizations like Easter Seals, March of
              Dimes, Mountain States Tumor Institute, and Hope House.
            </p>
          </div>
          <div className="">
            <iframe
              class="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl"
              src="https://www.youtube.com/embed/YIPh4V6ORoM?si=Ih6gvC9uvVQxXFk0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
      {/* CTA */}
      <section>
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md">
            <h3 className="mb-4 tracking-tight">
              Connect with Gamma Iota Brothers
            </h3>
            <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Register today to attend this year&amp;s Bike to Boise Alumni
              Dinner at the Stonehouse in Boise, ID.
            </p>
            <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Use the link below to purchase your ticket or sponsor an
              undergraduate to attend the event.
            </p>
            <div class="flex flex-col space-y-4 sm:flex-row  sm:space-y-0">
              <button className="cta-button">
                <a
                  href="https://www.paypal.com/ncp/payment/SDH27N6PHHSYU"
                  className="cta-text"
                >
                  RSVP Today!
                </a>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
