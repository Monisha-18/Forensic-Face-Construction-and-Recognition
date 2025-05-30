````markdown
<!-- Project Banner -->
<p align="center">
  <img src="https://user-images.githubusercontent.com/your-banner-image" alt="Forensic Face Recognition Banner" width="100%" />
</p>

<h1 align="center">🕵️‍♀️ Interactive Forensic Face Sketch Construction and Recognition System</h1>

<p align="center">
  A full-stack AI-powered forensic platform with real-time facial recognition and an intuitive drag-and-drop sketch builder.
</p>

<p align="center">
  <img src="https://img.shields.io/github/license/Monisha-18/Forensic-Face-Construction-and-Recognition?style=flat-square" />
  <img src="https://img.shields.io/github/last-commit/Monisha-18/Forensic-Face-Construction-and-Recognition?style=flat-square" />
  <img src="https://img.shields.io/github/languages/top/Monisha-18/Forensic-Face-Construction-and-Recognition?style=flat-square" />
</p>

---

## 📸 Preview

<p align="center">
  <img src="https://user-images.githubusercontent.com/demo-gif.gif" alt="Demo Preview" width="700"/>
</p>

---

## 📌 Overview

Forensic sketching often relies on skilled artists and lacks real-time digital capabilities. This project bridges that gap using:

- 🧩 A **drag-and-drop UI** for composite sketch creation (React.js)
- 🧠 A **CNN model** for face recognition against real image databases
- 🎥 **Live CCTV feed recognition** using OpenCV and deep learning

---

## 🚀 Features

- 🎨 Drag-and-drop canvas for sketch creation
- 🧠 Deep Learning model for matching sketches with real faces
- 🔍 Real-time suspect recognition via webcam/CCTV
- 💾 MongoDB for persistent face data storage
- 🖥️ Responsive UI for desktop devices

---

## 🛠️ Tech Stack

| Layer      | Technologies                             |
|------------|------------------------------------------|
| Frontend   | React.js, HTML5, CSS3, Bootstrap         |
| Backend    | Flask, Python 3.9+                       |
| AI/ML      | TensorFlow, Keras, OpenCV                |
| Database   | MongoDB                                  |
| Dev Tools  | VS Code, Git, Postman, Jupyter Notebook  |

---

## 🗂️ Project Structure

```bash
forensic-face-recognition/
├── frontend/              # React-based UI
├── backend/               # Flask server + Python logic
│   ├── recognition/       # CNN model + inference logic
│   └── utils/             # Helper scripts
├── database/              # MongoDB config
├── models/                # Pre-trained weights
├── requirements.txt
└── README.md
````

---

## ⚙️ Getting Started

### 🔧 Prerequisites

* Python 3.9+
* Node.js & npm
* MongoDB
* Git

### 🛠️ Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/Monisha-18/Forensic-Face-Construction-and-Recognition.git
   cd Forensic-Face-Construction-and-Recognition
   ```

2. **Run the full system in 4 terminals**

   ```bash
   # Terminal 1
   cd backend
   npm init -y
   npm start

   # Terminal 2
   cd backend
   python server.py

   # Terminal 3
   cd backend
   python image.py

   # Terminal 4
   cd frontend
   npm install
   npm start
   ```

3. **MongoDB Configuration**

   * Start MongoDB locally or use Atlas.
   * Update the `.env` file with your MongoDB URI.

---

## 🧪 Sample Use Cases

* 🖼️ Sketch Construction – Assemble facial features from a parts library
* 🧠 Sketch Matching – CNN matches it against the real photo database
* 🎥 Live Feed – Detect and recognize faces from webcam or CCTV input

---

## 📊 Results

* ⚡ Real-time response 
* 🎯 \~89% matching accuracy (CUFS dataset)
* 🌒 Works even under partial lighting & occlusion

---

## 🚀 Future Enhancements

* 📱 Mobile version for on-the-go facial matching
* ☁️ Cloud hosting for large-scale deployment
* 🧠 Integration with FaceNet or GAN for photorealistic sketch enhancement
* 🧪 Liveness detection to prevent spoofing

---

## 👩‍💻 Authors

* **Asfiya Firdouse** – [LinkedIn](https://www.linkedin.com/in/asfiyafir)
* **Monisha Murthy** – [LinkedIn](https://www.linkedin.com/in/monisha-murthy)

---
