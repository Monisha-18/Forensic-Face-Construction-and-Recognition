import React, { useState, useRef } from "react";
import { useDrop, useDrag } from "react-dnd";
import "./Canvas.css";

function Canvas() {
    const [droppedItems, setDroppedItems] = useState({});
    const canvasRef = useRef(null);

    const [{ isOver }, drop] = useDrop(() => ({
        accept: ["eye", "hair", "head", "lips", "eyebrow", "nose", "mustache"],
        drop: (item, monitor) => {
            const canvasRect = canvasRef.current.getBoundingClientRect();
            const clientOffset = monitor.getClientOffset();

            const getStyleForType = (type) => {
                switch (type) {
                    case "head": return { width: 280, height: 280 };
                    case "hair": return { width: 250, height: 450 };
                    case "eye": return { width: 150, height: 50 };
                    case "eyebrow": return { width: 150, height: 50 };
                    case "lips": return { width: 70, height: 50 };
                    case "nose": return { width: 80, height: 50 };
                    default: return { width: 100, height: 100 };
                }
            };

            const style = getStyleForType(item.type);
            const x = clientOffset.x - canvasRect.left - style.width / 2;
            const y = clientOffset.y - canvasRect.top - style.height / 2;

            setDroppedItems((prevItems) => ({
                ...prevItems,
                [item.type]: { ...item, x, y, width: style.width, height: style.height },
            }));
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    const DraggableItem = ({ id, image, type, x, y, width, height }) => {
        const [, drag] = useDrag(() => ({
            type,
            item: { id, image, type, x, y },
        }));

        return (
            <img
                ref={drag}
                src={image}
                alt={type}
                className="draggable-item"
                style={{
                    position: "absolute",
                    left: x,
                    top: y,
                    width: `${width}px`,
                    height: `${height}px`,
                    objectFit: "contain",
                    cursor: "move",
                }}
            />
        );
    };
    const resetCanvas = () => {
        setDroppedItems({});
    };
    const saveCanvas = async () => {
        const canvasContainer = canvasRef.current;
        if (!canvasContainer) {
          console.error("Canvas container element not found.");
          return;
        }
    
        const tempCanvas = document.createElement("canvas");
        tempCanvas.width = canvasContainer.offsetWidth;
        tempCanvas.height = canvasContainer.offsetHeight;
    
        const ctx = tempCanvas.getContext("2d");
        if (!ctx) {
          console.error("2D context not available for temporary canvas.");
          return;
        }
    
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);
    
        const loadImage = (src) =>
          new Promise((resolve, reject) => {
            const img = new Image();
            img.crossOrigin = "anonymous"; // Important for loading images from different origins
            img.onload = () => resolve(img);
            img.onerror = (e) => {
              console.error("Error loading image:", src, e);
              reject(new Error(`Failed to load image: ${src}`));
            };
            img.src = src;
          });
    
        for (const item of Object.values(droppedItems)) {
          try {
            const img = await loadImage(item.image);
            // --- START OF ASPECT RATIO CORRECTION LOGIC ---
            const imageAspectRatio = img.naturalWidth / img.naturalHeight;
            const targetAspectRatio = item.width / item.height;

            let drawWidth = item.width;
            let drawHeight = item.height;
            let drawX = item.x;
            let drawY = item.y;

            if (imageAspectRatio > targetAspectRatio) {
                // Image is wider than the target box, scale based on target width
                drawHeight = item.width / imageAspectRatio;
                drawY = item.y + (item.height - drawHeight) / 2; // Center vertically
            } else {
                // Image is taller than or same aspect as target box, scale based on target height
                drawWidth = item.height * imageAspectRatio;
                drawX = item.x + (item.width - drawWidth) / 2; // Center horizontally
            }
            // --- END OF ASPECT RATIO CORRECTION LOGIC ---

            ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
          } catch (error) {
            console.error(`Could not draw image ${item.image}:, error`);
          }
        }
    
        const link = document.createElement("a");
        link.href = tempCanvas.toDataURL("image/png");
        link.download = "canvas_image.png"; 
    
        document.body.appendChild(link); 
        link.click();
        document.body.removeChild(link); 
      };

    return (
        <div>
            <div style={{
                backgroundColor: "#f9f9ff",
                border: "1px solid #ccc",
                borderRadius: "10px",
                padding: "20px",
                marginBottom: "20px",
                maxWidth: "1200px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.05)"
            }}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
                    <h2 style={{ margin: 0, color: "#333", fontSize: "1.5rem" }}>How to Use the Face Assembler</h2>
                </div>
                <ol style={{ paddingLeft: "20px", lineHeight: "1.7", color: "#444" }}>
                    <li><strong>Select</strong> a facial feature category from the top (e.g., Head, Eyes, Hair).</li>
                    <li><strong>Drag and drop</strong> elements from the right into the canvas area.</li>
                    <li><strong>Move</strong> elements around after dropping them into the canvas.</li>
                </ol>
            </div>

            <div
                ref={(node) => {
                    drop(node);
                    canvasRef.current = node;
                }}
                className="canvas"
                style={{
                    border: "3px solid #63a4ff",
                    width: "1200px",
                    height: "600px",
                    position: "relative",
                    backgroundColor: isOver ? "#f0f0f0" : "white",
                    overflow: "hidden",
                }}
            >
                {Object.values(droppedItems).map((item) => (
                    <DraggableItem
                        key={item.type}
                        id={item.id}
                        image={item.image}
                        type={item.type}
                        x={item.x}
                        y={item.y}
                        width={item.width}
                        height={item.height}
                    />
                ))}
            </div>

            <div class="col-md-6 mx-auto" style={{ marginTop: "10px" }}>
                <button class="btn btn-danger" onClick={resetCanvas} style={{ marginRight: "10px", padding: "8px 16px", cursor: "pointer" }}>
                    Reset
                </button>
                <button class="btn btn-success" onClick={saveCanvas} style={{ padding: "8px 16px", cursor: "pointer" }}>
                    Save as Image
                </button>
            </div>
        </div>
    );
}

export default Canvas;