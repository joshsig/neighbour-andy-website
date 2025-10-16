# Sanity CMS Setup and Migration Guide

> **📚 For comprehensive documentation, see [SANITY_TESTING_AND_MIGRATION_GUIDE.md](SANITY_TESTING_AND_MIGRATION_GUIDE.md)**

This document provides a quick reference for the Sanity CMS setup. For detailed testing procedures, migration steps, and troubleshooting, please refer to the comprehensive guide above.

## Overview

The Neighbour Andy website uses Sanity CMS for content management, specifically for managing concert/show information. This setup allows for easy content updates without code changes.

## Current Setup

### Project Details
- **Project ID**: `z72jw93i`
- **Dataset**: `development` (for testing), `production` (for live site)
- **Organization**: Neighbour Andy Dev
- **Studio URL**: [To be deployed]

### Schema
The current schema includes:
- **Show** documents with fields for:
  - Title, venue, location (city, state, country)
  - Date and time information
  - Ticket pricing and links
  - Supporting acts
  - Age restrictions
  - Venue images
  - Status (upcoming, sold out, cancelled, etc.)
  - Featured flag
  - Auto-generated slugs

## Setup Process

### 1. Prerequisites
- Node.js installed
- Sanity CLI installed globally: `npm install -g @sanity/cli`
- Sanity account (GitHub login used for setup)

### 2. Project Creation
```bash
# Login to Sanity (if not already logged in)
sanity login

# Create new project
sanity projects create --name "Neighbour Andy Test" --dataset development

# This creates:
# - Project ID: z72jw93i
# - Organization: Neighbour Andy Dev
# - Dataset: development
```

### 3. Environment Configuration
Create `.env.local` file in the project root:
```env
# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=z72jw93i
NEXT_PUBLIC_SANITY_DATASET=development
```

### 4. CLI Configuration
Create `sanity.cli.js` in the project root:
```javascript
module.exports = {
  api: {
    projectId: 'z72jw93i',
    dataset: 'development'
  }
}
```

### 5. Sanity Configuration
Update `sanity/sanity.config.ts` for deployment:
```typescript
export default defineConfig({
  name: 'neighbour-andy',
  title: 'Neighbour Andy',
  projectId: 'z72jw93i', // Use direct value for deployment
  dataset: 'development',
  plugins: [structureTool()],
  schema: {
    types: [show],
  },
})
```

## File Structure

```
project/
├── sanity/
│   ├── sanity.config.ts    # Studio configuration
│   └── schemas/
│       └── show.ts         # Show document schema
├── sanity.cli.js           # CLI configuration
├── .env.local             # Environment variables
└── app/
    └── lib/
        └── sanity.ts       # Client configuration
```

## Testing the Setup

### Local Development
```bash
# Start Sanity Studio locally
sanity dev

# Start Next.js app
npm run dev
```

### Connection Testing
The app is configured to use Sanity for show data, but currently uses mock data. To integrate:

1. Update `app/shows/page.tsx` to fetch from Sanity instead of using mock data
2. Create GROQ queries for fetching shows
3. Add proper TypeScript types

## Migration to Client Account

When ready to migrate to the client's Sanity account:

### Step 1: Client Account Setup
1. Client creates Sanity account at [sanity.io](https://sanity.io)
2. Client creates new organization
3. Client creates new project with production dataset

### Step 2: Data Migration
```bash
# Export data from test project
sanity dataset export development backup.tar.gz --project z72jw93i

# Import to production project (with new project ID)
sanity dataset import backup.tar.gz production --project [NEW_PROJECT_ID]
```

### Step 3: Update Configuration
1. Update `.env.local` with new project ID and dataset
2. Update `sanity.cli.js` with new credentials
3. Update `sanity/sanity.config.ts` if needed
4. Test connection with new credentials

### Step 4: Deploy Studio
```bash
# Deploy Sanity Studio to client's account
sanity deploy --project [NEW_PROJECT_ID]
```

### Step 5: Grant Access
- Add client team members to the Sanity project
- Set appropriate permissions (Editor, Administrator, etc.)
- Train client on Studio usage

## Content Management

### Studio Features
- Visual content editor
- Image upload and management
- Real-time collaboration
- Version history
- Scheduled publishing

### Adding Content
1. Access Studio at deployed URL
2. Click "Create" → "Show"
3. Fill in show details
4. Upload venue images
5. Set status and featured flag
6. Publish when ready

## Development Notes

### Current Implementation
- Show data is currently mocked in `app/shows/page.tsx`
- Sanity client is configured in `app/lib/sanity.ts`
- Schema is fully defined and ready for use

### Next Steps
1. Replace mock data with Sanity queries
2. Add image handling for venue photos
3. Implement featured shows carousel
4. Add show filtering and search
5. Set up webhooks for real-time updates

## Troubleshooting

### Common Issues

**Connection Errors**
- Verify project ID and dataset in environment variables
- Check Sanity account permissions
- Ensure CORS settings allow your domain

**Studio Deployment Issues**
- Verify CLI configuration matches project settings
- Check that project allows studio deployment

**Schema Errors**
- Run `sanity schema validate` to check schema syntax
- Ensure all required fields are defined

### Support
- Sanity Documentation: [sanity.io/docs](https://sanity.io/docs)
- Community: [sanity.io/community](https://sanity.io/community)

## Security Notes

- Never commit `.env.local` to version control
- Use production dataset for live site
- Grant minimal permissions to content editors
- Regularly backup content data

## Backup and Recovery

```bash
# Export dataset
sanity dataset export [dataset] backup.tar.gz

# Import dataset
sanity dataset import backup.tar.gz [dataset]

# List datasets
sanity dataset list
```

---

**Setup completed on**: October 7, 2025
**Test Project ID**: z72jw93i
**Status**: Ready for content population and migration
