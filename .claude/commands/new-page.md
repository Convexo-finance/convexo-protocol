# New Page

Create a new page for the Convexo Protocol website following all site conventions.

## Steps to execute

1. **Ask** (if not provided): What is the page name, route (`/route-name`), and purpose?

2. **Check the Stitch reference** — look in `stitch_convexo_design_strategy/` for any matching prototype. If found, read it first.

3. **Create the page file** at `app/[locale]/ROUTE/page.tsx` following this template:

```tsx
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'PAGE TITLE | Convexo Protocol',
  description: 'PAGE DESCRIPTION',
};

export default function PageName() {
  return (
    <div className="min-h-screen bg-surface text-on-surface">
      <Navbar />
      <main className="pt-20">
        {/* Hero */}
        <section className="section-container pt-24 pb-16">
          <div className="flex flex-wrap gap-3 mb-8">
            <span className="chip">CATEGORY CHIP</span>
          </div>
          <h1 className="heading-display text-[clamp(2.5rem,6vw,5rem)] text-on-surface mb-6 uppercase">
            PAGE <span className="text-primary">HEADLINE</span>
          </h1>
          <p className="body-text text-base max-w-2xl">
            Page subtitle / description.
          </p>
        </section>

        {/* Add sections below */}
      </main>
      <Footer />
    </div>
  );
}
```

4. **Design rules to apply:**
   - Background: `bg-surface` on root, section backgrounds shift to `bg-surface-container-low` or `bg-surface-container-highest` for depth
   - Hero headline: `.heading-display` class (Akira Expanded, uppercase)
   - Section headings: `font-headline text-xl font-black uppercase tracking-tight text-on-surface`
   - Body text: `.body-text` class or `font-body text-sm text-on-surface-variant leading-relaxed`
   - Labels/tags: `.label-institutional` class
   - No 1px solid borders to separate sections — use background color shifts
   - Section padding: `py-24 md:py-32`
   - Max width container: `section-container` class

5. **If the page uses internal links**, use `Link` from `@/navigation` — never from `next/link`.

6. **If the page needs i18n**, add keys to both `messages/en.json` and `messages/es.json`.

7. **Run build** to confirm zero errors: `node_modules/.bin/next build`
