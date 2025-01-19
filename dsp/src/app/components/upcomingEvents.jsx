export default function upcomingEvents() {
  return (
    <section>
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 class="mb-4 tracking-tight">Upcoming Events</h2>
        </div>
        <div class="grid gap-8 lg:grid-cols-2">
          <article class="hover:shadow-lg p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <h3 class="mb-2 text-2xl font-bold tracking-tight ">
              Bike 2 Boise Alumni Dinner | Apr. 5, 2025
            </h3>
            <p class="mb-5 font-light ">
              Celebrate and reunite with brothers in Boise at the annual Bike 2
              Boise alumni dinner! This year&amp;s dinner will be held at the
              Stonehouse!
            </p>
            {/* <p class="mb-5 font-light ">BBQ, games, and more!</p> */}
            <div class="flex justify-between items-center">
              <button className="cta-button inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center  rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                <a href="https://www.paypal.com/ncp/payment/SDH27N6PHHSYU">
                  <p className="cta-text">RSVP Today</p>
                </a>
              </button>
              <button className="cta-button inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center  rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                <a href="/events/b2b">
                  <p className="cta-text">Learn More</p>
                </a>
              </button>
            </div>
          </article>
          <article class="flex flex-col hover:shadow-lg p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <h3 class="mb-2 text-2xl font-bold tracking-tight ">
              75th Anniversary | April 25 to 27, 2025
            </h3>
            <p class="mb-5 font-light ">
              3 day event celebrating the 75th anniversary of the Gamma Iota
              chapter of Delta Sigma Phi at the University of Idaho. Planned
              activities include informal reception, golf tournament, campus
              tours, and dinner.
            </p>
            <div>
              <div class="flex justify-between items-center">
                <button className="cta-button inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center  rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                  <a href="https://www.eventbrite.com/e/delta-sigma-phi-75th-anniversary-celebration-tickets-1154180818899?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl">
                    <p className="cta-text">RSVP Today</p>
                  </a>
                </button>
                <button className="cta-button inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center  rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                  <a href="/events/75th-anniversary">
                    <p className="cta-text">Learn More</p>
                  </a>
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
