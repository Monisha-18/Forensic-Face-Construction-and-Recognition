---

# 🕵️‍♀️ Interactive Forensic Face Sketch Construction and Recognition System

> 🔍 A web application for constructing facial composites and identifying suspects in real-time using live surveillance footage.

---

## 📌 Project Summary

This project bridges the gap between traditional forensic sketching and modern AI recognition systems. It empowers law enforcement to:

* Build realistic face sketches using an intuitive drag-and-drop interface.
* Match sketches with real-world suspects using deep learning (CNN).
* Identify individuals in real-time using CCTV or webcam video feeds.

---

## ✨ Key Features

* 🎨 **Sketch Builder**: Interactive canvas to create composite faces with no artistic skill required.
* 🧠 **Face Recognition**: Deep CNN model compares sketches to real photos.
* 🎥 **Live Detection**: Recognize suspects from video streams using OpenCV.
* 🛡️ **Secure Access**: Role-based login for law enforcement and admins.
* 🚀 **Fast & Scalable**: Optimized for quick detection and future upgrades.

---

## 🛠️ Technology Stack

**Frontend**:
`React.js`, `HTML5`, `CSS3`, `Bootstrap`

**Backend**:
`Flask`, `Python`

**AI / ML**:
`TensorFlow`, `Keras`, `OpenCV`

**Database**:
`MongoDB`

**Tools**:
`Postman`, `Jupyter Notebook`, `Git`, `VS Code`

---

## ⚙️ How to Run the Project

🖥 **Requirements**:

* Python 3.9+
* Node.js & npm
* MongoDB

🛠 **Setup**:

1. Clone this repo:

   ```
   git clone https://github.com/Monisha-18/Forensic-Face-Construction-and-Recognition.git
   cd Forensic-Face-Construction-and-Recognition
   ```

2. Open 4 terminals and run the following:

   * **Terminal 1: Backend API**

     ```
     cd backend
     npm init -y
     npm start
     ```

   * **Terminal 2: Python Server**

     ```
     cd backend
     python server.py
     ```

   * **Terminal 3: Image Recognition**

     ```
     cd backend
     python image.py
     ```

   * **Terminal 4: Frontend App**

     ```
     cd frontend
     npm install
     npm start
     ```

3. Configure your MongoDB URI in a `.env` file.

---

## 🧪 Real-world Scenarios

🔸 **Suspect Sketching**
Officers build composite sketches using witness descriptions.

🔸 **Database Matching**
AI compares the sketch with known criminal images.

🔸 **Live Surveillance**
Webcam/CCTV scans crowd and highlights matching faces in real-time.

---

## 📸 Sample Screens

* 🖼️ Sketch Construction Interface
* 🔍 CNN Model Match Results
* 🎥 Live Face Detection Feed

(*Add screenshots or a demo GIF here!*)

---

## 📈 Results

* ⚡ Response Time: < 2 seconds (live detection)
* 🎯 Accuracy: \~89% on CUFS dataset
* 🌒 Works in various lighting conditions and with occlusions

---

## 🚧 Future Scope

* 📱 Mobile version for sketching and recognition on-the-go
* ☁️ Cloud-based deployment with scalable architecture
* 🧠 Use of GANs to convert sketches to photo-realistic images
* 🕵️ Liveness detection to prevent spoofing attacks
* 📊 Report generation for forensic audits

---

## 👨‍💻 Developed By

| Name            | LinkedIn                                                      |
| --------------- | ------------------------------------------------------------- |
| Asfiya Firdouse | [Asfiya on LinkedIn](https://linkedin.com/in/asfiyafir)       |
| Monisha Murthy  | [Monisha on LinkedIn](https://linkedin.com/in/monisha-murthy) |

---
