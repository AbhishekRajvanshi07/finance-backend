# Finance Data Processing & Access Control Backend

A modular backend system for managing financial records with role-based access control and dashboard analytics.

---

## 🚀 Overview

This project is a backend system built using **Node.js, Express, Prisma, and PostgreSQL**. It supports:

* User authentication and role-based access control
* Financial transaction management
* Dashboard analytics (income, expenses, trends)
* Secure and scalable API design

---

## 🏗️ Architecture

The backend follows a layered architecture:

```
Routes → Middleware → Controllers → Prisma ORM → Database
```

### Key Components:

* **Authentication:** JWT-based authentication
* **Authorization:** Role-based access control (RBAC)
* **Validation:** Zod schema validation
* **Database:** PostgreSQL via Prisma ORM

---

## 🔐 Role-Based Access Control

| Role    | Permissions                            |
| ------- | -------------------------------------- |
| Admin   | Full CRUD access on transactions       |
| Analyst | Read transactions + dashboard insights |
| Viewer  | Limited / read-only access             |

---

## 📊 Features

### 1. User Management

* Register and login users
* JWT-based authentication
* Role assignment (Admin / Analyst / Viewer)

### 2. Financial Records

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

* JWT authentication
* Role-based access control (RBAC)
* User-level data isolation (`createdBy`)
* Input validation using Zod
* Secure update/delete with ownership checks

---

## ⚙️ Tech Stack

* **Backend:** Node.js, Express
* **Database:** PostgreSQL
* **ORM:** Prisma
* **Validation:** Zod
* **Authentication:** JWT
* **Documentation:** Swagger

---

## 📦 Installation & Setup

### 1. Clone Repository

```bash
git clone <your-repo-link>
cd finance-backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file:

```
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
PORT=4000
```

---

### 4. Run Prisma Migrations

```bash
npx prisma migrate dev
```

---

### 5. Start Server

```bash
npm run dev
```

Server runs on:

```
http://localhost:4000
```

---

## 📄 API Documentation

Swagger docs available at:

```
http://localhost:4000/docs
```

---

## 🔁 API Endpoints

### Auth

* `POST /auth/register`
* `POST /auth/login`

### Transactions

* `POST /transactions` (Admin)
* `GET /transactions` (Admin, Analyst)
* `PATCH /transactions/:id` (Admin)
* `DELETE /transactions/:id` (Admin)

### Dashboard

* `GET /dashboard/summary`
* `GET /dashboard/trends`

---

## 🧠 Key Design Decisions

* Used **JWT** for stateless authentication
* Implemented **RBAC middleware** for clean access control
* Enforced **user-level data isolation** to prevent data leakage
* Used **Prisma ORM** for type-safe database operations
* Designed **modular structure** for maintainability

---

## ⚠️ Assumptions

* Each transaction belongs to a single user
* Roles are embedded inside JWT tokens
* System is designed for single-tenant usage

---

## 🔮 Future Improvements

* Redis caching for dashboard APIs
* Rate limiting and enhanced security
* Unit & integration testing
* Cursor-based pagination
* Docker containerization

---

## 📌 Conclusion

This project demonstrates backend system design with a focus on:

* Clean architecture
* Secure access control
* Scalable data handling
* Maintainable code structure

---

## 👤 Author

**Abhishek Kumar**
