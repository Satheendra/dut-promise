# Changelog - PROMISE Website Mobile Menu & Footer Updates

## Session Summary
Updates to implement a full-screen slide-in mobile menu and compact mobile footer across the PROMISE project website.

---

## 1. Mobile Menu - New Slide-in Panel Feature

**Files Modified:** `index.html`, `main.css`, and all 20 page files

**HTML Changes (all pages):**
- Added `mobilePanelOverlay` div - semi-transparent dark overlay that appears behind the menu
- Restructured `mobilePanel` div with new components:
  - Close button (`mobile-panel-close`) - white circular button with × icon, positioned top-right
  - Centered logo (`mobile-panel-logo`) - PROMISE logo centered at top of menu
  - Navigation wrapper (`mobile-panel-nav`) - contains all menu links

**CSS Changes (`main.css`):**
- `.mobile-panel-overlay` - Full-screen dark overlay (50% opacity black), z-index 9998
- `.mobile-panel` - Full-screen panel sliding in from right with `transform: translateX()` animation
- `.mobile-panel-close` - 48px white circular close button with shadow, top-right position
- `.mobile-panel-logo` - Centered 100px logo with padding
- `.mobile-panel-nav` - Flexbox column layout for navigation links with proper spacing and borders

**JavaScript Changes (all pages):**
- Added references to `mobilePanelOverlay` and `mobilePanelClose` elements
- Updated `toggleMobileMenu()` function to:
  - Toggle overlay visibility
  - Lock body scroll when menu is open (`document.body.style.overflow`)
- Added click handlers for close button and overlay (clicking outside closes menu)

---

## 2. Mobile Footer - Compact Centered Layout

**File Modified:** `main.css`

**CSS Changes (within `@media (max-width: 640px)`):**
- `.promise-footer` - Limited to max-height: 50vh, reduced padding (`24px 16px 16px`)
- `.promise-footer-container` - Column layout, centered alignment
- `.promise-footer-about` - Logos displayed in horizontal row, centered
- `.promise-footer-logo` - Reduced height from 60px to 40px
- `.promise-footer-eu img` - Reduced height to 40px
- `.promise-footer-links` - Horizontal row layout, wrapped, centered, smaller font (`0.8rem`)
- `.promise-footer-social` - Horizontal layout, centered, smaller font (`0.8rem`)
- `.promise-footer-social a img` - Reduced icon size to 22px
- `.promise-footer-copy` - Smaller font (`0.75rem`), reduced margin

---

## 3. Files Delivered

**Root level:**
- `index.html` - Homepage with new mobile menu
- `main.css` - Updated stylesheet with mobile menu and footer styles

**Pages folder (`/pages/`):**

| File | Description |
|------|-------------|
| about.html | About page |
| consortium.html | Consortium page |
| contact.html | Contact page (rebuilt - original was truncated) |
| events.html | Events page |
| living-labs.html | Living Labs page |
| news.html | News page |
| sub-AAU.html | Aalborg University partner page |
| sub-BEIA.html | BEIA Consult partner page |
| sub-BMA.html | Brașov Metropolitan Agency partner page |
| sub-du.html | Dalarna University partner page |
| sub-Hjet.html | HepsiJET partner page |
| sub-Koln.html | Stadt Köln partner page |
| sub-ModC.html | ModC Networks partner page |
| sub-OSM.html | Osmangazi Municipality partner page |
| sub-RETH.html | Municipality of Rethymno partner page |
| sub-sic.html | Sustainability InnoCenter partner page |
| sub-UDE.html | Universität Duisburg-Essen partner page |
| sub-UPS.html | UPS Deutschland partner page |
| sub-Uzay.html | Uzay Tech partner page |
| sub-WBG.html | Wirtschaftsförderung Bochum partner page |

---

## 4. Bug Fixes
- `contact.html` - Rebuilt entirely; original file was truncated mid-JavaScript and contained Cloudflare email obfuscation artifacts that broke functionality

## 5. Added white DUT logo, replaced green logo