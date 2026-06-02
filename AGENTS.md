# AGENTS.md

## Repo Shape
- This is a static browser app: `index.html` loads `generator.js`, and both fetch `names.json` at runtime.
- There is no `package.json`, build step, test runner, linter, formatter config, or CI in this repo.

## Running And Checking
- Serve the repo before browser testing; opening `index.html` via `file://` can break `fetch('names.json')`.
- Simple local server: `python3 -m http.server 8000`, then open `http://localhost:8000/`.
- Validate data edits with `node -e "JSON.parse(require('fs').readFileSync('names.json','utf8'))"`.

## Data Contract
- `names.json` is the source of languages and buttons; `index.html` creates buttons from each language object.
- `type: "simple"` entries use optional `male` and `female` arrays; only non-empty arrays get buttons.
- `type: "composite"` entries combine `surname` with the selected `male` or `female` given-name array in `generator.js`.
- Preserve non-ASCII names and script annotations in `names.json`; this repo intentionally contains accented and CJK characters.
