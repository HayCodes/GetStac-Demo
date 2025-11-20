# GETSTAC - DEMO

Brief description of what your project does.

## Setup

### Prerequisites

- Node.js 18+
- yarn

### Installation

1. Clone the repository

```bash
git clone <https://github.com/HayCodes/GetStac-Demo.git>
cd <getstac-demo>
```

2. Install dependencies

```bash
yarn install
```

3. Run the development server

```bash
yarn dev

```

Open [http://localhost:3000](http://localhost:3000) to see your app.

## Tech Stack

- **Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## Key Decisions & Tradeoffs

### Tailwind CSS for Styling

- **Decision**: Tailwind CSS instead of CSS Modules or styled-components
- **Why**: Faster development, smaller bundle size, consistent design system

### Server Components by Default

- **Decision**: Using React Server Components where possible
- **Why**: Reduces JavaScript sent to client, improves performance, easier backend access
- **Tradeoff**: Can't use browser hooks like useState in these components; requires different mental model

## Project Structure

```
src/
  ├── app/              # App Router pages and layouts
  ├── components/       # Reusable React components
  ├── core/             # Schemas and Routing assets
  ├── lib/             # Utility functions and helpers
  ├── hooks/           # Custom React hooks
  └── types/           # TypeScript type definitions
public/                # Static assets
```
## Excerpts from the Project
```
Escalate an Issue Dialog
```
<img width="1906" height="919" alt="Escalate an Issue dialog image" src="https://github.com/user-attachments/assets/7f020a65-f258-46eb-814f-9ebb9a80248e" />

```
Dashboard Homepage
```
<img width="1902" height="923" alt="Screenshot 2025-11-20 191753" src="https://github.com/user-attachments/assets/ee2201dc-db92-4974-b130-7de2985785d5" />
```
Manage location page
```
<img width="1904" height="969" alt="Screenshot 2025-11-20 191731" src="https://github.com/user-attachments/assets/1965c0cd-1fcf-49ec-b739-18cb2e9bd1bc" />

```
Auth Page
```
<img width="1917" height="967" alt="image" src="https://github.com/user-attachments/assets/51167e3e-f74a-45ec-95ae-e349c82f838a" />



## Scripts

- `yarn dev` — Start development server
- `yarn run build` — Build for production
- `yarn start` — Run production build
- `yarn lint --fix` — Run ESLint

## Deployment

This project is configured for Vercel deployment. Push to main branch to auto-deploy.
