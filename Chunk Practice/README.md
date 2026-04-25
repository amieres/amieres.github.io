# Recital Practice Chunks

A browser-based practice tool for piano recital pieces. It cuts your sheet music
into musical phrases ("chunks") and serves them in random order so you can drill
the hard parts without mindless start-from-the-top runs. Each chunk also shows
the **first note of the next phrase** so they chain together in your memory.

Live: <https://amieres.github.io/>

## Features

- Show each phrase as a **window** onto the original sheet music — no cropping,
  just the rectangle you want to practice
- Drag rectangle handles to **adjust phrase boundaries** at any time
- Multi-rect chunks for phrases that span line breaks
- Per-page **signature-end ruler** automatically prepends the line's clef + key
  + time signature when a phrase starts mid-line
- **Random** practice cycle with progress tracking and per-piece filters
- Add new pieces by dropping page images into the folder and clicking
  **+ New piece** — fully data-driven, no code edits needed
- ✨ **Generate chunks with Claude** — supply your own Anthropic API key and
  let Claude analyse your sheet music to seed phrases automatically (you then
  fine-tune positions by drag)
- **Export / import JSON** so your setup travels between machines
- All state lives in `localStorage` on your machine — your API key, chunks,
  page settings stay private

## Usage

1. Open `index.html` (or visit the live site).
2. Drop your sheet-music images (JPG / PNG) into the **same folder** as
   `index.html`.
3. Click **+ New piece** → name the piece → **Add page** for each image →
   **Save piece**.
4. Either click **+ New chunk** to draw rectangles by hand, or click
   **Edit piece → ✨ Generate chunks with Claude** for an automated first pass.
5. Switch to the piece's filter button and hit **Random chunk** to start
   practising.

## Generating chunks with Claude

You'll need an Anthropic API key (`console.anthropic.com`). The tool stores
it only in your browser's `localStorage`. Open **Settings**, paste the key,
choose a model (default: `claude-sonnet-4-6`), save. Then in the piece editor
click **✨ Generate chunks with Claude**. Cost is roughly 5–20¢ per page.

The pixel coordinates Claude returns are reasonable but not perfect — treat
them as a 70%-there starting point and tug the rectangles into final position.

## Bundled demo — Schubert *Nuptial Ave Maria*

This folder ships with Schubert's *Nuptial Ave Maria* (Op.52 No.6 / D.839,
Massimo Scapin arrangement) as a pre-loaded public-domain demo:

- `ave-maria-page-1.jpg`, `ave-maria-page-2.jpg`, `ave-maria-page-3.jpg`
- 10 starter chunks already defined in `index.html` (the visitor can fine-tune
  rectangles by dragging handles)
- Source PDF kept alongside as `IMSLP284003-PMLP16143-Nuptial_Ave_Maria.pdf`
  (originally from <https://imslp.org/wiki/Ave_Maria,_D.839_(Schubert,_Franz)>)

If you'd rather ship without a default piece, delete the JPGs and PDF, then
in `index.html` empty the `DEFAULT_PAGES`, `DEFAULT_PIECES`, and
`DEFAULT_CHUNKS` constants back to `{}`, `[]`, `[]`.

### Adding more pieces yourself

Drop additional page images into the same folder, then in the live site click
**+ New piece**, name it, **Add page** for each image, save, and either draw
chunks by hand or click **✨ Generate chunks with Claude**.

## Versioning

The current app version is shown next to the title at the top of the page
(`v1.0.0` at first launch). Bumped whenever the app's behaviour changes.

## Hosting on GitHub Pages

This project is set up to ship as a single self-contained HTML file
(`index.html`) — perfect for GitHub Pages.

### Option A — User site at `amieres.github.io`

Use this if you don't already have a personal GitHub Pages site.

1. Create a new public repository named exactly `amieres.github.io`.
2. Upload `index.html` (and `README.md`) to the repository root.
3. In the repository's **Settings → Pages**, set source to `main` branch /
   root.
4. Wait a minute or two; the tool is live at <https://amieres.github.io/>.

### Option B — Project site at `amieres.github.io/recital-practice/`

Use this if `amieres.github.io` is already taken by another personal page.

1. Create a public repo named e.g. `recital-practice`.
2. Upload `index.html` and `README.md` to the root.
3. In **Settings → Pages**, set source to `main` branch / root.
4. The tool is live at <https://amieres.github.io/recital-practice/>.

## License

MIT — feel free to fork, modify, share.

## Tech notes

- Single static HTML file, no build step. Plain JS, no framework.
- Uses `localStorage` for persistence; no server, no tracking.
- The Claude integration uses the Anthropic Messages API directly from the
  browser via the `anthropic-dangerous-direct-browser-access` header. Works
  fine on a personal device; if you share the page from a multi-user machine
  that other people use under your browser profile, they could read the key
  out of `localStorage`.
