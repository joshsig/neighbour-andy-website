# Sanity CMS Documentation Index

**Quick navigation to all Sanity-related documentation for the Neighbour Andy website**

---

## 📖 Documentation Overview

This project has comprehensive Sanity CMS documentation for testing and migration. Here's what each document covers:

---

## 🚀 [SANITY_QUICK_START.md](SANITY_QUICK_START.md)

**Best for**: Getting started immediately

**What's inside**:
- 5-minute quick start guide
- Essential commands
- First show creation
- Troubleshooting tips
- Key files reference

**When to use**: You want to start testing Sanity right now.

---

## 📚 [SANITY_TESTING_AND_MIGRATION_GUIDE.md](SANITY_TESTING_AND_MIGRATION_GUIDE.md)

**Best for**: Complete reference and migration

**What's inside**:
- Complete testing procedures
- Step-by-step migration to client account
- Technical architecture details
- GROQ query explanations
- Comprehensive troubleshooting
- Security best practices
- Scripts reference
- Migration rollback plan

**When to use**: 
- You need detailed information
- Planning the migration to client account
- Troubleshooting complex issues
- Understanding the technical details

---

## 📝 [SAMPLE_SHOW_DATA.md](SAMPLE_SHOW_DATA.md)

**Best for**: Adding test content

**What's inside**:
- 6 ready-to-use sample shows
- Copy/paste format for each show
- All fields explained
- Tips for adding content
- Show status options
- Quick test data

**When to use**: You want to populate the CMS with realistic test data.

---

## 📋 [SANITY_SETUP.md](SANITY_SETUP.md)

**Best for**: Quick reference

**What's inside**:
- Project details (ID, dataset)
- Schema reference
- File structure
- Setup commands
- Brief migration overview

**When to use**: You need to quickly look up project details or configuration.

---

## ✅ [SANITY_SETUP_COMPLETE.md](SANITY_SETUP_COMPLETE.md)

**Best for**: Understanding what's been done

**What's inside**:
- Summary of completed setup
- What was configured
- Verification checklist
- Next steps
- Project status
- Quick commands

**When to use**: You want to see what's already been set up and what's next.

---

## 🏠 [README.md](../../README.md)

**Best for**: Project overview

**What's inside**:
- Full project documentation
- Tech stack
- Project structure
- Sanity CMS section with links
- All available scripts
- Deployment info

**When to use**: You need general project information or want to understand the full stack.

---

## 🛠️ Scripts & Tools

### Test Scripts

- **`test-sanity.js`**: Tests Sanity connection
  ```bash
  node test-sanity.js
  ```

- **`add-sample-shows.js`**: Adds sample shows (requires API token)
  ```bash
  node add-sample-shows.js
  ```

---

## 🎯 What to Read First?

### Scenario 1: I'm just getting started
→ Start with **[SANITY_QUICK_START.md](SANITY_QUICK_START.md)**

### Scenario 2: I need to add test data
→ Read **[SAMPLE_SHOW_DATA.md](SAMPLE_SHOW_DATA.md)**

### Scenario 3: I'm planning the migration to client
→ Study **[SANITY_TESTING_AND_MIGRATION_GUIDE.md](SANITY_TESTING_AND_MIGRATION_GUIDE.md)** (Migration section)

### Scenario 4: I'm troubleshooting an issue
→ Check **[SANITY_TESTING_AND_MIGRATION_GUIDE.md](SANITY_TESTING_AND_MIGRATION_GUIDE.md)** (Troubleshooting section)

### Scenario 5: I need project details
→ Look at **[SANITY_SETUP.md](SANITY_SETUP.md)**

### Scenario 6: I want to see what's been done
→ Read **[SANITY_SETUP_COMPLETE.md](SANITY_SETUP_COMPLETE.md)**

---

## 📐 Documentation Structure

```
Documentation Hierarchy:

README.md
  └─ Links to all Sanity docs
      │
      ├─ SANITY_QUICK_START.md
      │   └─ Getting started quickly
      │
      ├─ SANITY_TESTING_AND_MIGRATION_GUIDE.md
      │   └─ Complete reference
      │       ├─ Testing
      │       ├─ Migration
      │       ├─ Technical Details
      │       └─ Troubleshooting
      │
      ├─ SAMPLE_SHOW_DATA.md
      │   └─ Test content
      │
      ├─ SANITY_SETUP.md
      │   └─ Quick reference
      │
      └─ SANITY_SETUP_COMPLETE.md
          └─ What's been done
```

---

## 🔑 Key Information

### Test Environment

- **Project ID**: `z72jw93i`
- **Dataset**: `development`
- **Purpose**: Testing before client migration

### Essential Commands

```bash
# Start Studio
npx sanity dev

# Start Next.js
npm run dev

# Test connection
node test-sanity.js

# Open dashboard
npx sanity manage
```

### Important Files

- `.env.local` - Environment variables (NOT in git)
- `sanity.config.ts` - Studio configuration
- `sanity.cli.ts` - CLI configuration
- `app/lib/sanity.ts` - Client configuration
- `app/shows/page.tsx` - Shows page (integrated with Sanity)

---

## 🎓 Learning Path

**Recommended reading order for new team members**:

1. **[SANITY_QUICK_START.md](SANITY_QUICK_START.md)** (5 min)
   - Get environment running

2. **[SAMPLE_SHOW_DATA.md](SAMPLE_SHOW_DATA.md)** (10 min)
   - Add your first shows

3. **[SANITY_TESTING_AND_MIGRATION_GUIDE.md](SANITY_TESTING_AND_MIGRATION_GUIDE.md)** (30 min)
   - Understand the full system

4. **[SANITY_SETUP_COMPLETE.md](SANITY_SETUP_COMPLETE.md)** (5 min)
   - See what's already done

**Total time**: ~50 minutes to full understanding

---

## 💡 Tips

- **Bookmark this page** for quick navigation
- **Start with Quick Start** if you're new
- **Use search** (Cmd/Ctrl+F) to find specific topics
- **Check Troubleshooting** before asking for help
- **Read Migration guide early** to plan ahead

---

## 📞 Need Help?

1. Check **[SANITY_TESTING_AND_MIGRATION_GUIDE.md](SANITY_TESTING_AND_MIGRATION_GUIDE.md)** → Troubleshooting
2. Run `node test-sanity.js` to test connection
3. Visit [Sanity Documentation](https://sanity.io/docs)
4. Join [Sanity Community](https://slack.sanity.io)

---

**Last Updated**: October 7, 2025

