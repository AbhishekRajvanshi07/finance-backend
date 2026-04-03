# 💰 Finance Data Processing & Access Control Backend

A scalable backend system for managing financial transactions with **role-based access control (RBAC)**, secure APIs, and dashboard analytics.

---

## ⭐ Highlights

* Role-Based Access Control (Admin, Analyst, Viewer)
* Secure multi-user system with data isolation (`createdBy`)
* Optimized dashboard using database aggregation (Prisma)
* Fully documented APIs with Swagger
* Clean and modular backend architecture

---

## 🚀 Overview

This backend is built using **Node.js, Express, Prisma, and PostgreSQL** to handle financial records, enforce access control, and provide analytics for a dashboard system.

---

## 🏗️ Architecture

Routes → Middleware → Controllers → Prisma ORM → Database

### Key Components:

* **Authentication:** JWT-based authentication
* **Authorization:** Role-based access control (RBAC)
* **Validation:** Zod schema validation
* **Database:** PostgreSQL via Prisma ORM

---

## 🔐 Role-Based Access Control

| Role    | Permissions                |
| ------- | -------------------------- |
| Admin   | Full CRUD access           |
| Analyst | Read + dashboard insights  |
| Viewer  | Read-only / limited access |

---

## 📊 Features

### 1. User Management

* Register & login users
* JWT authentication
* Role-based access enforcement

### 2. Financial Transactions

* Create, update, delete transactions
* Filter by:

  * Type (Income / Expense)
  * Category
  * Date range
* Pagination support

### 3. Dashboard APIs

* Total income
* Total expenses
* Net balance
* Monthly trends
* Category-wise aggregation

---

## 🔒 Security Features

* JWT-based authentication
* Role-based access control (RBAC)
* User-level data isolation (`createdBy`)
* Secure update/delete with ownership checks
* Input validation using Zod

---

## ⚙️ Tech Stack

* **Backend:** Node.js, Express
* **Database:** PostgreSQL
* **ORM:** Prisma
* **Validation:** Zod
* **Authentication:** JWT
* **Documentation:** Swagger

---

## 🌐 API Access (Local Setup)

Base URL:
http://localhost:4000

Swagger Docs:
http://localhost:4000/docs

### How to Test APIs:

1. Start the server using `npm run dev`
2. Open Swagger UI in your browser
3. Test endpoints directly

---

## 📄 API Endpoints

### Auth

* `POST /auth/register`
* `POST /auth/login`

### Transactions

* `GET /transactions`
* `POST /transactions`
* `PATCH /transactions/{id}`
* `DELETE /transactions/{id}`

### Dashboard

* `GET /dashboard/summary`
* `GET /dashboard/trends`

---

## 📦 Installation & Setup

### 1. Clone Repository

git clone <your-repo-link>
cd finance-backend

### 2. Install Dependencies

npm install

### 3. Setup Environment Variables

Create `.env` file:

DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
PORT=4000

---

### 4. Run Migrations

npx prisma migrate dev

---

### 5. Start Server

npm run dev

---

## 🧠 Key Design Decisions

* Used **JWT** for stateless authentication
* Implemented **RBAC middleware** for clean access control
* Enforced **user-level data isolation** for security
* Used **Prisma ORM** for type-safe database operations
* Designed modular structure for maintainability

---

## ⚠️ Assumptions

* Each transaction belongs to a single user
* Roles are embedded inside JWT
* System is designed for single-tenant use

---

## 🔮 Future Improvements

* Redis caching for dashboard APIs
* Rate limiting and enhanced security
* Unit & integration testing
* Cursor-based pagination
* Docker containerization

---

## 📌 Conclusion

This project demonstrates a **clean, secure, and scalable backend system** with:

* Proper architecture
* Strong access control
* Reliable data handling
* Professional API documentation

---

## 👤 Author

**Abhishek Kumar**
