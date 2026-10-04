import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "scrapbook",
  title: "Scrapbook",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Page address",
      type: "slug",
      description:
        'Used in the page URL, e.g. "1960s-scrapbook" → /history/scrapbooks/1960s-scrapbook. ' +
        "Click Generate after entering the title. Avoid changing it once published, " +
        "as it breaks existing links.",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "years",
      title: "Years",
      type: "string",
      description: 'The years the scrapbook covers, e.g. "1965–1972". Leave blank if unknown.',
    }),
    defineField({
      name: "description",
      title: "Short description",
      type: "text",
      rows: 2,
      description: "Optional. One or two sentences shown on the History page card.",
      validation: (rule) => rule.max(200).warning("Long descriptions get cut off on the card."),
    }),
    defineField({
      name: "displayOrder",
      title: "Display order",
      type: "number",
      description: "Order on the History page: 1 shows first. Blank shows last.",
      validation: (rule) => rule.integer().min(1),
    }),
    defineField({
      name: "cover",
      title: "Cover",
      type: "image",
      description:
        "Optional image for the History page card. Leave blank to use the first page. " +
        "After uploading, click the crop icon and drag the circle onto the most important part.",
      options: { hotspot: true },
    }),
    defineField({
      name: "pages",
      title: "Pages",
      type: "array",
      description:
        "Scanned pages in book order. Drop several files at once to add them, and " +
        "drag to reorder. Click a page to add a caption.",
      options: { layout: "grid" },
      of: [
        defineArrayMember({
          type: "image",
          fields: [
            defineField({
              name: "caption",
              title: "Caption",
              type: "text",
              rows: 2,
              description: "Optional. Shown under the page, e.g. who is pictured and when.",
            }),
            defineField({
              name: "alt",
              title: "Description for screen readers",
              type: "string",
              description:
                'Optional. What the page shows, e.g. "Newspaper clipping about the 1963 Bike 2 Boise ride".',
            }),
          ],
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "displayOrderAsc",
      by: [
        { field: "displayOrder", direction: "asc" },
        { field: "title", direction: "asc" },
      ],
    },
  ],
  preview: {
    select: { title: "title", years: "years", pages: "pages", cover: "cover", first: "pages.0" },
    prepare: ({ title, years, pages, cover, first }) => {
      const count = Array.isArray(pages) ? pages.length : 0;
      return {
        title,
        subtitle: [years, `${count} page${count === 1 ? "" : "s"}`].filter(Boolean).join(" · "),
        media: cover?.asset ? cover : first,
      };
    },
  },
});
