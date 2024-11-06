Medication Schedule Manager

A web and mobile-based application that allows users to manage and track their medication schedules. Users can add, view, and mark their medications as taken, set start and end dates, and receive notifications based on their scheduled times.
-------------------------

Table of Contents:
1. Features
2. Technology Stack
3. Prerequisite
4. Run the project

--------------------------------

1. Features:

--Medication Management--:
Allows users to add, edit, and delete medication schedules with dosage, times, start date, and end date.
--Upcoming Medications--:
Displays upcoming medications with times and allows users to mark them as taken.
--History Tracking--:
Tracks the medication history and marks the medication as taken.
--Notifications--:
Sends notifications when it’s time to take the medication and allows for flexibility to take the medication 1 hour before or after the scheduled time.
--Scheduler--:
The scheduler continues to show upcoming medications until the end date is reached.
--Mark as Taken--:
Users can mark medications as taken on the upcoming and history tabs.

----------------------------------

2. Technology Stack:

Frontend:
React: used for the web application.
Material-UI: A popular React UI framework for creating beautiful and responsive user interfaces.
Axios: Promise-based HTTP client for making API requests to the backend.

Backend:
Node.js: JavaScript runtime environment for building scalable network applications.
Express.js: Web application framework for Node.js to handle routing, middleware, and HTTP requests.
JWT (JSON Web Tokens): A compact and self-contained way to securely transmit information between the frontend and backend, used for user authentication.
Bcrypt: A library for hashing passwords to secure user authentication.
Push Notifications: Libraries or services such as Firebase Cloud Messaging (FCM) to handle push notifications.

Databases:
MongoDB: NoSQL database used to store user data, medications, schedules, and history.
Mongoose: ODM (Object Data Modeling) library for MongoDB and Node.js, providing a straight-forward way to interact with MongoDB.
-------------------------------------

3. Prerequisite
Ensure that the following are installed:
  1. Node js
  2. MongoDB
  3. Vs code


4. How to run this :
  1. Create a folder name medication_schedule_manager. And move to this folder and whether pull or download the repository under that folder
  2. Express and Mongoose install: npm install express mongoose
  3. Axios install(Command): npm install axios
  4. Install React-Select(command) : npm install react-select
  5. Install Material-UI: npm install @mui/material @emotion/react @emotion/styled
  6. npm install axios @mui/material @emotion/react @emotion/styled react-select
  7. Install Cors : npm install express cors
  8. npm install @mui/material axios
  9. npm install express mongoose bcrypt jsonwebtoken cors body-parser dotenv axios
  10. npm install --save-dev @babel/plugin-proposal-private-property-in-object
After Installing all this dependency
  1. Open the terminal(path where the project is stored)
  2. Move to backend (cd backend)
  3. Run this Command (node server.js)
  4. To Run the frontend Open the terminal(path where the project is stored You should see package.js)
  5. Run the Command (npm start)

After performing this step, the App should work Properly
Ensure that  MongoDB installed locally or have access to a MongoDB cloud instance. 
Also Ensure that MongoDB connection is mongodb://localhost:27017/medicationDB
The server will start in port 5000
The React will start in port 3000

Output Should be Visible in port http://localhost:3000








