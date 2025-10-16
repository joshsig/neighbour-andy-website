import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import show from './sanity/schemas/show'
import video from './sanity/schemas/video'
import release from './sanity/schemas/release'

export default defineConfig({
    name: 'neighbour-andy',
    title: 'Neighbour Andy',
    // Using test environment credentials
    // When migrating to client account, update these values
    projectId: 'z72jw93i',
    dataset: 'development',
    plugins: [structureTool()],
    schema: {
        types: [show, video, release],
    },
    cors: {
        // Allow requests from your local development server and Sanity Studio
        origins: [
            'http://localhost:3000',
            'http://localhost:3333',
            'http://127.0.0.1:3000',
            'http://127.0.0.1:3333',
        ],
        credentials: true,
    },
})
