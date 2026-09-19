# Backend Ledger

A lightweight backend service for managing user authentication and preparing the foundation for a ledger-style application. The project currently includes a registration flow backed by MongoDB, password hashing, and JWT token generation.

## Features

- User registration endpoint
- MongoDB connection with Mongoose
- Password hashing with bcryptjs
- JWT-based token creation for authenticated users
- Express API structure with modular routes/controllers/models

## Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv

## Project Structure

```bash
backend-ledger/
├── src/
│   ├── app.js
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── auth.controller.js
│   ├── models/
│   │   └── user.model.js
│   └── routes/
│       └── auth.routes.js
├── .env
├── package.json
├── server.js
└── README.md
```

## Prerequisites

Before running the project, make sure you have:

- Node.js installed
- MongoDB running locally or a MongoDB Atlas connection string
- A JWT secret key for signing tokens

## Installation

1. Clone the repository:

```bash
git clone https://github.com/PrabhatBargoti/Bank-Ledger
cd backend-ledger
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory and add the following values:

```env
MONGO_DB_URL=mongodb://localhost:27017/backend-ledger
JWT_SECRET=your_super_secret_key
PORT=3000
```

## Running the Project

Start the development server:

```bash
npm run dev
```

Or run the production version:

```bash
npm start
```

The server listens on port `3000` by default.

## API Endpoints

### User Registration

- Method: `POST`
- Route: `/api/auth/register`

Request body:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

The registration route validates the request payload, checks whether the email already exists, and creates the user record in MongoDB. The controller currently returns error responses for duplicate users or server failures.

## Notes

This project is currently focused on the authentication foundation for a ledger application. The codebase is structured to support future expansion with ledger entries, transactions, and more user/account management features.

## License

ISC
