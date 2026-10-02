import { defineArrayMember, defineField, defineType } from "sanity";

// Keep in sync with ICONS and COLORS in the website's DonationCard.
const ICONS = [
  { title: "Building", value: "building" },
  { title: "Graduation cap", value: "graduation" },
  { title: "Globe", value: "globe" },
  { title: "Heart", value: "heart" },
];
const COLORS = [
  { title: "Green", value: "green" },
  { title: "Purple", value: "purple" },
  { title: "Dark gray", value: "gray" },
];

// Single document (fixed ID "donatePage"); see sanity.config.js.
export default defineType({
  name: "donatePage",
  title: "Donate Page",
  type: "document",
  fields: [
    defineField({
      name: "givingOptions",
      title: "Ways to give",
      type: "array",
      description:
        'The donation cards, in display order (drag to reorder). The heading counts them automatically ("Three Ways to Give"). The layout fits three across.',
      of: [
        defineArrayMember({
          name: "givingOption",
          title: "Giving option",
          type: "object",
          fields: [
            defineField({ name: "title", title: "Title", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "subtitle", title: "Subtitle", type: "string", description: 'e.g. "Tax-Deductible • Academic Focus"' }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
            defineField({
              name: "benefits",
              title: "Bullet points",
              type: "array",
              of: [defineArrayMember({ type: "string" })],
            }),
            defineField({ name: "buttonText", title: "Button text", type: "string", validation: (rule) => rule.required() }),
            defineField({
              name: "buttonLink",
              title: "Button link",
              type: "url",
              description: "Where the button goes, e.g. the PayPal donation page.",
              validation: (rule) => rule.required().uri({ scheme: ["http", "https"] }),
            }),
            defineField({
              name: "icon",
              title: "Icon",
              type: "string",
              options: { list: ICONS, layout: "radio", direction: "horizontal" },
              initialValue: "heart",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "color",
              title: "Icon color",
              type: "string",
              options: { list: COLORS, layout: "radio", direction: "horizontal" },
              initialValue: "green",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "featured",
              title: "Featured",
              type: "boolean",
              description: 'Highlights the card with a purple border and a "Most Popular" banner.',
              initialValue: false,
            }),
          ],
          preview: {
            select: { title: "title", subtitle: "buttonLink", featured: "featured" },
            prepare: ({ title, subtitle, featured }) => ({
              title: featured ? `${title} (featured)` : title,
              subtitle,
            }),
          },
        }),
      ],
      validation: (rule) => [
        rule.required().min(1),
        rule.max(3).warning("The layout fits three cards across; a fourth wraps to a new row."),
        rule.custom((options) =>
          (options ?? []).filter((o) => o.featured).length > 1
            ? { message: "Only one card should be featured.", level: "warning" }
            : true,
        ),
      ],
    }),
    defineField({
      name: "impactStats",
      title: "Impact stats",
      type: "array",
      description: 'The "Your Impact" numbers, e.g. "$25K+" / "Raised Last 5 Years". Leave empty to hide the section.',
      of: [
        defineArrayMember({
          name: "impactStat",
          title: "Stat",
          type: "object",
          fields: [
            defineField({ name: "value", title: "Value", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "label", title: "Label", type: "string", validation: (rule) => rule.required() }),
          ],
          preview: {
            select: { title: "value", subtitle: "label" },
          },
        }),
      ],
      validation: (rule) => rule.max(3).warning("The layout fits three stats across."),
    }),
  ],
  preview: {
    prepare: () => ({ title: "Donate Page" }),
  },
});
