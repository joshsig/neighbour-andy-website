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

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

## Deployment

The project is configured for deployment on Vercel. Simply connect your GitHub repository to Vercel and deploy.

## Next Steps

1. Set up your Sanity project and update environment variables
2. Create Sanity schemas for your content
3. Implement Framer Motion animations
4. Add Lenis smooth scrolling
5. Style with SASS/SCSS
6. Add your content and images