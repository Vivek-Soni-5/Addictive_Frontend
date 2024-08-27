# MERN Video Upload Application

A full-stack application built using the MERN stack (MongoDB, Express, React, Node.js) that allows users to register, log in, and upload videos. Admins can view all users and their uploaded videos.

## Features

- **User Registration**: Sign up with a first name, last name, and email.
- **User Login**: Authenticate using first name and password.
- **Dashboard**: Users can view their profile, upload videos, and see a list of their uploaded videos.
- **Admin Page**: Admins can view all users and their respective videos.

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB

### Installation

1. **Clone the Repository**

    ```bash
    git clone https://github.com/Vivek-Soni-5/Addictive_Frontend.git
    cd your-repository
    ```

2. **Backend Setup**

    - Navigate to the `backend` directory.
    - Install dependencies:

        ```bash
        cd backend
        npm install
        ```

    - Create a `.env` file in the `backend` directory with the following content:

        ```env
        MONGO_URI=your-mongodb-connection-string
        JWT_SECRET=your-jwt-secret
        ```

    - Start the backend server:

        ```bash
        npm start
        ```

3. **Frontend Setup**

    - Navigate to the `frontend` directory.
    - Install dependencies:

        ```bash
        cd ../frontend
        npm install
        ```

    - Start the frontend server:

        ```bash
        npm start
        ```

## Usage

1. **Register**

    - Visit `http://localhost:3000/register` to create a new account.

2. **Login**

    - Visit `http://localhost:3000/login` to log in.

3. **Dashboard**

    - After logging in, you'll be redirected to `http://localhost:3000/dashboard` where you can view your profile and upload videos.

4. **Admin Page**

    - Access `http://localhost:3000/admin` to view all users and their videos (note: ensure you have admin privileges to access this page).

## API Endpoints

### Authentication

- **POST /api/auth/register**: Register a new user.
- **POST /api/auth/login**: Log in a user.
- **GET /api/auth/dashboard**: Fetch user details and videos (requires authentication).

### Admin

- **GET /api/admin/users**: Fetch all users and their videos (admin access required).



