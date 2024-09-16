# Personal Finance API

## Overview

The **Personal Finance API** is a RESTful service designed to help users manage their personal finances by tracking expenses, income, and budgets. The API allows users to categorize their transactions, generate reports over specified periods, and set budget limits for different spending categories.

## Features

- **Transactions Management:**
  - Record income and expense transactions.
  - Categorize transactions (e.g., Food, Entertainment, Salary).
  - Retrieve all transactions with optional filters (e.g., by category, type, date range).

- **Budget Management:**
  - Set budget limits for specific categories (e.g., monthly, weekly).
  - Retrieve current budget limits.

- **Reporting:**
  - Generate reports for income and expenses over a specified period.

## Endpoints

### Transactions

- **POST /api/transactions**
  - **Description:** Add a new transaction (income or expense).
  - **Request Body:**
    ```json
    {
      "type": "expense",
      "amount": 50.00,
      "category": "Food",
      "description": "Groceries"
    }
    ```
  - **Response:**
    - `201 Created`: Returns the created transaction.

- **GET /api/transactions**
  - **Description:** Retrieve all transactions with optional filters.
  - **Query Parameters:**
    - `type` (optional): Filter by type (`income` or `expense`).
    - `category` (optional): Filter by category.
    - `date` (optional): Filter by date or date range.
  - **Response:**
    - `200 OK`: Returns an array of transactions.

### Budgets

- **POST /api/budgets**
  - **Description:** Set a budget limit for a specific category.
  - **Request Body:**
    ```json
    {
      "category": "Food",
      "limit": 500,
      "period": "monthly"
    }
    ```
  - **Response:**
    - `201 Created`: Returns the created budget.

- **GET /api/budgets**
  - **Description:** Retrieve all budgets.
  - **Response:**
    - `200 OK`: Returns an array of budgets.

## Getting Started

### Prerequisites

- **Node.js**: Make sure you have Node.js installed on your machine.
- **MongoDB Atlas**: Set up a MongoDB Atlas account and create a cluster. Obtain your MongoDB connection string.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/personal-finance-api.git
   cd personal-finance-api

2. Install dependencies:
    ```bash
    npm install

3. Install dependencies:
    ```bash
    MONGODB_URI=your_mongodb_cloud_uri
    PORT=
4. Start server:
    ```bash
    npm start


## Technologies Used

- **Express.js**: A minimal and flexible Node.js web application framework that provides a robust set of features for building web and mobile applications.
- **MongoDB Atlas**: A fully-managed cloud database service by MongoDB that simplifies deployment and management of MongoDB clusters.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js, providing a straightforward schema-based solution to model your data.
- **Jest**: A delightful JavaScript testing framework with a focus on simplicity, allowing you to write tests with minimal configuration.
- **Supertest**: A library that provides high-level abstraction for HTTP assertions, ideal for testing HTTP servers such as Express.js.
