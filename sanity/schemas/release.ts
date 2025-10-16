import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'release',
    title: 'Release',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required().max(100),
        }),
        defineField({
            name: 'releaseType',
            title: 'Release Type',
            type: 'string',
            options: {
                list: ['album', 'single', 'ep', 'mixtape', 'other'],
            },
        }),
        defineField({
            name: 'releaseDate',
            title: 'Release Date',
            type: 'date',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                    description: 'Important for SEO and accessibility.',
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title',
        },
    },
})