# Sanity CMS - Quick Start Guide

**For the Neighbour Andy website testing environment**

---

## 🚀 Quick Start (5 minutes)

### 1. Start Sanity Studio

```bash
npx sanity dev
```

**Opens at**: `http://localhost:3333`

### 2. Add Your First Show

1. Click **"Create"** → **"Show"**
2. Fill in:
   - **Show Title**: "Test Show"
   - **Venue**: "Test Venue"
   - **City**: "New York"
   - **Country**: "USA"
   - **Date**: [Pick any future date]
   - **Slug**: Click "Generate"
3. Click **"Publish"**

### 3. Start Website

In a new terminal:

```bash
npm run dev
```

**Opens at**: `http://localhost:3000`

### 4. View Your Show

Go to: `http://localhost:3000/shows`

You should see your test show! 🎉

---

## 📚 Full Documentation

- **Comprehensive Guide**: [SANITY_TESTING_AND_MIGRATION_GUIDE.md](SANITY_TESTING_AND_MIGRATION_GUIDE.md)
  - Complete testing procedures
  - Migration to client account
  - Troubleshooting
  - Technical details

- **Sample Data**: [SAMPLE_SHOW_DATA.md](SAMPLE_SHOW_DATA.md)
  - 6 sample shows ready to copy/paste
  - Tips for adding content
  - Field explanations

- **Original Setup Notes**: [SANITY_SETUP.md](SANITY_SETUP.md)
  - Project details
  - Schema reference
  - File structure

---

## 🔧 Useful Commands

```bash
# Test connection
node test-sanity.js

# Start Studio
npx sanity dev

# Start website
npm run dev

# Open Sanity dashboard
npx sanity manage

# Deploy Studio (later, to production)
npx sanity deploy
```

---

## ⚙️ Current Setup

```
Project ID:  z72jw93i
Dataset:     development
Status:      Testing environment
Purpose:     Test before migrating to client account
```

---

## 🎯 What's Next?

1. **Add more shows** using sample data from `SAMPLE_SHOW_DATA.md`
2. **Test all features**: featured shows, ticket links, images, etc.
3. **Review migration guide** when ready to move to client account
4. **Train team** on using Studio interface

---

## ❓ Troubleshooting

**Studio won't start?**
```bash
npm install
npx sanity login
npx sanity dev
```

**Shows not appearing on website?**
- Check browser console for errors
- Verify shows are "Published" (not just saved as drafts)
- Make sure `.env.local` has correct project ID
- Try: `node test-sanity.js`

**Need help?**
See [SANITY_TESTING_AND_MIGRATION_GUIDE.md](SANITY_TESTING_AND_MIGRATION_GUIDE.md) → Troubleshooting section

---

## 📝 Key Files

```
.env.local                            # Your credentials (not in git)
sanity.config.ts                     # Studio configuration
sanity.cli.ts                        # CLI configuration
app/shows/page.tsx                   # Shows page (integrated)
sanity/schemas/show.ts               # Show schema definition
```

---

**Ready to test? Start with step 1 above! 👆**

