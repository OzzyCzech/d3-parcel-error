# Parcel 2.8 bundler issue

This repo shows minimal reproduction of [bundling issue](https://github.com/parcel-bundler/parcel/issues/8792) present in `@parcel/bundler-default`

## How to reproduce

```bash
yarn error
```

Reference error is no thrown when parcel running in watch mode:

```bash
yarn ok
```

## Quick fix

Add `d3` alias to `package.json`:

```bash
//... 
  "alias": {
    "d3": "d3/dist/d3.js"
  }
// ...
```