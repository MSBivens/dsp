import { defineArrayMember, defineField, defineType } from "sanity";

// Keep in sync with the conflict filter on the website's Veteran Stories page.
export const CONFLICTS = [
  "World War I",
  "World War II",
  "Korean War",
  "Vietnam War",
  "Cold War Era",
  "Gulf War",
  "Global War on Terrorism",
  "Operation Iraqi Freedom",
  "Operation Enduring Freedom",
  "Peacetime Service",
  "Expeditionary & Global Operations",
];

export const BRANCHES = [
  "Army",
  "Navy",
  "Air Force",
  "Marines",
  "Coast Guard",
  "National Guard",
];

// Plain-string lists get their labels sentence-cased by the Studio
// ("Coast guard"); explicit titles keep the capitalization as written.
const asOptions = (values) => values.map((value) => ({ title: value, value }));

const UNKNOWN_NOTE =
  "Leave blank if unknown. Never type placeholder text: the website shows " +
  '"Not yet documented" and asks visitors for help.';

export default defineType({
  name: "veteran",
  title: "Veteran",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Page address",
      type: "slug",
      description:
        'Used in the page URL, e.g. "arnold-candry" → /veterans/arnold-candry. ' +
        "Click Generate after entering the name. Avoid changing it once published, " +
        "as it breaks existing links.",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "pledgeClass",
      title: "Pledge class",
      type: "number",
      description: `Year, e.g. 1957. ${UNKNOWN_NOTE}`,
      validation: (rule) => rule.integer().min(1900).max(2100),
    }),
    defineField({
      name: "branches",
      title: "Branches",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: { list: asOptions(BRANCHES) },
      description: `Select every branch served in. ${UNKNOWN_NOTE}`,
    }),
    defineField({
      name: "conflicts",
      title: "Conflicts / eras",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      options: { list: asOptions(CONFLICTS) },
      description: `Select every conflict or era that applies. ${UNKNOWN_NOTE}`,
    }),
    defineField({
      name: "rank",
      title: "Rank",
      type: "string",
      description: `Highest rank held. ${UNKNOWN_NOTE}`,
    }),
    defineField({
      name: "yearsOfService",
      title: "Years of service",
      type: "string",
      description: `e.g. "1962-1983" or "1946-1948 (Navy); 1953-1974 (Army)". ${UNKNOWN_NOTE}`,
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      description:
        "After uploading, click the crop icon and drag the circle onto the " +
        "veteran's face so cards and page headers crop around it.",
      options: { hotspot: true },
    }),
    defineField({
      name: "shortBio",
      title: "Short bio",
      type: "text",
      rows: 3,
      description:
        "One or two sentences shown on the Veteran Stories cards. Aim for under 250 characters.",
      validation: (rule) => rule.max(250).warning("Long bios get cut off on the cards."),
    }),
    defineField({
      name: "fullStory",
      title: "Full story",
      type: "array",
      description: "Supports bold, italics, links and bulleted or numbered lists.",
      of: [
        defineArrayMember({
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [
            { title: "Bullet", value: "bullet" },
            { title: "Numbered", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  defineField({
                    name: "href",
                    type: "url",
                    title: "URL",
                    validation: (rule) =>
                      rule.uri({ scheme: ["http", "https", "mailto"] }),
                  }),
                ],
              },
            ],
          },
        }),
      ],
    }),
    defineField({
      name: "decorations",
      title: "Decorations",
      type: "text",
      rows: 3,
      description: `Medals and awards, separated by commas or semicolons. ${UNKNOWN_NOTE}`,
    }),
  ],
  orderings: [
    {
      title: "Name",
      name: "nameAsc",
      by: [{ field: "name", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "name",
      rank: "rank",
      branches: "branches",
      media: "photo",
    },
    prepare({ title, rank, branches, media }) {
      return {
        title,
        subtitle: [rank, branches?.join(" / ")].filter(Boolean).join(" · "),
        media,
      };
    },
  },
});
