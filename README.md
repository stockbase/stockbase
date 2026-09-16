# Stockbase

## Getting Started

### Prerequisites

Follow our [Onboarding Docs](https://www.notion.so/Onboarding-c6ec12566ef1416ebe08575b9f6fe09a). The gist of it is you need the following tools/software installed:

- Git
- Docker Desktop
- nvm
- pnpm
- Turbo CLI
- (Optional) GitHub CLI
- (Optional) Supabase CLI
- (Optional) Vercel CLI

Here's a quick guide on how to install the following CLI tools globally

```
npm install turbo --global
npm install -g pnpm
```

Also, make sure you have access to the following platforms and verify you have access to the team/organization:

- [Vercel](https://vercel.com/stockbase)
- [Supabase](https://supabase.com/dashboard/project/rzecnddgcxjwcnpbaqln)

## Local Development

### Initial Setup

After you've cloned this repo, `cd` into the root directory of this project and run the following:

```
nvm use # or nvm install if this is your first time
pnpm install
```

Next, start Docker Desktop up before proceeding with the next steps

### Seting up the Database

https://supabase.com/docs/guides/cli/local-development

Add a `.env` file to the root directory. Copy the contents of `.env.example` into it. This file will have credentials for the OAuth Providers we use - Google & Facebook. Ask someone to get access to these secrets and paste them into your `.env`.

Then, run the following commands at the root directory

```
nvm use
npx supabase login # NOTE: "npx" is only needed if you installed the Supabase CLI via NPM. Otherwise, it can be omitted
npx supabase init
npx supabase start
```

If everything starts up successfully, it will spit out an `anon key`. Copy this key to your clipboard.
Add an `.env.local` file to the top-level of each of the apps in the `apps` directory.

```
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=<YOUR_ANON_KEY>
DATABASE_URL=postgresql://postgres:postgres@localhost:54322/postgres
```

You can use the `supabase stop` command at any time to stop all services (without resetting your local database). Use `supabase stop --no-backup` to stop all services and reset your local database.

Now, you can visit your Supabase local Dashboard at [http://localhost:54323](http://localhost:54323). You can also open up a Postgres client like `pgAdmin` and connect directly to the database using the URL below.

```
# Default URL:
postgresql://postgres:postgres@localhost:54322/postgres
```

You can also access the database via the command line if you have `psql` installed:

```
psql 'postgresql://postgres:postgres@localhost:54322/postgres'
```

### Running the App

```
turbo dev # alternatively, you can run pnpm run dev
```

Note that `turbo dev` will run every app in the monorepo. To run a single app, run the following:

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

### Adding/Removing Packages

Adding a package:

```
pnpm add <package> --filter <APP_NAME>
```

Removing a package

```
pnpm remove <package> --filter <APP_NAME>
```

### Generating Database Migrations

If you need to make a database update, you need to generate a migration SQL file. Once you have Supabase running locally,
run the following command from the root directory:

```
npx supabase migration new <YOUR_FILE_NAME>
```

This will generate an empty `supabase/migrations/<timestamp>_<YOUR_FILE_NAME>.sql.` Add some SQL to update the database schema. Keep in mind that you can access a lot of helpful templates and quick starts from the Supabase dashboard. If you find a template, do not apply it directly from the Supabase dashboard. Rather, copy the SQL from the template into your generated migration, so you can test it locally first.

Once your migration file is updated, run the following to apply the migration to your local Postgres database:

```
npx supabase db reset
```

After testing your local database updates, you must apply the changes to production:

```
supabase link --project-ref <project-id>
# You can get <project-id> from your project's dashboard URL: https://supabase.com/dashboard/project/<project-id>

supabase db pull
# Capture any changes that you have made to your remote database before you went through the steps above
# If you have not made any changes to the remote database, skip this step

# Deploy any local database migrations using
supabase db push
```

### Generating Models/Types from Database

If you make a database update in your local Supabase, you need to update the TypeScript models to reflect your changes:

[Generating Types Instructions](https://supabase.com/docs/guides/api/rest/generating-types)

```
# From root directory
npx supabase gen types typescript --local --schema public > packages/models/src/supabase.ts
```

This command will automatically generate the TypeScript models based on your database schema, and put them into a shared package that all the apps in this monorepo can use.

<!-- ### Developing Edge Functions Locally

https://supabase.com/docs/guides/functions/local-development

After testing locally.

```
supabase functions deploy <function_name>
``` -->

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `api`: an [Express](https://expressjs.com/) server
- `web`: a [Next.js](https://nextjs.org/) app
- `admin`: a [Vite](https://vitejs.dev/) single page app
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
