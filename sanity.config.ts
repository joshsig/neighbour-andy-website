import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import show from './sanity/schemas/show'

export default defineConfig({
    name: 'neighbour-andy',
    title: 'Neighbour Andy',
    // Using test environment credentials
    // When migrating to client account, update these values
    projectId: 'z72jw93i',
    dataset: 'development',
    plugins: [structureTool()],
    schema: {
        types: [show],
    },
})
