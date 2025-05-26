from __future__ import division, print_function
import os
import numpy as np
import cv2
from flask import Flask, request, jsonify
from flask_cors import CORS
from tensorflow.keras.models import load_model
from tensorflow.keras.applications.vgg16 import preprocess_input
from sklearn.metrics.pairwise import cosine_similarity

# Disable OneDNN optimization for potential compatibility
os.environ["TF_ENABLE_ONEDNN_OPTS"] = "0"

# Flask setup
app = Flask(__name__)
CORS(app)

# Paths
BASE_DIR = os.getcwd()
PHOTOS_FOLDER = os.path.join(BASE_DIR, 'Recognition part', 'photos')
UPLOAD_FOLDER = os.path.join(BASE_DIR, 'Recognition part', 'uploads')
MODEL_PATH = os.path.join(BASE_DIR, 'MP.h5')

# Load model
model = load_model(MODEL_PATH, compile=False)
model.make_predict_function()
print("Model loaded successfully")

def extract_features(image_path):
    """Extract features from an image using the model."""
    image = cv2.imread(image_path)
    if image is None:
        raise ValueError(f"Could not read image at path: {image_path}")
    image = cv2.resize(image, (224, 224))
    image = np.expand_dims(image, axis=0)
    image = preprocess_input(image)
    features = model.predict(image)
    return features.flatten()

@app.route('/')
def index():
    print("Root route accessed")
    return 'Flask server is running! Use /match to POST an image for recognition.'

@app.route('/match', methods=['POST'])
def match_sketch():
    try:
        if 'file' not in request.files:
            return jsonify({'error': 'No file uploaded'}), 400

        file = request.files['file']
        if file.filename == '':
            return jsonify({'error': 'No file selected'}), 400

        # Save uploaded image
        os.makedirs(UPLOAD_FOLDER, exist_ok=True)
        upload_path = os.path.join(UPLOAD_FOLDER, file.filename)
        file.save(upload_path)

        # Extract features from uploaded image
        sketch_features = extract_features(upload_path)

        # Compare against database images
        similarities = []
        if not os.listdir(PHOTOS_FOLDER):
            return jsonify({'error': 'No images found in database for matching.'}), 500

        for img_name in os.listdir(PHOTOS_FOLDER):
            img_path = os.path.join(PHOTOS_FOLDER, img_name)
            db_features = extract_features(img_path)
            similarity = cosine_similarity([sketch_features], [db_features])[0][0]
            similarities.append((img_name, similarity))

        most_similar = max(similarities, key=lambda x: x[1])

        return jsonify({
            'matched_photo': most_similar[0],
            'similarity_score': float(most_similar[1])
        })

    except Exception as e:
        print("Error during matching:", str(e))
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)