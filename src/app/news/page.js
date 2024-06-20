import Image from "next/image";
import UpcomingEvents from "../components/upcomingEvents.jsx";
import placeholderImage from "../../../public/images/placeholder.png";

export default function news() {
  return (
    <main>
      {/* Hero Section */}
      <section class="bg-white dark:bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Latest
          </p>
          <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
            Stay Informed With Our News
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            Discover the latest updates and stories from our chapter
          </p>
        </div>
      </section>
      {/* Blog Post List */}
    </main>
  );
}
