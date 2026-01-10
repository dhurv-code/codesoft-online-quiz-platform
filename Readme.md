Online Quiz Platform

A full-stack web application that allows users to create quizzes, attempt quizzes created by others, and receive instant results. The project focuses on core functionality, clean logic, and a simple user interface.

Features

User registration and login

Create quizzes with multiple-choice questions

Browse available quizzes

Take quizzes one question at a time

Instant score and correct answers after submission

Only the quiz creator can delete their quiz

Responsive design for mobile and desktop

Tech Stack
Frontend

React (Vite)

React Router

Axios

Plain CSS

Backend

Node.js

Express.js

MongoDB

Mongoose

JWT Authentication

Project Structure (Simplified)
frontend/
 ├─ src/
 │  ├─ pages/
 │  ├─ components/
 │  ├─ services/
 │  ├─ index.css
 │  └─ App.jsx

backend/
 ├─ models/
 ├─ routes/
 ├─ middleware/
 └─ server.js

Authentication & Authorization

Users must be logged in to create or take quizzes

Authentication is handled using JWT

Quiz deletion is restricted to the user who created the quiz

Authorization is enforced on the backend and reflected in the UI

How Quiz Deletion Works

Each quiz stores the creator’s user ID

When deleting a quiz:

Backend verifies the logged-in user is the creator

Frontend shows the delete option only to the creator

This ensures proper access control and prevents unauthorized actions.

How to Run the Project Locally
1. Clone the repository
git clone <repository-url>

2. Backend Setup
cd backend
npm install


Create a .env file:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


Start backend:

npx nodemon server.js

3. Frontend Setup
cd frontend
npm install
npm run dev


Open in browser:

http://localhost:5173

Future Improvements (Optional)

Edit quiz functionality

Timer for quizzes

Better result analytics

UI enhancements

Author

Developed as part of a web development internship project to demonstrate full-stack fundamentals, authentication, and CRUD operations.