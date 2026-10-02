import { defineField, defineType } from "sanity";
import { asOptions } from "./options";

// Keep in sync with eraColors in the website's TimelineItem and the era
// filter on the History page.
export const ERAS = ["Founding Era", "Early Years", "Growth Period", "Modern Era"];

export default defineType({
  name: "timelineEntry",
  title: "History Timeline Entry",
  type: "document",
  fields: [
    defineField({
      name: "year",
      title: "Year",
      type: "number",
      validation: (rule) => rule.required().integer().min(1900).max(2100),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "era",
      title: "Era",
      type: "string",
      options: { list: asOptions(ERAS), layout: "radio", direction: "horizontal" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
      description:
        "Optional. After uploading, click the crop icon and drag the circle onto " +
        "the most important part so the timeline card crops around it.",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Description for screen readers",
          type: "string",
          description: 'What the photo shows, e.g. "Brothers in front of the chapter house, 1969".',
        }),
      ],
    }),
    defineField({
      name: "showOnHomePage",
      title: "Show on home page",
      type: "boolean",
      description:
        'Adds this entry to the "Our Legacy" milestones on the home page (ordered by year). Three works best.',
      initialValue: false,
    }),
    defineField({
      name: "homeSummary",
      title: "Home page summary",
      type: "text",
      rows: 2,
      description: "Optional shorter text for the home page. Leave blank to use the full description.",
      hidden: ({ document }) => !document?.showOnHomePage,
    }),
  ],
  orderings: [
    {
      title: "Year",
      name: "yearAsc",
      by: [
        { field: "year", direction: "asc" },
        { field: "title", direction: "asc" },
      ],
    },
  ],
  preview: {
    select: { title: "title", year: "year", era: "era", home: "showOnHomePage", media: "image" },
    prepare: ({ title, year, era, home, media }) => ({
      title: `${year ?? "????"} · ${title ?? ""}`,
      subtitle: [era, home ? "On home page" : null].filter(Boolean).join(" · "),
      media,
    }),
  },
});
