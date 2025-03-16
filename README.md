# The Menu

## Getting Started

Tested `npm` version:

```
11.2.0
```

Simply perform

```
npm install
npm run dev
```

You will need to export a variable `VITE_BACKEND_URL` to point to the backend that you wish to fetch from.

For example, if using the local Rails server:
```
VITE_BACKEND_URL="http://localhost:3000/graphql" npm run dev
```

And frontend should start on `localhost:5173`.

## GraphQL codegen

After updating GraphQL queries, it is required to run `npm run compile` so that the Typescript types are updated.
