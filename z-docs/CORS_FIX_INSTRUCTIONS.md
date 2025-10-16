# CORS Fix Instructions

## What Was Fixed

The CORS (Cross-Origin Resource Sharing) configuration has been added to `sanity.config.ts` to allow your Next.js frontend to communicate with Sanity Studio.

### Changes Made:

1. **Updated `sanity.config.ts`** - Added CORS configuration with allowed origins for local development

## What You Need to Do

### 1. Create Environment Variables File

Create a file named `.env.local` in the root of your project with the following content:

```env
# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=z72jw93i
NEXT_PUBLIC_SANITY_DATASET=development
```

**Important:** This file is already in `.gitignore` and won't be committed to version control.

### 2. Restart Your Development Servers

After creating the `.env.local` file, restart both servers:

```bash
# Terminal 1: Stop and restart Next.js
# Press Ctrl+C to stop, then:
npm run dev

# Terminal 2: Stop and restart Sanity Studio
# Press Ctrl+C to stop, then:
npm run sanity
```

### 3. Verify the Fix

1. Open Sanity Studio at `http://localhost:3333`
2. Open your Next.js app at `http://localhost:3000`
3. Check the browser console for any CORS errors - they should be gone!

## Current CORS Configuration

The following origins are currently allowed:
- `http://localhost:3000` (Next.js default)
- `http://localhost:3333` (Sanity Studio default)
- `http://127.0.0.1:3000`
- `http://127.0.0.1:3333`

## For Production Deployment

When you deploy your site, you'll need to:

1. **Update CORS origins** in `sanity.config.ts` to include your production URLs:
   ```typescript
   cors: {
       origins: [
           'http://localhost:3000',
           'http://localhost:3333',
           'http://127.0.0.1:3000',
           'http://127.0.0.1:3333',
           'https://your-production-domain.com',  // Add your production URL
           'https://your-vercel-app.vercel.app',  // If using Vercel
       ],
       credentials: true,
   },
   ```

2. **Set environment variables** in your hosting platform (Vercel, Netlify, etc.):
   - `NEXT_PUBLIC_SANITY_PROJECT_ID=z72jw93i`
   - `NEXT_PUBLIC_SANITY_DATASET=production` (or `development`)

## Troubleshooting

If you still see CORS errors after following these steps:

1. **Hard refresh your browser:** `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. **Clear browser cache:** Sometimes old CORS policies get cached
3. **Check browser console:** Look for specific CORS error messages
4. **Verify environment variables:** Run `echo $NEXT_PUBLIC_SANITY_PROJECT_ID` in your terminal
5. **Check Sanity Studio is running:** Visit `http://localhost:3333` directly
6. **Verify ports:** Make sure Next.js is on port 3000 and Sanity on 3333

## Additional Notes

- The CORS configuration in `sanity.config.ts` is for the Sanity Studio itself
- The environment variables are used by your Next.js frontend to connect to Sanity
- Both components need to be properly configured for the system to work

