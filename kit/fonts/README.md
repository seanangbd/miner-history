# Fonts

## Brand fonts (local files — uploaded by the user)

- **Poppins SemiBold** (`Poppins-SemiBold.ttf`) — weight 600
- **Poppins Bold** (`Poppins-Bold.ttf`) — weight 700

These are wired up via `@font-face` in `colors_and_type.css` and drive the `--font-brand` stack (used for the "Lyra" wordmark in the side menu).

## Loaded from Google Fonts

- **Roboto** (400 / 500 / 700) — `--font-body` (tables, buttons, most UI copy)
- **Inter** (400 / 500 / 600 / 700) — `--font-title`, `--font-number`, fallback for Helvetica / SF Pro
- **Noto Sans SC** (400 / 500 / 700 / 900) — CJK fallback for PingFang SC

## Still substituted (waiting on licensed files)

| Original in Figma | Used here | Notes |
|---|---|---|
| Helvetica Bold | Inter | Closest neo-grotesque on Google Fonts. |
| SF Pro (Display / Heavy / Medium) | Inter | Apple system font — not redistributable. |
| PingFang SC | Noto Sans SC | Google Fonts CJK equivalent. |

If you can provide licensed TTF/OTF files for Helvetica, SF Pro, or PingFang SC, drop them in this folder and I'll wire up `@font-face` blocks for each.
