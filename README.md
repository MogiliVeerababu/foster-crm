Fastor CRM Node.js Backend
Project Overview
A backend REST API for a Customer Relationship Management (CRM) system built with Node.js, Express, and MongoDB.
Implements employee/counselor registration, JWT authentication, public lead submission, and private lead management for counselors.
Modular code structure, fully API-driven and ready for extension.

Project Structure
text
fastor-crm/
├── controllers/
│   ├── authController.js      # Logic for register/login
│   └── leadController.js      # Logic for lead operations (submit, claim, list)
├── middlewares/
│   └── authMiddleware.js      # JWT authentication for protected routes
├── models/
│   ├── Employee.js            # Employee/counselor Mongoose schema
│   └── Lead.js                # Lead/enquiry Mongoose schema
├── routes/
│   ├── authRoutes.js          # Employee/counselor API endpoints
│   └── leadRoutes.js          # Lead API endpoints
├── .env                       # Environment variables (NOT in repo)
├── .gitignore                 # Ignore node_modules, .env, others
├── app.js                     # Main server entry point
├── package.json               # Node.js dependencies and scripts
└── README.md                  # Project documentation
Features
Employee Register/Login: Secure registration and login with password hashing and JWT tokens.

JWT Authentication: Protects counselor features; only logged-in users can claim/view leads.

Public Lead Submission: Clients can submit leads without authentication.

Claim & List Leads: Counselors can claim public leads (which become private) and list their own.

MongoDB Storage: Data persistence for employees and leads using Mongoose.

Setup & Installation
Clone the repository

bash
git clone https://github.com/yourusername/fastor-crm.git
cd fastor-crm
Install dependencies

bash
npm install
Create a .env file

text
PORT=4000
MONGODB_URI=your_mongodb_connection_uri
JWT_SECRET=your_secret_key
Start the server

bash
npx nodemon app.js

Use Postman or any API client for interacting with:

POST /api/auth/register - Register employees/counselors

POST /api/auth/login - Login and get JWT

POST /api/leads/submit - Publicly submit leads

GET /api/leads/public - List public, unclaimed leads (JWT required)

POST /api/leads/claim - Claim a lead (JWT required)

GET /api/leads/private - List leads claimed by logged-in counselor (JWT required)