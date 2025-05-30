
```markdown
# 🕵️‍♂️ Interactive Forensic Face Sketch Construction and Recognition System

A hybrid AI-driven platform that empowers law enforcement with a powerful drag-and-drop sketch tool and real-time facial recognition from surveillance video streams.

---

## 📌 Overview

Forensic sketching is often limited by reliance on trained artists and incompatibility with modern AI-based systems. This project bridges that gap by providing:

- A **React.js-based drag-and-drop interface** for creating facial composites.
- A **deep learning recognition model (CNN)** to match sketches with real facial photos.
- **Real-time CCTV surveillance integration** using OpenCV for live suspect identification.

---

## 🎯 Features

- ✏️ Drag-and-Drop Sketch Tool – Build facial composites with predefined features.
- 🧠 CNN-Based Matching – Identify suspects by comparing sketches with real images.
- 📹 Real-Time Surveillance – Recognize suspects live from webcam/CCTV input.
- 🔒 Secure Access – Role-based authentication for sensitive modules.
- ⚡ Fast and Scalable – Optimized for low latency and future integration with larger databases.

---

## 🛠️ Tech Stack

| Layer     | Technologies                           |
|-----------|----------------------------------------|
| Frontend  | React.js, HTML5, CSS3, Bootstrap       |
| Backend   | Python, Flask                          |
| AI/ML     | TensorFlow, Keras, OpenCV              |
| Database  | MongoDB                                |
| Tools     | VS Code, Postman, Git, Jupyter Notebook|

---

## 📁 Project Structure

```

forensic-face-recognition/
├── frontend/                  # React-based UI
├── backend/                   # Flask API with AI models
│   ├── recognition/           # CNN models & inference code
│   └── utils/                 # Helper functions
├── database/                  # MongoDB config
├── models/                    # Pretrained weights & model files
├── requirements.txt
└── README.md

````

---

## 🚀 Getting Started

### Prerequisites

- Python 3.9+
- Node.js & npm
- MongoDB
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Monisha-18/Forensic-Face-Construction-and-Recognition.git
   cd Forensic-Face-Construction-and-Recognition
````

2. **To run the code**

   ```bash

   Open 4 terminals

   Terminal 1 - npm init -y (for backend)
                cd backend
                npm start
   Terminal 2 - cd backend
                python server.py
   Terminal 3 - cd backend
                python image.py
   Terminal 4 - npm i (for frontend)
                cd frontend
                npm start
   ```


3. **MongoDB Setup**

   * Launch a local MongoDB instance or use a cloud cluster.
   * Configure the MongoDB URI in the backend `.env` file.

---


## 🧬 Sample Use Cases

1. **Sketch Construction** – Build a face using drag-and-drop features.
2. **Sketch Matching** – Use CNN to compare the sketch with a real-face dataset.
3. **Live Feed Recognition** – Get real-time alerts from webcam/CCTV feeds.

---

## 📊 Results

* Real-time recognition 
* Matching Accuracy (CUFS dataset): \~89%
* Effective even in low-light and occluded environments

---

## 🔮 Future Enhancements

* 📱 Mobile App integration
* ☁️ Cloud deployment (AWS, Azure)
* 🧠 Advanced models (FaceNet, GAN)
* 🕵️ Liveness detection
* 📜 Audit trails for law enforcement review

---

## 👩‍💻 Authors

* **Asfiya Firdouse** – [LinkedIn](https://www.linkedin.com/in/asfiyafir)
* **Monisha Murthy** – [LinkedIn](https://www.linkedin.com/in/monisha-murthy)

---

