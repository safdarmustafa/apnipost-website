# App screenshots

Replace the placeholder files in this folder with the actual exported Android
screenshots. The files are currently empty (0 bytes) so the folder structure is
ready — the website detects empty/missing files and renders the built-in phone
placeholder instead, so the page never breaks.

| File | Shown as | Section caption |
| --- | --- | --- |
| `login.png` | Login screen | Login |
| `home.png` | Main feed | Home Feed |
| `profile.png` | User profile | Profile |

## Export guidelines

- Portrait orientation, roughly a 9:19 aspect ratio (e.g. 1080 × 2280).
- PNG format, exported from a device or emulator without the system status bar
  overlay if possible.
- Keep filenames exactly as listed above; the section reads these paths from
  `src/components/sections/screenshots.tsx`.

Once real screenshots are added, they are rendered through `next/image` inside
the `PhoneMockup` component automatically. No code changes are required.
