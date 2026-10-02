import { defineField, defineType } from "sanity";

// Keep in sync with eventTypeColors in the website's EventsSection.
export const EVENT_TYPES = [
  { title: "Reunion", value: "reunion" },
  { title: "Fundraiser", value: "fundraiser" },
  { title: "Social", value: "social" },
  { title: "Ceremony", value: "ceremony" },
  { title: "Other", value: "other" },
];

export default defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      description:
        "First day of the event. The website shows upcoming events and hides " +
        "them automatically once they're over.",
      options: { dateFormat: "MMMM D, YYYY" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "endDate",
      title: "End date",
      type: "date",
      description: "Only for multi-day events, e.g. a reunion weekend. Leave blank for one-day events.",
      options: { dateFormat: "MMMM D, YYYY" },
      validation: (rule) =>
        rule.custom((endDate, { document }) =>
          !endDate || !document?.date || endDate >= document.date
            ? true
            : "End date can't be before the start date.",
        ),
    }),
    defineField({
      name: "time",
      title: "Time",
      type: "string",
      description: 'Local (Pacific) time as it should appear, e.g. "6:00 PM", "6–9 PM" or "TBA". Leave blank if not set.',
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: 'e.g. "Chapter House, Moscow, ID"',
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      description: "A sentence or two. The home page shows about two lines.",
      validation: (rule) =>
        rule.max(200).warning("Long descriptions get cut off on the home page."),
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "string",
      options: { list: EVENT_TYPES, layout: "radio", direction: "horizontal" },
      initialValue: "other",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "link",
      title: "Details / RSVP link",
      type: "url",
      description: "Optional. Registration, RSVP, tickets or a Facebook event page.",
      validation: (rule) => rule.uri({ scheme: ["http", "https"] }),
    }),
  ],
  orderings: [
    {
      title: "Date, newest first",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", date: "date", endDate: "endDate", location: "location" },
    prepare({ title, date, endDate, location }) {
      return {
        title,
        subtitle: [endDate ? `${date} – ${endDate}` : date, location]
          .filter(Boolean)
          .join(" · "),
      };
    },
  },
});
