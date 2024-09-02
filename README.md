Movie Booking App Backend 🎬
This is the backend service for the Cinema Ticket Booking App. It handles the server-side logic, including user authentication, movie data management, ticket booking, and other backend services.

How to Get Started
To get started with the backend, follow these simple steps:

Prerequisites
Ensure you have the following installed on your system:

Node.js and npm
A local or hosted MongoDB instance (if using MongoDB as your database)
Installation
Clone the repository:


git clone https://github.com/Manojkumar712201/movie_booking_app_backend.git
cd movie_booking_app_backend.git
npm install
Environment Configuration: Create a .env file in the root directory and add the following environment variables:


npm start
The server will run at http://localhost:5000.

Available Scripts
Here are the commands you can use:

npm start
Starts the backend server in production mode.

npm run dev
Runs the server in development mode with automatic restarts on file changes (using nodemon).

npm test
Launches the test suite to ensure that all backend features are working as expected.

npm run build
Compiles the backend code for production (if using TypeScript or other build tools).

API Endpoints
The backend provides the following key API endpoints:

GET /api/movies - Retrieve a list of all movies.
GET /api/movies/
- Get details of a specific movie.
POST /api/bookings - Create a new booking.
POST /api/auth/login - Log in as a user/admin.
POST /api/auth/signup - Register a new user.
Additional endpoints are available for user management, movie management (admin), and booking management.

Database
This backend uses MongoDB as the database. Make sure to update your .env file with your MongoDB connection string.

Additional Resources
Node.js Documentation – Learn more about the runtime powering the backend.
Express.js Documentation – Explore the server framework used.
MongoDB Documentation – Understand more about the database used for data storage.
