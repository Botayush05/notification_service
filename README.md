# Notification Service 📩

This is a simple notification service built using Node.js, Express, and MongoDB.

## 🚀 Features

- Send notifications (Email, SMS, In-App)
- View all notifications for a user
- Retry mechanism for failed notifications
- (Optional) Queue support can be integrated

## 📦 Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JavaScript

---

## 🔗 API Endpoints

### 1. Send a Notification

**POST** `/api/notifications`

**Request Body:**
```json
{
  "userId": "123",
  "type": "email",   // "email", "sms", or "in-app"
  "content": "Welcome to Pepsales!"
}
