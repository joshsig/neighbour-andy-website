# Neighbour Andy Band Website

A modern band website built with Next.js 14, TypeScript, SASS, Framer Motion, and Sanity CMS.

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: SASS/SCSS
- **Animation**: Framer Motion
- **Smooth Scrolling**: Lenis
- **CMS**: Sanity
- **Deployment**: Vercel

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
# Copy .env.local and update with your Sanity project details
cp .env.local.example .env.local
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
├── layout.tsx          # Root layout
├── page.tsx           # Home page
├── about/page.tsx     # About page
├── watch/page.tsx     # Watch page
├── music/page.tsx     # Music page
├── shows/page.tsx     # Shows page
├── merch/page.tsx     # Merchandise page
├── contact/page.tsx   # Contact page
├── components/        # Reusable components
├── styles/           # SASS stylesheets
│   └── globals.scss  # Global styles
└── lib/              # Utility functions
    └── sanity.ts     # Sanity client configuration

sanity/
├── schemas/          # Sanity schemas
└── sanity.config.ts  # Sanity configuration
```

## Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=development  # or production
```

## Sanity CMS Setup

This project uses Sanity CMS for managing show/concert data. The current setup is a **testing environment** that will be migrated to the client's production account later.

### 📚 Documentation

- **[Quick Start Guide](./docs/sanity/SANITY_QUICK_START.md)** - Get started in 5 minutes
- **[Comprehensive Guide](./docs/sanity/SANITY_TESTING_AND_MIGRATION_GUIDE.md)** - Full documentation, testing, and migration
- **[Sample Data](./docs/sanity/SAMPLE_SHOW_DATA.md)** - Sample shows to populate for testing
- **[Setup Notes](./docs/sanity/SANITY_SETUP.md)** - Original setup reference
- **[Documentation Index](./docs/sanity/SANITY_DOCS_INDEX.md)** - Navigate all Sanity docs

### 🚀 Quick Start with Sanity

```bash
# Start Sanity Studio
npx sanity dev
# Opens at http://localhost:3333

# In another terminal, start Next.js
npm run dev
# Opens at http://localhost:3000

# Test connection
node test-sanity.js
```

Visit `http://localhost:3333` to add shows, then view them at `http://localhost:3000/shows`.

### Current Test Setup

- **Project ID**: `z72jw93i`
- **Dataset**: `development`
- **Status**: Testing environment (will migrate to client account)

See [SANITY_QUICK_START.md](./docs/sanity/SANITY_QUICK_START.md) for step-by-step instructions.

## Deployment

The project is configured for deployment on Vercel. Simply connect your GitHub repository to Vercel and deploy.

### Environment Variables for Production

Make sure to set these in Vercel:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`

## Scripts

```bash
npm run dev          # Start Next.js development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

npx sanity dev       # Start Sanity Studio
npx sanity deploy    # Deploy Sanity Studio
node test-sanity.js  # Test Sanity connection
```