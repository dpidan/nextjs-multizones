# Next.js Multi Zones Demo

An example of a Next.js Multi Zones site in a monorepo using [TurboRepo](https://turborepo.org/) to concurrently build and run.

## Requirements

- Node.js >=12
- Yarn 1 (for monorepo workspace support)

This uses Next.js v.10 to test backward-compatibility.

## Installation

```console
yarn
```

## Development

#### Using Next.js's rewrites and internal proxy:

```console
yarn dev
```

This runs the root `dev` script (`$ yarn turbo run dev`) which will start and concurrently run all apps and libraries in dev/watch mode.

#### Using a Node.js [proxy](https://github.com/chimurai/http-proxy-middleware) wrapper app:

```console
yarn dev:proxy
```

Visit [http://localhost:3000](http://localhost:3000)

## Build

```bash
yarn build
```

## To Do

- Finish setting up alternative proxy wrapper app so so we don't have to use Next.js `basePath` for sibling apps.
- *See various TODOs in code
