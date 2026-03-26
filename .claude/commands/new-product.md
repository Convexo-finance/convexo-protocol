# New Product

Add a new product to the Convexo Protocol website. This updates all the places a product appears: the page itself, the Navbar dropdown, the Footer, and the Products Hub.

## Steps to execute

1. **Gather information** (ask if not provided):
   - Product name
   - Route slug (e.g. `my-product` → `/products/my-product`)
   - App subdomain (e.g. `myproduct.convexo.xyz`)
   - Status: `Live` or `Soon`
   - One-line description (for dropdown)
   - Key highlights / KPIs

2. **Read the Stitch reference** if one exists in `stitch_convexo_design_strategy/products/`.

3. **Create the product page** at `app/[locale]/products/SLUG/page.tsx`:
   - Hero with Akira headline, chips (status, category), CTA to app subdomain
   - Key metrics bar
   - How it works section
   - Tech stack / features section
   - CTA footer section

4. **Update `components/Navbar.tsx`** — add to the `products` array:
```tsx
{ name: 'Product Name', href: '/products/SLUG', tag: 'Live' | 'Soon', desc: 'One-line description' },
```

5. **Update `components/Footer.tsx`** — add to `productLinks`:
```tsx
{ name: 'Product Name', href: '/products/SLUG' },
```

6. **Update `app/[locale]/products/page.tsx`** — add to the products list in the Products Hub.

7. **Run build** to confirm zero errors: `node_modules/.bin/next build`

## Design rules for product pages

- Status chip: `Live` → `bg-primary/10 text-primary` · `Soon` → `bg-outline-variant/30 text-on-surface/40`
- App CTA button: `<a href="https://APP_URL" target="_blank" className="btn-primary">Open App</a>`
- KPI bar: horizontal strip `bg-surface-container-low py-8`, flex row of 3–4 metrics
- Metric display: Large `font-headline` number in `text-primary`, small `.label-institutional` label below
- How it works: numbered steps with connector lines or step indicators
- No 1px section borders — use background surface tier shifts
