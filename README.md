# POLAR@3 Alpha Vanilla Demo

Minimal example app integrating the [POLAR](https://github.com/Dataport/polar/tree/next)
map client ([@polar/polar v3 alpha](https://www.npmjs.com/package/@polar/polar/v/3.0.0-alpha.3))
with plain JavaScript, built with [Vite](https://vite.dev). No Vue code required
(POLAR uses Vue internally, but you only call `createMap`).

## Setup

```bash
npm install
npm run dev
```

Then open the printed URL (usually http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## How it works

- [src/main.js](src/main.js) imports `@polar/polar/polar.css` and calls
  `createMap(containerId, serviceRegisterUrl, mapConfiguration)`.
- Layers are referenced by `id` from the Hamburg service register
  (`https://geoportal-hamburg.de/lgv-config/services-internet.json`); a local
  array of service description objects works as well.
- The map container ([index.html](index.html)) needs explicit width/height and
  `position: relative`.

Configuration is based on the official
[generic example](https://github.com/Dataport/polar/tree/next/examples/generic)
from the POLAR repository. Note that v3 is an alpha release; the API may change.
