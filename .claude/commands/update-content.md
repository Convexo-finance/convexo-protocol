# Update Content

Update text content, KPIs, links, or copy on any existing page.

## Steps to execute

1. **Read the target file first** — never edit without reading the current state.

2. **Identify what changes**: text string, KPI value, link URL, or section copy.

3. **Check if the string is hardcoded or uses i18n:**
   - If hardcoded → edit it directly in the page/component file
   - If using `t('key')` → update the key in `messages/en.json` AND `messages/es.json`

4. **Make the minimal change** — don't refactor surrounding code.

5. **Run build** to confirm zero errors: `node_modules/.bin/next build`

## Common content locations

| Content | File |
|---|---|
| Navbar product list | `components/Navbar.tsx` → `products` array |
| Footer links | `components/Footer.tsx` → link arrays at top |
| Home KPIs | `app/[locale]/page.tsx` or `messages/en.json` `hero.*` keys |
| Product page content | `app/[locale]/products/PRODUCT/page.tsx` |
| Legal text | `components/ComplianceHub.tsx` → section arrays at top |
| Standalone legal pages | `app/[locale]/privacy/page.tsx`, `terms/page.tsx`, `aml-cft/page.tsx` |
| About content | `app/[locale]/about/page.tsx` |
| Technology content | `app/[locale]/technology/page.tsx` |

## KPI values to update (from CLAUDE.md)

Current values — update here and in the relevant page files:
- Accumulated volume: `+3MM USD`
- Settlement time: `~15 minutes`
- Countries: `20`
- Availability: `24/7/365`
- C-Bonds APY: `12%+`
- Real Estate APY: `18% annual`
- Real Estate 5-year return: `70%`

## Links to update

External app links live in multiple places:
- `components/Navbar.tsx` — "Launch App" href
- `components/Footer.tsx` — contact links
- Individual product pages — "Open App" CTA hrefs
- `components/ComplianceHub.tsx` — DPO email link
