# IntelliSQR Assignment

## Description

This project is a backend application built with Node.js, TypeScript, and Prisma. It provides authentication functionality and database operations through a RESTful API.

---

## File Structure

```
backend/
├── controllers/
│   ├── login.ts           # Login controller
│   └── signup.ts          # Signup controller
├── generated/             # Auto-generated files
├── node_modules/          # Dependencies (auto-generated)
├── prisma/
│   ├── migrations/        # Database migration files
│   └── schema.prisma      # Prisma schema definition
├── routes/
│   └── auth.ts            # Authentication routes
├── .env                   # Environment variables
├── .gitignore             # Files to ignore in Git
├── index.ts               # Main application entry point
├── package-lock.json      # Lock file for package versions
├── package.json           # Project metadata and dependencies
├── script.ts              # Utility scripts
└── tsconfig.json          # TypeScript configuration
```

---

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A database supported by Prisma (PostgreSQL, MySQL, SQLite, etc.)

---

## Setup Instructions

### 1. Clone the Repository

```sh
git clone <repository_url>
cd backend
```

### 2. Install Dependencies

Using npm:

```sh
npm install
```

Using yarn:

```sh
yarn install
```

### 3. Environment Configuration

Create a `.env` file in the root directory with the following variables:

```
# Database connection
DATABASE_URL="postgresql://username:password@localhost:5432/database_name"

# Application settings
PORT=3000
NODE_ENV=development

```

### 4. Database Setup

Run Prisma migrations to set up your database:

```sh
npx prisma migrate dev
```

### 5. Generate Prisma Client

```sh
npx prisma generate
```

---

## Running the Project Locally

### Start Development Server

Using npm:

```sh
npm run dev
```

Using yarn:

```sh
yarn dev
```

### Build for Production

```sh
npm run build
```

### Run in Production Mode

```sh
npm start
```

---

## API Endpoints

Based on the file structure, the project provides these authentication endpoints:

- `POST /auth/signup` - Create a new user
- `POST /auth/login` - Authenticate a user

Refer to the implementation in the controllers for exact details and additional endpoints.

---

## Development

- Make changes to the Prisma schema in `prisma/schema.prisma`
- Run `npx prisma migrate dev` to create migrations
- Update or add controllers in the `controllers/` directory
- Define routes in the `routes/` directory
- The main application entry point is `index.ts`
