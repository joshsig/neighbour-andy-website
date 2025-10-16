import { defineField, defineType } from "sanity";

export default defineType({
    name: 'video',
    title: 'Video',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required().max(100),
        }),
        defineField({
            name: 'videoUrl',
            title: 'Video URL',
            type: 'url',
        }),
        defineField({
            name: 'videoType',
            title: 'Video Type',
            type: 'string',
            options: {
                list: ['primary', 'secondary'],
            },
            validation: (Rule) => Rule.required().custom(async (value, context) => {
                if (value === 'primary') {
                    const { document, getClient } = context;
                    if (!document) return true; // Skip validation if no document context

                    const client = getClient({ apiVersion: '2023-05-03' });

                    // Check if there's already a primary video (excluding current document if editing)
                    const existingPrimary = await client.fetch(
                        `*[_type == "video" && videoType == "primary" && _id != $id][0]`,
                        { id: document._id }
                    );

                    if (existingPrimary) {
                        return 'Only one primary video is allowed. Please change the existing primary video to secondary first.';
                    }
                }
                return true;
            }),
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Lower numbers appear first. Primary video will always appear first regardless of order.',
            validation: (Rule) => Rule.required().min(0),
        }),
    ],
})