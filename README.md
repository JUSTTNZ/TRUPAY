# TRUPAY

## Project Overview
TRUPAY is a user-friendly, secure, and efficient platform designed to simplify the process of purchasing textbooks for students. By eliminating the need for long bank queues, students can browse, pay for, and track their textbook purchases online with ease.

---

## Goal
The primary goal of TRUPAY is to provide a seamless experience for students to:

- Browse available textbooks.
- Make secure online payments for textbooks.
- Track purchase history and receive instant payment confirmations.

---

## Key Features

### For Students:
1. **Authentication:**
   - Secure login and signup using email or phone.

2. **Browse Textbooks:**
   - View available textbooks with detailed information including title, price, author, and stock availability.

3. **Make Payments:**
   - Add books to a shopping cart and proceed to checkout.
   - Secure online payment integration using platforms like Paystack or Stripe.

4. **Order History:**
   - View previously purchased textbooks and download receipts.

### For Admin:
1. **Manage Textbooks:**
   - Add, edit, or remove books from the inventory.

2. **Track Orders:**
   - View all student orders and their payment statuses.

---

## System Architecture

### Frontend:
- **Technology:** React.js for dynamic and responsive UI.
- **Key Pages:**
  1. Login/Signup Page
  2. Dashboard to browse textbooks
  3. Payment/Checkout Page
  4. Order History Page
  5. Admin Panel

### Backend:
- **Technology:** Node.js and Express.js
- **APIs for:**
  1. User authentication (using JWT tokens).
  2. Textbook data management (CRUD operations).
  3. Payment processing.
  4. Order management.

### Database:
- **Technology:** MongoDB
- **Data Storage:**
  1. User details (students and admins).
  2. Textbook inventory.
  3. Orders and payment records.

### Payment Gateway:
- Integration with Paystack or Stripe for secure online payments.

---

## Step-by-Step Plan

### Phase 1: Planning & Design
- Finalize project requirements and use cases.
- Create wireframes for the frontend interface.
- Design the database schema.

### Phase 2: Development
1. **Frontend Development:**
   - Build UI components for all pages.
   - Set up React Router for smooth navigation.
   - Connect the frontend to backend APIs.

2. **Backend Development:**
   - Set up database schemas for users, textbooks, and orders.
   - Develop APIs for authentication, book management, and payments.

3. **Payment Integration:**
   - Integrate Paystack/Stripe into the payment workflow.

### Phase 3: Testing
- Perform comprehensive testing:
  - Unit tests.
  - API tests.
  - End-to-end tests.

### Phase 4: Deployment
- Deploy the frontend on platforms like Netlify or Vercel.
- Deploy the backend on services like Heroku or AWS.
- Use MongoDB Atlas for hosting the database.

### Phase 5: Post-Launch
- Monitor the system for bugs or performance issues.
- Collect feedback to implement future improvements.

---

## Team Responsibilities

### 1. Frontend Developers:
- Build and design all UI components.
- Ensure the application is mobile-friendly and responsive.

### 2. Backend Developers:
- Develop APIs and connect them to the database.
- Implement payment gateway integration.

### 3. Project Lead (You):
- Ensure the team stays on track with the project timeline.
- Provide technical guidance and resolve any blockers.

---

## Technology Stack

### Frontend:
- React.js
- TailwindCSS

### Backend:
- Node.js
- Express.js

### Database:
- MongoDB

### Payment Gateway:
- Paystack or Stripe

### Deployment:
- Frontend: Netlify/Vercel
- Backend: Heroku/AWS
- Database: MongoDB Atlas

---

## How to Run the Project

1. **Clone the Repository:**
   ```bash
   git clone <repository-url>
