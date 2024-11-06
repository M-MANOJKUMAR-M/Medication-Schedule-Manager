# Medication Schedule Manager

A web and mobile-based application that allows users to manage and track their medication schedules. Users can add, view, and mark their medications as taken, set start and end dates, and receive notifications based on their scheduled times.

---

## Table of Contents:

1. [Features](#features)
2. [Technology Stack](#technology-stack)
3. [Prerequisite](#prerequisite)
4. [Run the project](#run-the-project)

---

## 1. Features:

### -- Medication Management --
- Allows users to add, edit, and delete medication schedules with dosage, times, start date, and end date.

### -- Upcoming Medications --
- Displays upcoming medications with times and allows users to mark them as taken.

### -- History Tracking --
- Tracks the medication history and marks the medication as taken.

### -- Notifications --
- Sends notifications when it’s time to take the medication and allows for flexibility to take the medication 1 hour before or after the scheduled time.

### -- Scheduler --
- The scheduler continues to show upcoming medications until the end date is reached.

### -- Mark as Taken --
- Users can mark medications as taken on the upcoming and history tabs.

---

## 2. Technology Stack:

### Frontend:
- **React**: Used for the web application.
- **Material-UI**: A popular React UI framework for creating beautiful and responsive user interfaces.
- **Axios**: Promise-based HTTP client for making API requests to the backend.

### Backend:
- **Node.js**: JavaScript runtime environment for building scalable network applications.
- **Express.js**: Web application framework for Node.js to handle routing, middleware, and HTTP requests.
- **JWT (JSON Web Tokens)**: A compact and self-contained way to securely transmit information between the frontend and backend, used for user authentication.
- **Bcrypt**: A library for hashing passwords to secure user authentication.
- **Push Notifications**: Libraries or services such as Firebase Cloud Messaging (FCM) to handle push notifications.

### Databases:
- **MongoDB**: NoSQL database used to store user data, medications, schedules, and history.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js, providing a straight-forward way to interact with MongoDB.

---

## 3. Prerequisite

Ensure that the following are installed:
1. **Node.js**
2. **MongoDB**
3. **VS Code**

---

## 4. How to run this:

1. Create a folder named `medication_schedule_manager`. Move to this folder and either pull or download the repository under that folder.
2. Install Express and Mongoose:  
   `npm install express mongoose`
3. Install Axios:  
   `npm install axios`
4. Install React-Select:  
   `npm install react-select`
5. Install Material-UI:  
   `npm install @mui/material @emotion/react @emotion/styled`
6. Install all dependencies (Axios, Material-UI, React-Select, etc.):  
   `npm install axios @mui/material @emotion/react @emotion/styled react-select`
7. Install CORS:  
   `npm install express cors`
8. Install additional dependencies:  
   `npm install @mui/material axios`
9. Install server dependencies:  
   `npm install express mongoose bcrypt jsonwebtoken cors body-parser dotenv axios`
10. Install Babel plugin (for private property support):  
    `npm install --save-dev @babel/plugin-proposal-private-property-in-object`

---

### After Installing all dependencies:

1. Open the terminal (path where the project is stored).
2. Navigate to the backend folder:  
   `cd backend`
3. Run the backend server:  
   `node server.js`
4. To run the frontend, open the terminal (path where the project is stored and you should see `package.json`).
5. Run the frontend:  
   `npm start`

---

### Ensure the following:

- MongoDB is installed locally or you have access to a MongoDB cloud instance.
- MongoDB connection is set to `mongodb://localhost:27017/medicationDB`.
- The server will start on port **5000**.
- The React app will start on port **3000**.
- The output should be visible at `http://localhost:3000`.
