# Sanity CMS Testing & Migration Guide for Neighbour Andy Website

**Last Updated**: October 7, 2025  
**Current Test Project ID**: `z72jw93i`  
**Test Dataset**: `development`  
**Purpose**: Testing Sanity CMS before migrating to client's production account

---

## Table of Contents

1. [Overview](#overview)
2. [Current Testing Setup](#current-testing-setup)
3. [Testing the System](#testing-the-system)
4. [Adding Content](#adding-content)
5. [Migration to Client Account](#migration-to-client-account)
6. [Troubleshooting](#troubleshooting)
7. [Technical Details](#technical-details)

---

## Overview

### Why This Setup?

This project uses a **temporary Sanity test account** to:
- Test the CMS integration without affecting production
- Build and validate the content structure
- Train team members on content management
- Prepare for seamless migration to the client's account

### Key Principle

All credentials and IDs are **environment-based**, making migration as simple as updating environment variables.

---

## Current Testing Setup

### Test Account Details

```
Project ID:    z72jw93i
Dataset:       development
Organization:  Neighbour Andy Dev
Status:        Active for testing
```

### File Structure

```
project-root/
├── .env.local                     # Environment variables (NOT in git)
├── sanity.config.ts              # Studio configuration
├── sanity.cli.ts                 # CLI configuration
├── test-sanity.js                # Connection test script
├── sanity/
│   └── schemas/
│       └── show.ts               # Show document schema
├── app/
│   ├── lib/
│   │   └── sanity.ts            # Client configuration
│   ├── shows/
│   │   └── page.tsx             # Shows page (integrated)
│   └── types/
│       └── show.ts              # TypeScript types
└── SANITY_TESTING_AND_MIGRATION_GUIDE.md  # This file
```

### Environment Variables

**File**: `.env.local` (create if doesn't exist)

```env
# Sanity CMS Configuration - TEST ENVIRONMENT
# These will be replaced during migration
NEXT_PUBLIC_SANITY_PROJECT_ID=z72jw93i
NEXT_PUBLIC_SANITY_DATASET=development
```

⚠️ **Important**: `.env.local` should be in `.gitignore` and never committed!

---

## Testing the System

### Step 1: Verify Connection

Test that everything is connected properly:

```bash
# From project root
node test-sanity.js
```

**Expected Output**:
```
Testing Sanity connection...
Project ID: z72jw93i
Dataset: development
✅ Connection successful!
Found X show documents
```

### Step 2: Start Sanity Studio

Launch the CMS interface locally:

```bash
# Install dependencies if needed
npm install

# Start Sanity Studio
npx sanity dev
```

The studio will open at: `http://localhost:3333`

### Step 3: Start Next.js Development Server

In a separate terminal:

```bash
npm run dev
```

Your site will be at: `http://localhost:3000`

### Step 4: Verify Integration

1. Go to `http://localhost:3333` (Sanity Studio)
2. Add a test show (see next section)
3. Go to `http://localhost:3000/shows`
4. Verify the show appears on the page

---

## Adding Content

### Creating a Show Document

1. **Open Sanity Studio**: `http://localhost:3333`
2. Click **"Create"** → **"Show"**
3. Fill in the required fields:

   **Required Fields**:
   - **Show Title**: e.g., "Higher Ground Concert"
   - **Venue**: e.g., "Higher Ground"
   - **Location**:
     - City: e.g., "South Burlington"
     - Country: e.g., "USA"
     - State (optional): e.g., "VT"
   - **Date**: Show date and time
   - **Slug**: Click "Generate" to auto-create from title

   **Optional Fields**:
   - **Doors Open**: When doors open
   - **Show Start Time**: When show begins
   - **Ticket Price**: Advance/door prices with currency
   - **Ticket Link**: URL to purchase tickets
   - **Venue Website**: Link to venue site
   - **Description**: Additional show information
   - **Supporting Acts**: Array of band names
   - **Age Restriction**: All Ages, 18+, 19+, or 21+
   - **Venue Image**: Upload a photo
   - **Status**: Upcoming, Sold Out, Cancelled, Postponed, or Completed
   - **Featured**: Mark as featured show

4. Click **"Publish"** when ready

### Show Schema Fields Reference

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | String | ✅ | Show title (max 100 chars) |
| `venue` | String | ✅ | Venue name |
| `location.city` | String | ✅ | City name |
| `location.state` | String | ❌ | State/Province |
| `location.country` | String | ✅ | Country |
| `date` | DateTime | ✅ | Show date and time |
| `doorsOpen` | DateTime | ❌ | Doors open time |
| `showStart` | DateTime | ❌ | Show start time |
| `ticketPrice.advance` | Number | ❌ | Advance ticket price |
| `ticketPrice.door` | Number | ❌ | Door ticket price |
| `ticketPrice.currency` | String | ❌ | Currency (USD, CAD, EUR, GBP) |
| `ticketLink` | URL | ❌ | Ticket purchase URL |
| `venueWebsite` | URL | ❌ | Venue website |
| `description` | Text | ❌ | Show description |
| `supportingActs` | Array | ❌ | List of supporting bands |
| `ageRestriction` | String | ❌ | Age limit |
| `venueImage` | Image | ❌ | Venue photo |
| `status` | String | ❌ | Show status (default: upcoming) |
| `featured` | Boolean | ❌ | Featured flag (default: false) |
| `slug` | Slug | ✅ | URL-friendly identifier |

### Sample Show Data

Here's example data to test with:

```json
{
  "title": "Higher Ground Concert",
  "venue": "Higher Ground",
  "location": {
    "city": "South Burlington",
    "state": "VT",
    "country": "USA"
  },
  "date": "2025-10-10T20:00:00Z",
  "doorsOpen": "2025-10-10T19:00:00Z",
  "showStart": "2025-10-10T20:30:00Z",
  "ticketPrice": {
    "advance": 25,
    "door": 30,
    "currency": "USD"
  },
  "ticketLink": "https://example.com/tickets",
  "description": "An incredible night of music!",
  "supportingActs": ["Racing Mount Pleasant", "Local Band"],
  "ageRestriction": "all-ages",
  "status": "upcoming",
  "featured": true,
  "slug": {
    "current": "higher-ground-oct-2025"
  }
}
```

---

## Migration to Client Account

### Overview

When ready to move to production, you'll:
1. Export all content from test account
2. Client creates their Sanity account
3. Import content to client's account
4. Update environment variables
5. Deploy

**Estimated Time**: 30-60 minutes

---

### Pre-Migration Checklist

Before starting migration:

- [ ] All content is finalized and reviewed
- [ ] Test environment is working perfectly
- [ ] Client has created Sanity account
- [ ] Client has added you as a project member
- [ ] You have the new Project ID and Dataset name
- [ ] Backup created of test environment

---

### Step 1: Export Test Data

From your test environment:

```bash
# Login to your test Sanity account
npx sanity login

# Export all data
npx sanity dataset export development backup-$(date +%Y%m%d).tar.gz --project z72jw93i

# Verify export
ls -lh backup-*.tar.gz
```

This creates a compressed backup of all your content.

---

### Step 2: Client Account Setup

**Client Actions** (can be done in advance):

1. Go to [sanity.io](https://sanity.io)
2. Sign up / Log in (GitHub, Google, or email)
3. Create new organization: "Neighbour Andy" (or their preferred name)
4. Create new project:
   - Name: "Neighbour Andy Website"
   - Dataset: `production`
5. Note the **new Project ID** (will look like: `abc123xyz`)
6. Add team members:
   - Go to **Project Settings** → **Members**
   - Add developers and content editors
   - Set appropriate permissions

---

### Step 3: Import Data to Client Account

**After receiving new Project ID**:

```bash
# Set new project ID as variable for convenience
NEW_PROJECT_ID="abc123xyz"  # Replace with actual ID
NEW_DATASET="production"     # Or client's chosen dataset name

# Import data to new project
npx sanity dataset import backup-YYYYMMDD.tar.gz $NEW_DATASET \
  --project $NEW_PROJECT_ID \
  --replace

# Verify import
npx sanity documents query '*[_type == "show"]' \
  --project $NEW_PROJECT_ID \
  --dataset $NEW_DATASET
```

---

### Step 4: Update Project Configuration

Update your project to use the new credentials:

#### 4.1. Update Environment Variables

**File**: `.env.local`

```env
# Sanity CMS Configuration - PRODUCTION ENVIRONMENT
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz
NEXT_PUBLIC_SANITY_DATASET=production
```

#### 4.2. Update CLI Configuration

**File**: `sanity.cli.ts`

```typescript
import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
    api: {
        projectId: 'abc123xyz',     // New project ID
        dataset: 'production'        // New dataset
    }
})
```

#### 4.3. Update Studio Configuration (for deployment)

**File**: `sanity.config.ts`

The studio config already uses environment variables from `.env.local`, so it should work automatically. However, if you need to deploy the studio to Sanity's hosting, you might want to hardcode the values:

```typescript
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import show from './sanity/schemas/show'

export default defineConfig({
    name: 'neighbour-andy',
    title: 'Neighbour Andy',
    projectId: 'abc123xyz',      // Hardcode for deployment
    dataset: 'production',        // Hardcode for deployment
    plugins: [structureTool()],
    schema: {
        types: [show],
    },
})
```

---

### Step 5: Test New Configuration

**Critical**: Test before deploying!

```bash
# Test connection with new credentials
node test-sanity.js

# Start local development
npm run dev

# Visit shows page
open http://localhost:3000/shows

# Verify:
# ✅ Shows load from Sanity
# ✅ Images display correctly
# ✅ All data fields present
```

---

### Step 6: Deploy Sanity Studio (Optional)

Deploy the Studio to Sanity's hosting:

```bash
# Deploy studio
npx sanity deploy

# You'll choose a studio hostname, e.g.:
# Studio will be available at: https://neighbour-andy.sanity.studio
```

**Benefits of deploying**:
- Client can access from anywhere
- No need to run locally
- Automatic updates
- Professional URL

---

### Step 7: Update Access & Permissions

In Sanity's project dashboard:

1. **Remove test accounts** (if needed)
2. **Add client team members**:
   - Administrators: Full access
   - Editors: Can create/edit/publish
   - Viewers: Read-only access
3. **Configure CORS** (if needed):
   - Go to **Project Settings** → **API**
   - Add your production domain
   - Enable credentials if needed

---

### Step 8: Deploy Website

Deploy your Next.js site with new credentials:

#### For Vercel:

```bash
# Add environment variables in Vercel dashboard:
# NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz
# NEXT_PUBLIC_SANITY_DATASET=production

# Deploy
vercel --prod
```

#### For other platforms:

Ensure environment variables are set, then deploy normally.

---

### Step 9: Post-Migration Verification

**Complete checklist**:

- [ ] Website loads in production
- [ ] Shows page displays content from Sanity
- [ ] Images load correctly
- [ ] Studio accessible at deployed URL
- [ ] Client can log in to Studio
- [ ] Client can create/edit shows
- [ ] Changes appear on website (may take a moment due to CDN)
- [ ] No console errors related to Sanity

---

## Migration Rollback Plan

If something goes wrong:

### Quick Rollback

1. **Revert `.env.local`** to test credentials:
   ```env
   NEXT_PUBLIC_SANITY_PROJECT_ID=z72jw93i
   NEXT_PUBLIC_SANITY_DATASET=development
   ```

2. **Restart development server**:
   ```bash
   npm run dev
   ```

3. **Investigate issue** before re-attempting

### Common Migration Issues

| Issue | Solution |
|-------|----------|
| "Unauthorized" errors | Verify project ID is correct |
| No data showing | Check dataset name |
| CORS errors | Add domain to project settings |
| Images not loading | Verify image URLs and project ID |

---

## Troubleshooting

### Connection Issues

**Problem**: `Connection failed` or `Unauthorized`

**Solutions**:
1. Verify environment variables are set correctly
2. Check that `.env.local` exists and has correct values
3. Restart Next.js dev server: `npm run dev`
4. Clear Next.js cache: `rm -rf .next`
5. Verify project ID in Sanity dashboard

### Studio Won't Start

**Problem**: `npx sanity dev` fails

**Solutions**:
1. Check `sanity.cli.ts` has correct project ID
2. Run `npm install` to ensure dependencies are installed
3. Try `npx sanity login` to re-authenticate
4. Check Node.js version (requires Node 14+)

### Data Not Appearing

**Problem**: Shows page is empty but Studio has content

**Solutions**:
1. Check browser console for errors
2. Verify GROQ query in `app/shows/page.tsx`
3. Check that dataset name matches in all configs
4. Look for published vs draft content
5. Try the test script: `node test-sanity.js`

### Images Not Loading

**Problem**: Image URLs return 404

**Solutions**:
1. Verify images are published in Studio
2. Check project ID in image URLs
3. Ensure `@sanity/image-url` is installed
4. Check CORS settings if loading from production

### Port Already in Use

**Problem**: `Port 3333 already in use`

**Solution**:
```bash
# Kill process on port 3333
lsof -ti:3333 | xargs kill -9

# Or use a different port
npx sanity dev --port 3334
```

---

## Technical Details

### How Sanity Integration Works

```
┌─────────────────────────────────────────────────────────┐
│                    Next.js Frontend                      │
│                                                          │
│  ┌────────────────────────────────────────────────┐   │
│  │ app/shows/page.tsx                             │   │
│  │ - Fetches shows using GROQ query               │   │
│  │ - Displays in React components                 │   │
│  └───────────────┬────────────────────────────────┘   │
│                  │                                      │
│                  ▼                                      │
│  ┌────────────────────────────────────────────────┐   │
│  │ app/lib/sanity.ts                              │   │
│  │ - Sanity client configuration                  │   │
│  │ - Uses environment variables                   │   │
│  └───────────────┬────────────────────────────────┘   │
│                  │                                      │
└──────────────────┼──────────────────────────────────────┘
                   │
                   │ HTTP Request (GROQ query)
                   │
                   ▼
┌─────────────────────────────────────────────────────────┐
│                  Sanity Content Lake                     │
│                                                          │
│  ┌────────────────────────────────────────────────┐   │
│  │ Dataset: development / production              │   │
│  │ - Show documents                               │   │
│  │ - Images and assets                            │   │
│  │ - Version history                              │   │
│  └────────────────────────────────────────────────┘   │
│                                                          │
└─────────────────────────────────────────────────────────┘
                   ▲
                   │
                   │ Content Management
                   │
┌─────────────────────────────────────────────────────────┐
│                    Sanity Studio                         │
│                                                          │
│  ┌────────────────────────────────────────────────┐   │
│  │ Local: http://localhost:3333                   │   │
│  │ Deployed: https://[hostname].sanity.studio     │   │
│  │                                                │   │
│  │ - Visual content editor                        │   │
│  │ - Form based on schema                         │   │
│  │ - Image upload                                 │   │
│  └────────────────────────────────────────────────┘   │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### GROQ Query Explained

The shows page uses this GROQ query:

```groq
*[_type == "show"] | order(date asc) {
  _id,
  _type,
  title,
  date,
  venue,
  location,
  status,
  featured,
  slug,
  ticketLink,
  venueWebsite,
  description,
  supportingActs,
  ageRestriction,
  ticketPrice,
  venueImage,
  doorsOpen,
  showStart
}
```

**Breakdown**:
- `*[_type == "show"]` - Get all documents of type "show"
- `| order(date asc)` - Sort by date, earliest first
- `{ ... }` - Project only these fields (improves performance)

### Content Delivery Network (CDN)

Sanity uses a global CDN for content delivery:
- **`useCdn: true`** (default) - Fast, cached responses (might be slightly stale)
- **`useCdn: false`** - Always fresh data (slower)

For production, `useCdn: true` is recommended. Cache updates within seconds.

### API Versioning

Current API version: `2023-05-03`

This is specified in `app/lib/sanity.ts`:
```typescript
apiVersion: '2023-05-03'
```

This ensures consistent behavior even as Sanity evolves.

---

## Scripts Reference

### test-sanity.js

Quick connection test:
```bash
node test-sanity.js
```

### Sanity CLI Commands

```bash
# Login/logout
npx sanity login
npx sanity logout

# Project management
npx sanity projects list
npx sanity datasets list

# Data operations
npx sanity dataset export [dataset] [file.tar.gz]
npx sanity dataset import [file.tar.gz] [dataset]

# Studio operations
npx sanity dev                 # Start development
npx sanity deploy              # Deploy studio
npx sanity manage              # Open project dashboard

# Schema operations
npx sanity schema extract       # Extract schema
```

---

## Best Practices

### Content Management

1. **Use featured flag** for highlighted shows
2. **Keep descriptions concise** - 2-3 sentences max
3. **Always add venue images** for visual appeal
4. **Update status** promptly (upcoming → completed)
5. **Use slug auto-generation** for consistency

### Development

1. **Never commit `.env.local`** to git
2. **Use environment variables** for all credentials
3. **Test locally** before deploying
4. **Keep schemas in version control**
5. **Document custom GROQ queries**

### Migration

1. **Test thoroughly** before migrating
2. **Backup before import** (with `--replace` flag)
3. **Schedule during low-traffic** period
4. **Have rollback plan** ready
5. **Verify post-migration** with checklist

---

## Security Notes

### Environment Variables

⚠️ **Critical**: Never expose these publicly:
- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Required for client-side
- `NEXT_PUBLIC_SANITY_DATASET` - Required for client-side

These are prefixed with `NEXT_PUBLIC_` because they're used in the browser.

### API Tokens

For write operations (not currently used):
- Use API tokens with minimal permissions
- Store in `.env.local` without `NEXT_PUBLIC_` prefix
- Rotate regularly
- Never commit to git

### CORS Configuration

If you encounter CORS errors:
1. Go to Sanity project dashboard
2. Settings → API → CORS Origins
3. Add your domains:
   - `http://localhost:3000` (development)
   - `https://yourdomain.com` (production)
   - `https://*.vercel.app` (preview deployments)

---

## Support Resources

- **Sanity Documentation**: [sanity.io/docs](https://sanity.io/docs)
- **Sanity Community**: [slack.sanity.io](https://slack.sanity.io)
- **GROQ Cheat Sheet**: [sanity.io/docs/groq](https://sanity.io/docs/groq)
- **Next.js + Sanity**: [sanity.io/plugins/next-sanity](https://sanity.io/plugins/next-sanity)

---

## Version History

| Date | Version | Changes |
|------|---------|---------|
| 2025-10-07 | 1.0 | Initial setup and documentation |

---

## Quick Reference Card

Print or save this for easy reference:

```
┌───────────────────────────────────────────────────────────┐
│         SANITY CMS - QUICK REFERENCE                      │
├───────────────────────────────────────────────────────────┤
│                                                           │
│ TEST CREDENTIALS                                          │
│ Project ID: z72jw93i                                      │
│ Dataset:    development                                   │
│                                                           │
│ START STUDIO                                              │
│ $ npx sanity dev                                          │
│ → http://localhost:3333                                   │
│                                                           │
│ START WEBSITE                                             │
│ $ npm run dev                                             │
│ → http://localhost:3000                                   │
│                                                           │
│ TEST CONNECTION                                           │
│ $ node test-sanity.js                                     │
│                                                           │
│ EXPORT DATA                                               │
│ $ npx sanity dataset export development backup.tar.gz \  │
│   --project z72jw93i                                      │
│                                                           │
│ IMPORT DATA (Migration)                                   │
│ $ npx sanity dataset import backup.tar.gz production \    │
│   --project NEW_PROJECT_ID                                │
│                                                           │
│ FILES TO UPDATE DURING MIGRATION                          │
│ □ .env.local                                              │
│ □ sanity.cli.ts                                           │
│ □ sanity.config.ts (if deploying studio)                  │
│                                                           │
└───────────────────────────────────────────────────────────┘
```

---

**End of Guide**

This document should be updated as the project evolves. Future agents should read this thoroughly before making Sanity-related changes.

