import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import show from './schemas/show'

export default defineConfig({
    name: 'neighbour-andy',
    title: 'Neighbour Andy',
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    plugins: [structureTool()],
    schema: {
        types: [show],
    },
})
