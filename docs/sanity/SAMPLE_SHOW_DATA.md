# Sample Show Data for Testing

Use this data to quickly populate your Sanity Studio for testing.

## How to Add Shows

### Method 1: Through Sanity Studio (Recommended)

1. Start Sanity Studio: `npx sanity dev`
2. Open `http://localhost:3333`
3. Click **"Create"** → **"Show"**
4. Copy/paste data from samples below
5. Click **"Publish"**

### Method 2: Using API Token (Optional)

If you want to use the `add-sample-shows.js` script:

1. Go to [Sanity Manage](https://www.sanity.io/manage)
2. Select project "Neighbour Andy"
3. Go to **API** → **Tokens**
4. Click **"Add API token"**
5. Name: "Development Write Token"
6. Permissions: **"Editor"**
7. Copy the token
8. Add to `.env.local`:
   ```env
   SANITY_API_TOKEN=your_token_here
   ```
9. Run: `node add-sample-shows.js`

---

## Sample Shows

### Show 1: Higher Ground (Featured)

```
Title: Higher Ground Concert
Venue: Higher Ground
City: South Burlington
State: VT
Country: USA
Date: October 10, 2025 @ 8:00 PM
Doors Open: October 10, 2025 @ 7:00 PM
Show Start: October 10, 2025 @ 8:30 PM

Ticket Price:
- Advance: 25
- Door: 30
- Currency: USD

Ticket Link: https://example.com/tickets/higher-ground
Venue Website: https://highergroundmusic.com

Description:
An incredible night of indie rock at Burlington's premier music venue.

Supporting Acts:
- Racing Mount Pleasant
- The Velvet Hands

Age Restriction: All Ages
Status: Upcoming
Featured: ✓ (check this box)

Slug: Click "Generate" button
```

---

### Show 2: The Opera House

```
Title: The Opera House Show
Venue: The Opera House
City: Toronto
State: ON
Country: Canada
Date: October 11, 2025 @ 9:00 PM
Doors Open: October 11, 2025 @ 8:00 PM

Ticket Price:
- Advance: 30
- Door: 35
- Currency: CAD

Ticket Link: https://example.com/tickets/opera-house

Description:
Toronto stop on our fall tour. Join us at this historic venue!

Supporting Acts:
- Racing Mount Pleasant

Age Restriction: 19+
Status: Upcoming
Featured: ☐ (leave unchecked)

Slug: Click "Generate" button
```

---

### Show 3: Burton Cummings Theatre

```
Title: The Burton Cummings Theatre
Venue: The Burton Cummings Theatre
City: Winnipeg
State: MB
Country: Canada
Date: October 13, 2025 @ 8:00 PM
Doors Open: October 13, 2025 @ 7:00 PM

Ticket Price:
- Advance: 28
- Door: 33
- Currency: CAD

Ticket Link: https://example.com/tickets/burton-cummings
Venue Website: https://burtoncummingstheatre.com

Description:
Live at one of Winnipeg's most beautiful venues.

Supporting Acts:
- Racing Mount Pleasant

Age Restriction: All Ages
Status: Upcoming
Featured: ☐

Slug: Click "Generate" button
```

---

### Show 4: The Majestic Theatre

```
Title: The Majestic Theatre
Venue: The Majestic Theatre
City: Detroit
State: MI
Country: USA
Date: October 15, 2025 @ 8:30 PM
Doors Open: October 15, 2025 @ 7:30 PM
Show Start: October 15, 2025 @ 9:00 PM

Ticket Price:
- Advance: 27
- Door: 32
- Currency: USD

Ticket Link: https://example.com/tickets/majestic

Description:
Motor City! Can't wait to rock Detroit.

Supporting Acts:
- Racing Mount Pleasant
- Detroit Sound Collective

Age Restriction: 18+
Status: Upcoming
Featured: ☐

Slug: Click "Generate" button
```

---

### Show 5: Thalia Hall (Featured)

```
Title: Thalia Hall
Venue: Thalia Hall
City: Chicago
State: IL
Country: USA
Date: October 17, 2025 @ 9:00 PM
Doors Open: October 17, 2025 @ 8:00 PM

Ticket Price:
- Advance: 29
- Door: 34
- Currency: USD

Ticket Link: https://example.com/tickets/thalia-hall
Venue Website: https://thaliahallchicago.com

Description:
Chicago! Performing at the gorgeous Thalia Hall in Pilsen.

Supporting Acts:
- Racing Mount Pleasant

Age Restriction: 18+
Status: Upcoming
Featured: ✓ (check this box)

Slug: Click "Generate" button
```

---

### Show 6: The Catalyst

```
Title: The Catalyst
Venue: The Catalyst
City: Santa Cruz
State: CA
Country: USA
Date: October 20, 2025 @ 8:00 PM
Doors Open: October 20, 2025 @ 7:00 PM

Ticket Price:
- Advance: 26
- Door: 31
- Currency: USD

Ticket Link: https://example.com/tickets/catalyst

Description:
West Coast finale! Join us at The Catalyst for an unforgettable show.

Supporting Acts:
- Local Favorites

Age Restriction: All Ages
Status: Upcoming
Featured: ☐

Slug: Click "Generate" button
```

---

## Tips for Adding Shows

1. **Required fields** (marked with red asterisk in Studio):
   - Show Title
   - Venue
   - City
   - Country
   - Date
   - Slug (click "Generate" to create automatically)

2. **Supporting Acts**:
   - Click "Add item" for each supporting act
   - Enter one band name per item

3. **Images**:
   - You can add venue images by dragging/dropping or clicking to upload
   - Add alt text for accessibility

4. **Slug**:
   - Always click "Generate" to auto-create from title
   - Ensures URL-friendly format

5. **Featured Shows**:
   - Check "Featured Show" for 1-2 shows you want to highlight
   - These could be displayed prominently on the homepage later

---

## After Adding Shows

1. **View in Studio**: Check the "Show" list to see all shows
2. **Visit Website**: Go to `http://localhost:3000/shows`
3. **Verify**: Shows should appear on the page in date order

---

## Editing Shows

- Click any show in Studio to edit
- Changes auto-save as drafts
- Click "Publish" to make changes live
- Use "Unpublish" to hide from website

---

## Show Status Options

- **Upcoming**: Regular upcoming show (default)
- **Sold Out**: Show is sold out
- **Cancelled**: Show is cancelled
- **Postponed**: Show is postponed to new date
- **Completed**: Show has already happened

Only "upcoming" shows are typically displayed on the shows page (you can modify the GROQ query in `app/shows/page.tsx` to change this behavior).

---

## Quick Test Data (Minimal)

If you just want to test quickly, add this one show:

```
Title: Test Show
Venue: Test Venue
City: New York
Country: USA
Date: [Pick any future date]
Slug: [Click Generate]
```

Then visit `/shows` page to see it appear.

