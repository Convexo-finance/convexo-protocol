# Translate

Add, update, or sync translation keys across `messages/en.json` and `messages/es.json`.

## When to use this

- You added new user-facing text to a page and need to add translation keys
- A Spanish translation is missing or incorrect
- You want to audit which keys exist in EN but not ES (or vice versa)

## Steps to execute

1. **Identify the scope** — which page or component needs translations? What are the new strings?

2. **Read both files** to understand the existing key structure:
   - `messages/en.json`
   - `messages/es.json`

3. **Determine the key namespace** — use the page route as the top-level key (e.g. `home`, `about`, `technology`, `products.payments`, `products.cBonds`).

4. **Add keys to `en.json` first**, then add the Spanish equivalent to `es.json`.

5. **Key naming rules:**
   - camelCase for all keys
   - Namespace by page: `{ "pageName": { "section": { "key": "value" } } }`
   - Never use dots in key names — use nesting instead
   - Keep keys semantic: `hero.title`, `hero.subtitle`, `metrics.volume`

6. **In the component/page**, use the key with `useTranslations`:
```tsx
import { useTranslations } from 'next-intl';

// Server component (async):
const t = await getTranslations('pageName');

// Client component:
const t = useTranslations('pageName');

// Usage:
<h1>{t('hero.title')}</h1>
```

7. **For pages that currently have hardcoded strings** (legal pages, compliance hub): these intentionally have hardcoded content — legal text should not be translated lossily. Only translate UI chrome (labels, buttons, chips).

8. **Run build** to confirm zero missing-key warnings: `node_modules/.bin/next build`

## Current pages using translations

- `app/[locale]/page.tsx` (Home) — uses `next-intl` keys
- `app/[locale]/about/page.tsx` — uses `next-intl` keys
- `app/[locale]/technology/page.tsx` — uses `next-intl` keys

## Pages with hardcoded content (intentional — legal/compliance)

- `app/[locale]/compliance/page.tsx` — via `ComplianceHub.tsx`
- `app/[locale]/privacy/page.tsx`
- `app/[locale]/terms/page.tsx`
- `app/[locale]/aml-cft/page.tsx`
