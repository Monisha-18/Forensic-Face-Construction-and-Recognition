import React, { useRef, useState } from "react";
import backgroundImage from "./elements/background_recognize.jpg"; // Adjust the path as necessary

const Recognize = () => {
    const fileInputRef = useRef(null);
    const [uploading, setUploading] = useState(false);

    const handleRecognize = async () => {
        try {
            const response = await fetch("http://localhost:5000/run-recognition");
            const data = await response.json();
            alert(data.message || "Recognition process started!");
        } catch (error) {
            console.error("Error:", error);
            alert("Failed to start recognition.");
        }
    };

    const handleImage = async (event) => {
        const file = event.target.files[0];
        if (!file) return;
    
        const formData = new FormData();
        formData.append("file", file);
    
        try {
            setUploading(true);
            const response = await fetch("http://localhost:5000/match", {
                method: "POST",
                body: formData,
            });
            const data = await response.json();
            console.log("Response from backend:", data);
            alert(`Best Match: ${data.matched_photo}\nSimilarity: ${data.similarity_score}`);
        } catch (error) {
            console.error("Upload error:", error);
            alert("Failed to match image.");
        } finally {
            setUploading(false);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.overlay} />
            <div style={styles.content}>
                <h2>Recognize Image/Video</h2>
                <button onClick={handleRecognize} className="btn btn-primary me-2">Start Recognition for video</button>
                <br /><br />
                <button className="btn btn-primary me-2" onClick={() => fileInputRef.current.click()} disabled={uploading}>
                    {uploading ? "Uploading..." : "Start Recognition for image"}
                </button>
        </div>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleImage}
                accept="image/*"
                style={{ display: "none" }}
            />
        </div>
    );
};
const styles = {
    container: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
    },
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.6)", // Adjust the alpha for dullness
        zIndex: 1,
    },
    content: {
        position: "relative",
        zIndex: 2,
        textAlign: "center",
        color: "white",
        padding: "2rem",
        borderRadius: "10px",
    },
    buttonContainer: {
        marginTop: "20px",
        display: "flex",
        gap: "20px",
    },
    button: {
        padding: "12px 24px",
        fontSize: "16px",
        backgroundColor: "#5e60ce", // Change this to your preferred color
        border: "none",
        borderRadius: "6px",
        color: "#fff",
        cursor: "pointer",
    },
};

export default Recognize;