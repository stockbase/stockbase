# Stockbase

## Getting Started

### Setup

```
nvm install <LATEST_NODE_VERSION>
npm install turbo --global
npm install -g pnpm
```

After you've cloned this repo, `cd` into the root directory and run the following:

```
pnpm install
```

### Running

```
turbo dev # or pnpm run dev
```

`turbo dev` will run every app in the monorepo. To run a single app, run the following:

```
turbo dev --filter <APP_NAME> # See app names below
```

Each subproject is stored in the `apps` directory. We have the following apps in this monorepo:
`web`
`admin`
`api`
`mobile`

Each library is stored in the `packagaes` directory. We have the following libraries
`ui`
`logger`

## Adding Packages

```
pnpm add <package> --filter <APP_NAME>
```

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `api`: an [Express](https://expressjs.com/) server
- `web`: a [Next.js](https://nextjs.org/) app
- `admin`: a [Vite](https://vitejs.dev/) single page app
- `blog`: a [Remix](https://remix.run/) blog
- `logger`: isomorphic logger (a small wrapper around console.log)
- `ui`: a dummy React UI library (which contains a single `<CounterButton>` component)
- `scripts`: Jest and ESLint configurations
- `tsconfig`: tsconfig.json's used throughout the monorepo

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Jest](https://jestjs.io) test runner for all things JavaScript
- [Prettier](https://prettier.io) for code formatting
