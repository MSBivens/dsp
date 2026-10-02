import { defineField, defineType } from "sanity";

export default defineType({
  name: "newsletter",
  title: "Gamma Eye Edition",
  type: "document",
  fields: [
    defineField({
      name: "edition",
      title: "Edition number",
      type: "number",
      description: "e.g. 20 for the 20th edition. Each number can only be used once.",
      validation: (rule) =>
        rule
          .required()
          .integer()
          .min(1)
          .custom(async (edition, context) => {
            if (edition == null) return true;
            const id = context.document?._id?.replace(/^drafts\./, "");
            const duplicates = await context
              .getClient({ apiVersion: "2025-01-01" })
              .fetch(
                `count(*[_type == "newsletter" && edition == $edition && !(_id in [$id, "drafts." + $id])])`,
                { edition, id },
              );
            return duplicates === 0 ? true : `Edition ${edition} already exists.`;
          }),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: 'As listed on the archive page, e.g. "Gamma Eye 20th Edition".',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "issueDate",
      title: "Issue date",
      type: "date",
      description:
        "Pick the 1st of the month it was published; the website shows month and year " +
        '(e.g. "May 2025") and groups editions by year.',
      options: { dateFormat: "MMMM YYYY" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "pdf",
      title: "PDF",
      type: "file",
      description: "The newsletter itself. Visitors open it from the archive page.",
      options: { accept: "application/pdf" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
      description: "Optional one-line summary shown under the title.",
    }),
  ],
  orderings: [
    {
      title: "Edition, newest first",
      name: "editionDesc",
      by: [{ field: "edition", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", date: "issueDate" },
    prepare: ({ title, date }) => ({ title, subtitle: date }),
  },
});
