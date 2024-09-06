import Link from "next/link";

export default function privacy() {
  const sitemapData = [
    {
      title: "Our Brotherhood",
      pages: [
        { title: "About", href: "/about" },
        { title: "History", href: "/history" },
        { title: "Philanthropy", href: "/philanthropy" },
      ],
    },
    {
      title: "Get Involved",
      pages: [
        { title: "Alumni", href: "/alumni" },
        { title: "Volunteer", href: "/volunteer" },
        { title: "Donate", href: "/donate" },
      ],
    },
    {
      title: "Stay Connected",
      pages: [
        { title: "Events", href: "/events" },
        { title: "News", href: "/news" },
        { title: "Newsletter", href: "/newsletter" },
      ],
    },
  ];
  return (
    <main>
      {/* Hero Section */}
      <section>
        <div class="mt-8 px-4 mx-auto max-w-screen-xl text-center lg:px-12">
          <h1 class="mb-4 tracking-tight leading-none">Sitemap</h1>
        </div>
      </section>
      <div className="mt-8 px-4 mx-auto max-w-screen-xl lg:px-12">
        {sitemapData.map((section) => (
          <div key={section.title}>
            <h2 className="text-2xl font-semibold mb-2 mt-4">
              {section.title}
            </h2>
            <ul>
              {section.pages.map((page) => (
                <li key={page.title}>
                  <Link href={page.href}>
                    <p className="text-gray-600 hover:text-blue-500">
                      {page.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
