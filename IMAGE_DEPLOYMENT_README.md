# Image Deployment Guide

## Images Included in Build

All images are automatically bundled in the production build:

### Service Images (Main Sections)
- `DEEP_TISSUE.jpg.jpeg` - 2.5 MB
- `SWEDISH_MASSAGE.jpg.jpeg` - 2.6 MB
- `CHAIR_MASSAGE.jpg.jpeg` - 2.5 MB

### Add-on Images (Premium Services)
- `CUPPING.jpg.jpeg` - 2.2 MB
- `CBD_OIL.jpg.jpeg` - 2.2 MB
- `SCALP_MASSAGE_OIL.jpg.jpeg` - 2.6 MB
- `HERBAL_MASSAGE_OIL.jpg.jpeg` - 2.0 MB
- `HOT_STONES.jpg copy.jpeg` - 2.6 MB

## Build Details

### What's In dist/assets/

After running `npm run build`, all images are in:
```
dist/assets/DEEP_TISSUE.jpg-H4Cyrv-o.jpeg
dist/assets/SWEDISH_MASSAGE.jpg-CzBCcFJd.jpeg
dist/assets/CHAIR_MASSAGE.jpg-CET8nx6b.jpeg
dist/assets/CUPPING.jpg-DPPSuXDb.jpeg
dist/assets/CBD_OIL.jpg-DecCEvbL.jpeg
dist/assets/SCALP_MASSAGE_OIL.jpg-QM9b4JF1.jpeg
dist/assets/HERBAL_MASSAGE_OIL.jpg-AnJbSpTB.jpeg
dist/assets/HOT_STONES.jpg copy-Npo5UVr-.jpeg
```

(The `-[hash]` part is automatically added by Vite for cache busting)

### Public Fallback

Images are also copied to `public/assets/` as a fallback for any serving configuration.

## How Images Are Referenced

Images are imported using Vite's `import.meta.url` pattern:

```typescript
const deepTissueImg = new URL('../assets/DEEP_TISSUE.jpg.jpeg', import.meta.url).href;
```

This ensures:
- ✓ Images are bundled correctly
- ✓ Asset paths are resolved at build time
- ✓ Works in all deployment environments
- ✓ Cache busting with hash in filename

## Testing Images Locally

```bash
npm run build
npm run preview
```

Visit http://localhost:4173 and verify images load on:
- Hero section (logo area)
- Services section (3 service cards)
- Add-ons section (6 add-on cards)
- Service detail pages (clicking on services)

## Troubleshooting

If images don't load on production:

1. **Check Console** - Open browser DevTools (F12) → Console
   - Look for 404 errors
   - Check exact paths being requested

2. **Verify dist/ folder** - All 8 images should be in dist/assets/

3. **Check Cache** - Hard refresh browser:
   - Windows/Linux: Ctrl+Shift+R
   - Mac: Cmd+Shift+R

4. **Verify Permissions** - Ensure dist/ files are readable by web server

## File Sizes

Total asset size: ~19 MB
- Images: ~18.8 MB
- CSS: ~67.8 KB (gzipped: 11.4 KB)
- JavaScript: ~181.8 KB (gzipped: 54.3 KB)

Images will be served with lazy loading to optimize initial page load.

## Deployment Checklist

✓ Images are in src/assets/
✓ Public/assets/ has copies
✓ npm run build succeeds
✓ dist/assets/ contains all image files
✓ Components use URL-based imports
✓ Error handlers in place
✓ Lazy loading enabled
✓ _redirects file configured

Everything is ready for deployment!
