Fastor CRM Node.js Backend
Overview
This project is a backend REST API for a Customer Relationship Management (CRM) system, developed for the Fastor Node.js Developer assignment.
It allows company employees/counselors to manage and claim client inquiries (“leads”) using secure JWT authentication and MongoDB as the database.

Key Features:

Employee register/login with password hashing and JWT authentication

Public client enquiry (lead) submission form (no login required)

List public (unclaimed) leads; claim leads (assigns private ownership)

List private (claimed) leads for the logged-in counselor

Easy RESTful API structure built with Express and Mongoose

Tech Stack
Node.js

Express.js

MongoDB (via Mongoose)

JWT authentication (jsonwebtoken)

Bcrypt password hashing (bcryptjs)

dotenv for environment config



## 🗂️ Project Structure



Lead-Management-System/
│
├── config/
│   └── db.js                 # MongoDB connection setup
│
├── controllers/
│   ├── authController.js     # Handles register and login logic
│   └── leadController.js     # Handles lead CRUD & claim logic
│
├── middleware/
│   └── authMiddleware.js     # JWT authentication middleware
│
├── models/
│   ├── userModel.js          # User schema
│   └── leadModel.js          # Lead schema
│
├── routes/
│   ├── authRoutes.js         # Routes for authentication
│   └── leadRoutes.js         # Routes for lead operations
│
├── .env                      # Environment variables
├── server.js                 # Application entry point
├── package.json              # Project dependencies
└── README.md                 # Project documentation


---

## ⚙️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Mongoose ODM)  
- **Authentication:** JSON Web Token (JWT)  
- **Validation:** Express Validator  
- **Testing Tools:** Postman / Thunder Client

---

## 🧰 Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/en/download/) (v16+)
- [MongoDB](https://www.mongodb.com/try/download/community)
- Postman or Thunder Client (for API testing)

---

## 🧩 Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone <repository_url>
   cd Lead-Management-System


2. Install Dependencies

   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the project root and add the following:

   ```env
   PORT=4000
   MONGO_URI=mongodb://localhost:27017/lead_management
   JWT_SECRET=your_jwt_secret_key
   ```

4. **Start the Server**

   ```bash
   npm start
   ```

   Server will start on **[http://localhost:4000](http://localhost:4000)**

5. **Database Connection**
   Ensure MongoDB is running locally or connected via cloud (MongoDB Atlas).

---

## 📡 API Endpoints

### 🔐 Authentication Routes

| Method | Endpoint             | Description             | Body                                                                    |
| ------ | -------------------- | ----------------------- | ----------------------------------------------------------------------- |
| POST   | `/api/auth/register` | Register a new user     | `{ "name": "John", "email": "john@example.com", "password": "123456" }` |
| POST   | `/api/auth/login`    | Login and get JWT token | `{ "email": "john@example.com", "password": "123456" }`                 |

**Response Example (Login):**

```json
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI..."
}
```

Use this token in **Authorization Header** as:

```
Authorization: Bearer <token>
```

---

### 🧾 Lead Routes (Protected)

| Method | Endpoint               | Description         | Body / Params                                                                  |
| ------ | ---------------------- | ------------------- | ------------------------------------------------------------------------------ |
| GET    | `/api/leads`           | Get all leads       | -                                                                              |
| POST   | `/api/leads`           | Create a new lead   | `{ "name": "Client A", "email": "client@example.com", "phone": "9999999999" }` |
| PUT    | `/api/leads/:id`       | Update lead details | JSON fields to update                                                          |
| DELETE | `/api/leads/:id`       | Delete a lead       | -                                                                              |
| PUT    | `/api/leads/claim/:id` | Claim a lead        | -                                                                              |

---

## 🧪 Testing with Postman

1. **Register a new user** → Copy the JWT token from response.
2. **Login** → Retrieve the token again if needed.
3. In Postman, go to the **Authorization tab** and select:

   ```
   Type: Bearer Token
   Token: <paste your JWT token>
   ```
4. Now test all `/api/leads` routes using this token.

---

## 🧱 Example `.env` File

```env
PORT=4000
MONGO_URI=mongodb://localhost:27017/lead_management
JWT_SECRET=mySuperSecretKey123
```

---

## 🧹 Scripts

| Command       | Description                                      |
| ------------- | ------------------------------------------------ |
| `npm start`   | Run the server                                   |
| `npm run dev` | Run the server in development mode using nodemon |

---

## 🛠️ Troubleshooting

* **Error:** `MongoNetworkError: failed to connect`
  ➤ Check if MongoDB is running or verify your connection string.

* **Error:** `Unauthorized`
  ➤ Ensure you have passed the correct JWT token in the `Authorization` header.

* **Error:** `Cannot GET /api/...`
  ➤ Check if your server started successfully and routes are correctly defined.

---

## 🧑‍💻 Author

**Developed by:** [Your Name]
**Role:** Backend Developer
**Email:** [yourname@example.com](mailto:yourname@example.com)

---

## 📜 License

This project is licensed under the **MIT License** – feel free to use and modify it for educational or personal purposes.

