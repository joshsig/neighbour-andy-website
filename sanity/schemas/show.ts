import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'show',
    title: 'Show',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Show Title',
            type: 'string',
            validation: (Rule) => Rule.required().max(100),
        }),
        defineField({
            name: 'venue',
            title: 'Venue',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'object',
            fields: [
                {
                    name: 'city',
                    title: 'City',
                    type: 'string',
                    validation: (Rule) => Rule.required(),
                },
                {
                    name: 'state',
                    title: 'State/Province',
                    type: 'string',
                },
                {
                    name: 'country',
                    title: 'Country',
                    type: 'string',
                    validation: (Rule) => Rule.required(),
                },
            ],
        }),
        defineField({
            name: 'date',
            title: 'Date',
            type: 'datetime',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'doorsOpen',
            title: 'Doors Open',
            type: 'datetime',
        }),
        defineField({
            name: 'showStart',
            title: 'Show Start Time',
            type: 'datetime',
        }),
        defineField({
            name: 'ticketPrice',
            title: 'Ticket Price',
            type: 'object',
            fields: [
                {
                    name: 'advance',
                    title: 'Advance Price',
                    type: 'number',
                },
                {
                    name: 'door',
                    title: 'Door Price',
                    type: 'number',
                },
                {
                    name: 'currency',
                    title: 'Currency',
                    type: 'string',
                    options: {
                        list: [
                            { title: 'USD', value: 'USD' },
                            { title: 'CAD', value: 'CAD' },
                            { title: 'EUR', value: 'EUR' },
                            { title: 'GBP', value: 'GBP' },
                        ],
                    },
                    initialValue: 'USD',
                },
            ],
        }),
        defineField({
            name: 'ticketLink',
            title: 'Ticket Purchase Link',
            type: 'url',
        }),
        defineField({
            name: 'venueWebsite',
            title: 'Venue Website',
            type: 'url',
        }),
        defineField({
            name: 'description',
            title: 'Show Description',
            type: 'text',
            rows: 4,
        }),
        defineField({
            name: 'supportingActs',
            title: 'Supporting Acts',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'ageRestriction',
            title: 'Age Restriction',
            type: 'string',
            options: {
                list: [
                    { title: 'All Ages', value: 'all-ages' },
                    { title: '18+', value: '18-plus' },
                    { title: '19+', value: '19-plus' },
                    { title: '21+', value: '21-plus' },
                ],
            },
        }),
        defineField({
            name: 'venueImage',
            title: 'Venue Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string',
                },
            ],
        }),
        defineField({
            name: 'status',
            title: 'Show Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Upcoming', value: 'upcoming' },
                    { title: 'Sold Out', value: 'sold-out' },
                    { title: 'Cancelled', value: 'cancelled' },
                    { title: 'Postponed', value: 'postponed' },
                    { title: 'Completed', value: 'completed' },
                ],
            },
            initialValue: 'upcoming',
        }),
        defineField({
            name: 'featured',
            title: 'Featured Show',
            type: 'boolean',
            description: 'Mark as featured to highlight on the shows page',
            initialValue: false,
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
    ],
    preview: {
        select: {
            title: 'title',
            venue: 'venue',
            date: 'date',
            status: 'status',
        },
        prepare(selection) {
            const { title, venue, date, status } = selection
            const formattedDate = date ? new Date(date).toLocaleDateString() : 'No date'
            return {
                title: title || 'Untitled Show',
                subtitle: `${venue} - ${formattedDate} (${status})`,
            }
        },
    },
    orderings: [
        {
            title: 'Date (Newest First)',
            name: 'dateDesc',
            by: [{ field: 'date', direction: 'desc' }],
        },
        {
            title: 'Date (Oldest First)',
            name: 'dateAsc',
            by: [{ field: 'date', direction: 'asc' }],
        },
        {
            title: 'Featured First',
            name: 'featuredFirst',
            by: [
                { field: 'featured', direction: 'desc' },
                { field: 'date', direction: 'asc' },
            ],
        },
    ],
})
