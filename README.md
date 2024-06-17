# Restaurant Reservation System

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Introduction
This project is a Restaurant Reservation System that allows users to make reservations online. It features a backend built with Node.js, Express, and MongoDB, and a frontend built with React.

## Features
- User registration and login for employees
- Make and manage reservations
- Responsive design

## Technologies Used
- **Frontend:** React, React Router, react-hot-toast
- **Backend:** Node.js, Express, Mongoose
- **Database:** MongoDB
- **Styling:** CSS (with class names for styling components)

## Prerequisites
Before you begin, ensure you have met the following requirements:
- Node.js and npm installed on your machine
- MongoDB instance running (either locally or using MongoDB Atlas)

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/UtkarshTailor/restaurant-reservation-system.git
    ```
2. Navigate to the project directory:
    ```sh
    cd restaurant-reservation-system
    ```

### Backend Setup
1. Navigate to the backend directory:
    ```sh
    cd backend
    ```
2. Install the dependencies:
    ```sh
    npm install
    ```
3. Start the backend server:
    ```sh
    npm run dev
    ```

### Frontend Setup
1. Navigate to the frontend directory:
    ```sh
    cd frontend
    ```
2. Install the dependencies:
    ```sh
    npm install
    ```
3. Start the frontend development server:
    ```sh
    npm start
    ```

## Usage
- Open your browser and navigate to `http://localhost:5173`.
- You can register as an employee and log in.
- Make a reservation through the provided form.

## API Endpoints
- **POST /api/v1/reservation**: Send a reservation

## Folder Structure
```sh
restaurant-reservation-system/
├── backend/
│   ├── config/
│   │   └── config.env
│   ├── controllers/
│   │   └── reservation.js
│   ├── database/
│   │   └── dbConnection.js
│   ├── error/
│   │   └── error.js
│   ├── models/
│   │   └── reservationSchema.js
│   ├── routes/
│   │   └── reservationRoutes.js
│   ├── app.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── Navbar.jsx
│   │   ├── pages/
│   │   │   ├── Success.jsx
│   │   ├── App.jsx
│   │   └── index.jsx
│   ├── package.json
└── README.md
