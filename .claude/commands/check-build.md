# Check Build

Run a production build and verify the site compiles with zero errors and zero warnings.

## Steps to execute

1. Run the build:
```bash
node_modules/.bin/next build
```

2. Check output for:
   - **Errors** — any TypeScript errors, missing imports, or broken routes
   - **Warnings** — missing translation keys, deprecated APIs
   - **Page count** — should be 29 static pages (2 locales × routes + root redirects)
   - **Build success** — `✓ Generating static pages (29/29)`

3. If there are errors, diagnose and fix them:

   **Missing import:** Check that `Link`, `usePathname`, `useRouter` come from `@/navigation` — never `next/link` or `next/navigation`.

   **Missing translation key:** Either add the key to both `en.json` and `es.json`, or remove the `useTranslations` call and use hardcoded strings if the page is legal/compliance content.

   **Font not found:** Verify the font file path in `app/layout.tsx` matches the actual file in `public/branding/fonts/`.

   **Type error:** Check that all TypeScript types are correct. Run `npx tsc --noEmit` to see full type errors.

4. If build passes clean, confirm:
   - All expected routes appear in the build output
   - No pages show as `ƒ (Dynamic)` that should be static
   - First Load JS shared chunks stay reasonable (< 120kB)

## Expected page count (current)

29 static pages:
- `/en` and `/es` (Home × 2)
- `/en/about` and `/es/about`
- `/en/compliance` and `/es/compliance`
- `/en/privacy` and `/es/privacy`
- `/en/terms` and `/es/terms`
- `/en/aml-cft` and `/es/aml-cft`
- `/en/technology` and `/es/technology`
- `/en/products` and `/es/products`
- `/en/products/payments` and `/es/products/payments`
- `/en/products/c-bonds` and `/es/products/c-bonds`
- `/en/products/real-estate` and `/es/products/real-estate`
- `/en/products/eth-fund` and `/es/products/eth-fund`
- `/en/products/p2p` and `/es/products/p2p`
- Plus root redirects
