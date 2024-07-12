import Image from "next/image";
import UpcomingEvents from "../components/upcomingEvents.jsx";
import placeholderImage from "../../../public/images/placeholder.png";

// Test
// import Link from "next/link";
// export const revalidate = 30; // revalidate at most 30 seconds
// import { Card, CardContent } from "@/components/ui/card";
// import { client, urlFor } from "./lib/sanity";

// import simpleBlogCard from "../../../lib/interface.js";

// async function getData() {
//   const query = `
//   *[_type == 'blog'] | order(_createdAt desc) {
//     title,
//       smallDescription,
//       "currentSlug": slug.current,
//       titleImage
//   }`;

//   const data = await client.fetch(query);

//   return data;
// }

// ///////////////

export default async function news() {
  //
  // const data = await getData();
  //
  return (
    <main>
      {/* Hero Section */}
      <section>
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
      {/* Temp Message */}
      <h1>This Page Is Under Construction</h1>
      {/* Blog Post List */}
      {/* <div className="grid grid-cols-1  md:grid-cols-2 mt-5 gap-5">
        {data.map((post, idx) => (
          <Card key={idx}>
            <Image
              src={urlFor(post.titleImage).url()}
              alt="image"
              width={500}
              height={500}
              className="rounded-t-lg h-[200px] object-cover"
            />

            <CardContent className="mt-5">
              <h3 className="text-lg line-clamp-2 font-bold">{post.title}</h3>
              <p className="line-clamp-3 text-sm mt-2 text-gray-600 dark:text-gray-300">
                {post.smallDescription}
              </p>
              <Button asChild className="w-full mt-7">
                <Link href={`/blog/${post.currentSlug}`}>Read More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div> */}
    </main>
  );
}
