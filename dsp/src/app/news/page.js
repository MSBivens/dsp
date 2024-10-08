import Link from "next/link";
import { getSortedPostsData } from "../../../lib/posts";

export default function News() {
  const allPostsData = getSortedPostsData();

  return (
    <main>
      {/* Hero Section */}
      <section>
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 class="mb-4 tracking-tight leading-none">Stay Up To Date</h1>
          <p class=" sm:px-16 ">
            Discover the latest updates and stories from our chapter
          </p>
        </div>
      </section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12">
        <h2 className="text-4xl font-bold mb-5">News and Stories</h2>
        <ul>
          {allPostsData.map(({ id, title, date }) => (
            <li key={id} className="mb-4">
              <Link href={`/posts/${id}`}>
                <p className="text-xl font-semibold text-blue-500 hover:underline">
                  {title}
                </p>
              </Link>
              <p className="text-gray-600">{date}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
