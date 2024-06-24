Practice with Next.js by follwoing [this tutorial](https://www.youtube.com/watch?v=N_uNKAus0II).

## Getting Started

### Create .env.local in the root of the project.
Example file content:

```
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clertk_publishable_key
CLERK_PUBLISHABLE_KEY=your_clertk_publishable_key
CLERK_SECRET_KEY=your_clertk_secret_key
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

POSTGRES_URL=your_postgres_url

NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Run the development server:

```bash
bun install
bun db:generate
bun db:migrate

bun dev

# Instead of bun, can use npm or yarn or pnpm

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
