# Design System Strategy: Institutional DeFi for LATAM

## 1. Overview & Creative North Star
### The Creative North Star: "The Sovereign Vault"
This design system is built to bridge the gap between high-finance institutionalism and the cutting-edge transparency of decentralized finance. It moves away from the "playful" tropes of consumer crypto, adopting instead a **Sovereign Vault** aesthetic: a digital environment that feels heavy, secure, and infinitely deep.

By utilizing **intentional asymmetry**—such as offsetting large technical headlines against dense data blocks—and **overlapping glass layers**, we break the rigid "template" look. This system is designed to feel like a high-end editorial piece where data is not just displayed, but curated with authority.

---

## 2. Colors: Tonal Depth & The Shadow Economy
The palette is rooted in deep, authoritative navies and royal purples, designed to reduce eye strain for institutional traders while maintaining a premium "after-hours" allure.

### Core Token Palette
*   **Surface:** `#0A0D3A` (Deep Navy) - The base of our universe.
*   **Primary:** `#B7C4FF` (Authority Blue) - Used for critical actions and high-visibility data.
*   **Secondary:** `#D6BAFF` (Deep Purple/Lavender) - For technical accents and sophisticated highlights.
*   **Neutral/Text:** `#FFF9EF` (Warm White) - A high-contrast but "soft" white to ensure elite readability.

### The "No-Line" Rule
Traditional 1px solid borders are strictly prohibited for defining sections. They create visual noise and cheapen the "institutional" feel. Instead, boundaries are defined by:
1.  **Background Shifts:** Transitioning from `surface` to `surface-container-low`.
2.  **Tonal Transitions:** Using the `surface-container` tiers to delineate areas.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of semi-transparent materials. 
*   **Level 0:** `surface` (The deep background)
*   **Level 1:** `surface-container-low` (General layout sections)
*   **Level 2:** `surface-container-highest` (Interactive cards and data modules)

### The Glass & Gradient Rule
To move beyond a "flat" interface, floating elements must use **Glassmorphism**. Apply the `surface-variant` color with a 40% opacity and a `20px` backdrop blur. Enhance main CTAs with a linear gradient moving from `primary` to `primary-container` at a 135-degree angle.

---

## 3. Typography: Editorial Authority
We utilize two typefaces to balance technical precision with institutional elegance.

*   **Display & Headlines (Space Grotesk):** A geometric, technical sans-serif that feels engineered. Use high-contrast sizing (e.g., `display-lg` at 3.5rem) to create an editorial hierarchy that demands attention.
*   **Body & Titles (Inter):** The industry standard for legibility. Its neutral tone ensures that complex financial data remains the hero, while its "Warm White" color (`#FFF9EF`) prevents the harshness of pure white on dark backgrounds.

---

## 4. Elevation & Depth
In this design system, depth is not an effect; it is a structural necessity.

*   **The Layering Principle:** Stacking is the primary tool for hierarchy. A `surface-container-lowest` card placed atop a `surface-container-low` section creates a natural "recessed" or "lifted" feel without artificial shadows.
*   **Ambient Shadows:** For floating modals or dropdowns, use "Ambient Shadows." These must be ultra-diffused: `X: 0, Y: 12, Blur: 40, Spread: 0` with a 6% opacity of the `on-surface` color. 
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use a `0.08 alpha` white or the `outline-variant` at 15% opacity. It should feel like a catch-light on the edge of a lens, not a structural line.
*   **Radial Glows:** Implement subtle radial gradients (Secondary color at 5% opacity) behind primary content blocks to create a "digital aura" that guides the eye toward key technical metrics.

---

## 5. Components

### Buttons: The Tactile Command
*   **Primary:** High-contrast `primary` background with `on-primary` text. Apply a subtle 1px "Ghost Border" using a lighter tint of the primary color to simulate a metallic edge.
*   **Secondary/Tertiary:** No background. Use `label-md` uppercase with increased letter spacing (0.05em) to maintain an institutional "control panel" feel.

### Cards & Data Modules
*   **Constraint:** Zero divider lines.
*   **Execution:** Use `spacing-8` (2rem) as the default vertical gap between content groups. Use a `surface-container-highest` background for the card body to distinguish it from the page layout.

### Input Fields
*   **State:** Dark-first. Input backgrounds should be `surface-container-lowest`. 
*   **Active State:** Instead of a thick border, use a 1px `primary` ghost border and a soft `primary` outer glow (4px blur).

### Technical Chips
*   **Style:** Small, sharp corners (`round-sm`). Use `tertiary-container` backgrounds with `on-tertiary-container` text. These should feel like metadata tags on a blueprint.

---

## 6. Do's and Don'ts

### Do:
*   **Do** use extreme white space to separate unrelated financial modules.
*   **Do** overlap elements (e.g., a chart bleeding slightly out of its container) to create a custom, high-end feel.
*   **Do** use `Space Grotesk` for all numerical data to emphasize the "technical" nature of the protocol.

### Don't:
*   **Don't** use 100% opaque borders or high-contrast dividers.
*   **Don't** use standard "Material Design" drop shadows; they are too heavy for this aesthetic.
*   **Don't** use pure black (`#000000`). Always use the deep navy base (`#0A0D3A`) to maintain tonal depth and color saturation in the shadows.
*   **Don't** crowd the interface. Institutional users require clarity; "breathing room" is a premium feature.