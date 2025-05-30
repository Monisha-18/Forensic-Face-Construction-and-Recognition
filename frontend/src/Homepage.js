import React from "react";
import { useNavigate } from "react-router-dom";
import background from "./elements/background_homepage.jpg"; // ✅ Correct path

function HomePage() {
    const navigate = useNavigate();

    return (
        <div style={{ 
            ...styles.container, 
            backgroundImage: `url(${background})`, 
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat"
        }}>
            <h1 style={styles.heading}>Choose an Option</h1>
            <div style={styles.buttonContainer}>
                <button style={styles.button} onClick={() => navigate("/dashboard")}>
                    Construct Face
                </button>
                <button style={styles.button} onClick={() => navigate("/recognize")}>
                    Recognize Image/Video
                </button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        color: "white", // Optional: makes text visible over dark background
    },
    heading: {
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)", // Optional: adds contrast
    },
    buttonContainer: {
        marginTop: "20px",
        display: "flex",
        gap: "20px",
    },
    button: {
    padding: "15px 30px",
    fontSize: "18px",
    border: "2px solid #FFD700", // Gold/Yellow border
    borderRadius: "8px",
    cursor: "pointer",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent black
    color: "#FFD700", // Yellow text
    fontWeight: "bold",
    textShadow: "1px 1px 2px #000",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.6)",
    transition: "0.3s ease",
    },
};

export default HomePage;
