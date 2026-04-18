# Design System Strategy: Cosmic Tech

## 1. Overview & Creative North Star

### Creative North Star: "The Celestial Observer"
This design system is not a dashboard; it is a lens. Our Creative North Star is **The Celestial Observer**—an interface that feels like a high-end, futuristic HUD (Heads-Up Display) carved out of light and deep-space vacuum. 

To move beyond the "template" look, we reject the rigid, centered grid in favor of **Intentional Asymmetry**. Elements should feel like orbiting bodies—balanced but not perfectly mirrored. We utilize overlapping layers, high-contrast typography scales, and "breathing" glass surfaces to simulate a 3D environment. This system is designed to evoke the awe of deep space photography, where information doesn't just sit on a screen; it floats within a vast, dark expanse.

---

## 2. Colors

The color palette is built on the infinite depth of `background: #131319` (Deep Space) and the energy of nebula-inspired purples and cyan accents.

### The "No-Line" Rule
Traditional 1px solid borders are strictly prohibited for defining sections. In the vacuum of space, there are no hard edges. Boundaries must be defined solely through:
- **Tonal Shifts:** Transitioning from `surface` to `surface_container_low`.
- **Luminous Transitions:** Using subtle `primary_container` (#7e05b2) glows to imply a boundary.

### Surface Hierarchy & Nesting
Treat the UI as a series of nested atmospheric layers.
- **Base Layer:** `surface_dim` (#131319).
- **Secondary Panels:** `surface_container_low` (#1b1b21).
- **Active HUD Elements:** `surface_container_high` (#2a2930) with a 60% opacity to allow background "stars" or textures to bleed through.

### The "Glass & Gradient" Rule
To achieve "Cosmic Tech" depth, all floating cards must use **Glassmorphism**. Combine `surface_variant` at 40% opacity with a `backdrop-filter: blur(12px)`. 

### Signature Textures
Main CTAs and high-level data visualizations should employ linear gradients. For example, a "Launch" button should transition from `primary` (#e9b3ff) to `primary_container` (#7e05b2) at a 135-degree angle. This provides a tactile, "fueled" look that flat colors cannot replicate.

---

## 3. Typography

The typography strategy relies on the tension between the technical `spaceGrotesk` and the highly readable `inter`.

- **Display & Headlines (`spaceGrotesk`):** These are our "Instrument Readouts." Use `display-lg` for impactful hero data. The wide apertures of Space Grotesk convey a high-tech, architectural feel.
- **Body & Titles (`inter`):** Use Inter for all functional text. It provides the grounding "Mission Control" voice—clear, neutral, and authoritative.
- **Label Scales:** `label-md` and `label-sm` should often be set in `uppercase` with a `letter-spacing` of 0.05em to mimic technical serial numbers or HUD telemetry.

---

## 4. Elevation & Depth

In this system, elevation is a measurement of light, not height.

### The Layering Principle
Achieve depth by stacking container tiers. Place a `surface_container_lowest` (#0e0e14) element inside a `surface_container_high` (#2a2930) panel to create an "inset" cockpit look. 

### Ambient Shadows & "Cyan Glow"
Traditional black shadows are replaced with **Ambient Luminescence**. When an element floats:
- Use a shadow color derived from `secondary` (#bdf4ff) at 5% opacity.
- Spread should be massive (40px–60px) with 0 offset to simulate a light-emitting HUD element.

### The "Ghost Border" Fallback
If containment is required for accessibility, use a **Ghost Border**:
- Stroke: 1px.
- Color: `outline_variant` (#4e4351) at 15% opacity.
- Effect: Add a subtle `drop-shadow` using `secondary` to create a "glowing wireframe" effect.

---

## 5. Components

### Buttons
- **Primary:** Gradient fill (`primary` to `primary_container`). `0.25rem` (sm) rounded corners. Subtle cyan outer glow on hover.
- **Secondary (HUD style):** Ghost borders only. Text in `secondary` (#bdf4ff).
- **Tertiary:** `surface_container_highest` background, no border, `label-md` typography.

### Input Fields
Avoid boxes. Use a bottom-only border (`outline_variant` at 30%) that expands to a full `secondary` cyan glow when focused. Labels should use `label-sm` positioned above the line.

### Cards & Lists
**Strict Rule:** No divider lines. Separate list items using `8px` of vertical white space or by alternating background shifts between `surface_container_low` and `surface_container_lowest`.

### HUD Telemetry (Additional Component)
A custom component for this system. Small, high-density data readouts using `label-sm` in `secondary` (#bdf4ff) paired with micro-sparkline charts using `tertiary` (#fface8).

---

## 6. Do's and Don'ts

### Do
- **Do** use asymmetric layouts. If a panel is on the left, balance it with a smaller, floating element on the far right.
- **Do** use `backdrop-blur` generously on all overlay elements to maintain the "Glassmorphism" theme.
- **Do** use `secondary_fixed_dim` (#00daf3) for critical interactive prompts; it acts as the system's "Action Light."

### Don't
- **Don't** use pure white (#FFFFFF). Always use `on_surface` (#e4e1ea) to prevent "light bleed" and maintain the dark-mode aesthetic.
- **Don't** use heavy drop shadows. They look "earth-bound." Stick to tonal layering and glows.
- **Don't** use standard "Rounded" corners (lg/xl) for primary containers. Keep it sleek and technical with the `DEFAULT` (0.25rem) or `none` (0px) scale to maintain a precision instrument feel.