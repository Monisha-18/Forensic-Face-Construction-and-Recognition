from flask import Flask, jsonify, request
from flask_cors import CORS
import subprocess
import sys
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/run-recognition', methods=['GET'])
def run_video_recognition():
    try:
        print("Video Recognition endpoint hit!")

        python_path = sys.executable
        script_path = os.path.join(os.getcwd(), "recognize_video.py")

        result = subprocess.run([python_path, script_path], check=True, capture_output=True, text=True)

        print("Video Recognition Output:", result.stdout)
        return jsonify({"message": "Video recognition started!", "output": result.stdout}), 200

    except subprocess.CalledProcessError as e:
        print("Error running recognize_video.py:", e.stderr)
        return jsonify({"error": e.stderr}), 500


@app.route('/match', methods=['POST'])
def run_image_recognition():
    try:
        print("Image Recognition endpoint hit!")

        # Save the uploaded image temporarily
        if 'file' not in request.files:
            return jsonify({"error": "No file uploaded"}), 400

        file = request.files['file']
        upload_dir = os.path.join(os.getcwd(), "Recognition part", "uploads")
        os.makedirs(upload_dir, exist_ok=True)
        file_path = os.path.join(upload_dir, file.filename)
        file.save(file_path)

        # Call image.py or pass the image to a recognizer
        python_path = sys.executable
        script_path = os.path.join(os.getcwd(), "image.py")

        result = subprocess.run([python_path, script_path], check=True, capture_output=True, text=True)

        print("Image Recognition Output:", result.stdout)
        return jsonify({"message": "Image recognition started!", "output": result.stdout}), 200

    except subprocess.CalledProcessError as e:
        print("Error running image.py:", e.stderr)
        return jsonify({"error": e.stderr}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)