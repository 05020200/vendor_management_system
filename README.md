# 💼 Vendor Management System (VMS)

A full-stack Vendor Management System designed to manage vendors, handle bulk data entry, and process payments efficiently. The system follows a clean architecture with role-based access control and a modern, user-friendly interface.

---

## 🚀 Features

### 🔐 Role-Based Access Control (RBAC)

* **Admin**

  * Add and manage workers
  * View system overview and vendor data (read-only)

* **Worker**

  * Add vendors
  * Upload vendor data in bulk (CSV)
  * Handle vendor payments

---

### 📊 Dashboard

* Modern and responsive dashboard UI
* Displays vendor details:

  * Vendor ID
  * Vendor Name
  * GSTIN
  * Payment Status
* Admin has read-only access
* Workers can perform operations

---

### ➕ Vendor Management

* Add vendor with essential details:

  * Vendor Name
  * Phone Number
  * Email ID
  * GSTIN
  * Address
  * City

---

### 📂 Bulk Upload

* Upload vendor data using CSV files
* Drag-and-drop file upload interface
* Displays upload status and feedback

---

### 💰 Payment Management

* Workers can process vendor payments
* Input fields:

  * Vendor ID
  * Amount
* Displays payment confirmation

---

## 🛠️ Tech Stack

* **Frontend:** React (JavaScript) + Vite
* **Styling:** Tailwind CSS
* **Routing:** React Router
* **Backend:** (Node.js / Flask – depending on implementation)
* **Database:** (MySQL / MongoDB – configurable)

---

## 🏗️ System Architecture

The application follows a layered architecture:

* UI Layer (React Frontend)
* Controller Layer
* Service Layer
* Repository Layer
* Database Layer

This ensures separation of concerns, scalability, and maintainability.

---

## 📦 Installation & Setup

1. Clone the repository:

```bash
git clone https://github.com/HarshiniUdayakumar/vendorflow-elevated.git
cd vendorflow-elevated
```

2. Install dependencies:

```bash
npm install
```

3. Run the application:

```bash
npm run dev
```

4. Open in browser:

```
http://localhost:8080
```

---

## 🎯 Key Highlights

* Clean and modern SaaS-style UI
* Proper role-based access control
* Structured full-stack architecture
* Realistic vendor and payment management features
* Simple and intuitive user experience

---

## 🔮 Future Enhancements

* Authentication and authorization system
* API integration with backend services
* Advanced filtering and search
* Reporting and analytics dashboard
* Deployment and production optimization
