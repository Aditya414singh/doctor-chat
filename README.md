# 🩺 Doctor Chat  
A real-time chat application for doctors and patients, enabling seamless communication.

## 📌 Features
✅ Secure authentication (JWT)  
✅ Real-time chat using **Socket.io**  
✅ View patient records  
✅ Interactive UI with **ReactJS & Tailwind CSS**  
✅ Backend powered by **Node.js, Express.js & MongoDB**  

## 📂 Folder Structure
Doctor-Chat/ │── frontend/ # ReactJS frontend │── backend/ # Node.js & Express backend


## 🚀 Tech Stack
- **Frontend:** ReactJS, Tailwind CSS  
- **Backend:** Node.js, Express.js, MongoDB  
- **Real-time:** Socket.io  
- **Authentication:** JWT  

## 🔧 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/<your-username>/Doctor-Chat.git
cd Doctor-Chat

2️⃣ Setup Backend
cd backend
npm install
npm start  # Runs the backend server
3️⃣ Setup Frontend

cd ../frontend
npm install
npm start  # Runs the frontend React app
🌍 API Endpoints (Backend)
Method	Endpoint	Description
POST	/api/auth/login	User login
POST	/api/auth/register	User registration
GET	/api/patients	Fetch all patients
GET	/api/chat/:id	Get chat messages
📜 Environment Variables
Create a .env file in both frontend & backend and add the required variables.

Backend .env example:

MONGO_URI=aditya_414
JWT_SECRET=123##45@
PORT=5000
