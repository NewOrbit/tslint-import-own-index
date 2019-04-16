# tslint-import-own-index

This is a TSLint rule that prevents TypeScript files from importing from an index file within their own directory, as this can cause circular references at import time.

The following imports will be disallowed:

- `"./";`
- `".";`
- `"./index";`
- `"./index.ts";`
- `"./INDEX.TS";`

## Installation

`npm install tslint-import-own-index --save-dev`

## Setup

Add the following to your `tslint.json` inside `rules`:

```json
"import-own-index": true
```

## License

Made with :sparkling_heart: by [NewOrbit](https://www.neworbit.co.uk/) in Oxfordshire, and licensed under the [MIT License](LICENSE)
