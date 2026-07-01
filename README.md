# 🚗 Car Rental Application

A full-stack car rental platform built with React, Node.js, and MongoDB.

**[🌐 Live Project](https://car-rental-seven-self.vercel.app/)**

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Environment Variables](#environment-variables)

---

## ✨ Features

- Browse and book rental cars
- User authentication with JWT
- Secure image management with ImageKit
- Responsive design
- Real-time booking updates

---

## 🛠 Tech Stack

**Frontend:**
- React + Vite
- Tailwind CSS (or your CSS framework)

**Backend:**
- Node.js + Express
- MongoDB
- JWT Authentication
- ImageKit for image storage

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v14+)
- MongoDB account
- ImageKit account

### Clone Repository
```bash
git clone https://github.com/pushkar-urode/Car-Rental.git
cd Car-Rental
```

### Backend Setup
```bash
cd backend
npm install
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

---

## 🔐 Environment Variables

### Backend (.ENV)
```env
MONGODB_URI=<your_mongodb_connection_string>
JWT_SECRET=<your_jwt_secret>
IMAGEKIT_PUBLIC_KEY=<your_imagekit_public_key>
IMAGEKIT_PRIVATE_KEY=<your_imagekit_private_key>
IMAGEKIT_URL_ENDPOINT=<your_imagekit_endpoint>
```

### Frontend (.ENV)
```env
VITE_CURRENCY=$
VITE_BASE_URL=<your_backend_url>
```

---

## 📝 License

This project is open source and available under the MIT License.
