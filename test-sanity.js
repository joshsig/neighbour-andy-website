// Test script to verify Sanity connection
const { createClient } = require('@sanity/client');

const client = createClient({
    projectId: 'z72jw93i',
    dataset: 'development',
    useCdn: true,
    apiVersion: '2023-05-03',
});

async function testConnection() {
    try {
        console.log('Testing Sanity connection...');
        console.log('Project ID:', client.config().projectId);
        console.log('Dataset:', client.config().dataset);

        // Try to fetch all documents
        const result = await client.fetch('*[_type == "show"]');
        console.log('✅ Connection successful!');
        console.log(`Found ${result.length} show documents`);
        console.log('Sample document:', result[0] || 'No documents found');

    } catch (error) {
        console.error('❌ Connection failed:', error.message);
        process.exit(1);
    }
}

testConnection();
