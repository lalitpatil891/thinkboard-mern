# 🧠 ThinkBoard - MERN Stack Project

🔗 **Live Demo:** [https://thinkboard-mern-nvhb.onrender.com/](https://thinkboard-mern-nvhb.onrender.com/)  

---

## 📌 Overview

**ThinkBoard** is a minimalist note-taking web app powered by the **MERN stack (MongoDB, Express, React, Node.js)**. It enables users to **create**, **view**, and **delete** personal notes instantly in a beautiful and user-friendly interface.

It also includes essential features like **rate limiting** for backend API protection and **real-time toasts** for smooth feedback using `react-hot-toast`.

---

## 🚀 Features

- 📝 Create and store notes
- 📋 View all saved notes
- 🗑️ Delete notes
- 🔐 **Rate limiting** to prevent API abuse
- 🔔 Real-time feedback with **React Hot Toast**
- 💡 Clean and responsive UI
- 🌐 Fully deployed with **Render**

---

## 🛠️ Tech Stack

### **Frontend**
- React.js
- Tailwind CSS
- Axios

### **Backend**
- Node.js
- Express.js
- MongoDB (via Mongoose)

### **Deployment**
- Render (both client and server)

---

## 📦 Installation & Setup

### Prerequisites
- Node.js
- npm or yarn
- MongoDB (local or Atlas)

### Steps

```bash
# Clone the repository
git clone https://github.com/lalitpatil891/thinkboard-mern.git
cd thinkboard-mern

# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install
````

### Create `.env` in `/server` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### Run the project:

```bash
# Terminal 1 - Run Backend
cd server
npm start

# Terminal 2 - Run Frontend
cd client
npm start
```

Now visit: [http://localhost:3000](http://localhost:3000)

---

## 📁 Folder Structure

```
thinkboard-mern/
├── client/       # React frontend
│   └── ...       
├── server/       # Express backend
│   └── ...
└── README.md
```

---

## 📸 Screenshots

*(Add images here if available. I can help format or include them.)*

---

## 📄 License

Licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

Made with 💙 by **[Lalit Patil](https://github.com/lalitpatil891)**

```
