import { defineField, defineType } from "sanity";

// Single document (fixed ID "siteSettings"); see sanity.config.js.
export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fieldsets: [
    { name: "contact", title: "Contact" },
    { name: "social", title: "Social media" },
    { name: "chapter", title: "Undergraduate chapter stats (home page)" },
    { name: "files", title: "Files" },
  ],
  fields: [
    defineField({
      name: "contactEmail",
      title: "Contact email",
      type: "email",
      fieldset: "contact",
      description:
        'Used everywhere the site shows an email: footer, home page contact section, Donate page and the veterans\' "can you help?" link.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "mailingAddress",
      title: "Mailing address",
      type: "text",
      rows: 3,
      fieldset: "contact",
      description: "Shown in the home page contact section. One line per row.",
    }),
    defineField({
      name: "facebookUrl",
      title: "Facebook",
      type: "url",
      fieldset: "social",
    }),
    defineField({
      name: "instagramUrl",
      title: "Instagram",
      type: "url",
      fieldset: "social",
    }),
    defineField({
      name: "linkedinUrl",
      title: "LinkedIn",
      type: "url",
      fieldset: "social",
    }),
    defineField({
      name: "chapterGpa",
      title: "Chapter GPA",
      type: "string",
      fieldset: "chapter",
      description: 'As displayed, e.g. "2.9+". Leave blank to hide.',
    }),
    defineField({
      name: "activeMembers",
      title: "Active members",
      type: "string",
      fieldset: "chapter",
      description: 'As displayed, e.g. "30+". Leave blank to hide.',
    }),
    defineField({
      name: "knownVeteransPdf",
      title: "Known Veterans PDF",
      type: "file",
      fieldset: "files",
      description:
        'Opened by the "View Known Veterans (PDF)" button on the Veteran Stories page. Upload a new file to replace it.',
      options: { accept: "application/pdf" },
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
});
