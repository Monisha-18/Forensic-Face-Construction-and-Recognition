import React, { useState } from "react";
import DraggableItem from "./DraggableItem"; // Ensure this path is correct
import "./Sidebar.css"

// Images categorized by type
const imagesByCategory = {
  head: [
    { id: 1, src: "/sketch elements/head/01.png", type: "head" },
    { id: 2, src: "/sketch elements/head/02.png", type: "head" },
    { id: 3, src: "/sketch elements/head/03.png", type: "head" },
    { id: 4, src: "/sketch elements/head/04.png", type: "head" },
    { id: 5, src: "/sketch elements/head/05.png", type: "head" },
    { id: 6, src: "/sketch elements/head/06.png", type: "head" },
    { id: 7, src: "/sketch elements/head/07.png", type: "head" },
    { id: 8, src: "/sketch elements/head/08.png", type: "head" },
    { id: 9, src: "/sketch elements/head/09.png", type: "head" },
    { id: 10, src: "/sketch elements/head/10.png", type: "head" },
  ],
  eyes: [
    { id: 11, src: "/sketch elements/eyes/01.png", type: "eye" },
    { id: 12, src: "/sketch elements/eyes/02.png", type: "eye" },
    { id: 13, src: "/sketch elements/eyes/03.png", type: "eye" },
    { id: 14, src: "/sketch elements/eyes/04.png", type: "eye" },
    { id: 15, src: "/sketch elements/eyes/05.png", type: "eye" },
    { id: 16, src: "/sketch elements/eyes/06.png", type: "eye" },
    { id: 17, src: "/sketch elements/eyes/07.png", type: "eye" },
    { id: 18, src: "/sketch elements/eyes/08.png", type: "eye" },
    { id: 19, src: "/sketch elements/eyes/09.png", type: "eye" },
    { id: 20, src: "/sketch elements/eyes/10.png", type: "eye" },
  ],
  eyebrows: [
    { id: 21, src: "/sketch elements/eyebrows/01.png", type: "eyebrow" },
    { id: 22, src: "/sketch elements/eyebrows/02.png", type: "eyebrow" },
    { id: 23, src: "/sketch elements/eyebrows/03.png", type: "eyebrow" },
    { id: 24, src: "/sketch elements/eyebrows/04.png", type: "eyebrow" },
    { id: 25, src: "/sketch elements/eyebrows/05.png", type: "eyebrow" },
    { id: 26, src: "/sketch elements/eyebrows/06.png", type: "eyebrow" },
    { id: 27, src: "/sketch elements/eyebrows/07.png", type: "eyebrow" },
    { id: 28, src: "/sketch elements/eyebrows/08.png", type: "eyebrow" },
    { id: 29, src: "/sketch elements/eyebrows/09.png", type: "eyebrow" },
    { id: 30, src: "/sketch elements/eyebrows/10.png", type: "eyebrow" },
  ],
  nose: [
    { id: 31, src: "/sketch elements/nose/01.png", type: "nose" },
    { id: 32, src: "/sketch elements/nose/02.png", type: "nose" },
    { id: 33, src: "/sketch elements/nose/03.png", type: "nose" },
    { id: 34, src: "/sketch elements/nose/04.png", type: "nose" },
    { id: 35, src: "/sketch elements/nose/05.png", type: "nose" },
    { id: 36, src: "/sketch elements/nose/06.png", type: "nose" },
    { id: 37, src: "/sketch elements/nose/07.png", type: "nose" },
    { id: 38, src: "/sketch elements/nose/08.png", type: "nose" },
    { id: 39, src: "/sketch elements/nose/09.png", type: "nose" },
    { id: 40, src: "/sketch elements/nose/10.png", type: "nose" },
  ],
  lips: [
    { id: 41, src: "/sketch elements/lips/01.png", type: "lips" },
    { id: 42, src: "/sketch elements/lips/02.png", type: "lips" },
    { id: 43, src: "/sketch elements/lips/03.png", type: "lips" },
    { id: 44, src: "/sketch elements/lips/04.png", type: "lips" },
    { id: 45, src: "/sketch elements/lips/05.png", type: "lips" },
    { id: 46, src: "/sketch elements/lips/06.png", type: "lips" },
    { id: 47, src: "/sketch elements/lips/07.png", type: "lips" },
    { id: 48, src: "/sketch elements/lips/08.png", type: "lips" },
    { id: 49, src: "/sketch elements/lips/09.png", type: "lips" },
    { id: 50, src: "/sketch elements/lips/10.png", type: "lips" },
  ],
  hair: [
    { id: 51, src: "/sketch elements/hair/01.png", type: "hair" },
    { id: 52, src: "/sketch elements/hair/02.png", type: "hair" },
    { id: 53, src: "/sketch elements/hair/03.png", type: "hair" },
    { id: 54, src: "/sketch elements/hair/04.png", type: "hair" },
    { id: 55, src: "/sketch elements/hair/05.png", type: "hair" },
    { id: 56, src: "/sketch elements/hair/06.png", type: "hair" },
    { id: 57, src: "/sketch elements/hair/07.png", type: "hair" },
    { id: 58, src: "/sketch elements/hair/08.png", type: "hair" },
    { id: 59, src: "/sketch elements/hair/09.png", type: "hair" },
    { id: 60, src: "/sketch elements/hair/10.png", type: "hair" },
  ],
  mustache: [
    { id: 61, src: "/sketch elements/mustach/01.png", type: "mustache" },
    { id: 62, src: "/sketch elements/mustach/02.png", type: "mustache" },
    { id: 63, src: "/sketch elements/mustach/03.png", type: "mustache" },
    { id: 64, src: "/sketch elements/mustach/04.png", type: "mustache" },
    { id: 65, src: "/sketch elements/mustach/05.png", type: "mustache" },
    { id: 66, src: "/sketch elements/mustach/06.png", type: "mustache" },
    { id: 67, src: "/sketch elements/mustach/07.png", type: "mustache" },
    { id: 68, src: "/sketch elements/mustach/08.png", type: "mustache" },
    { id: 69, src: "/sketch elements/mustach/09.png", type: "mustache" },
    { id: 70, src: "/sketch elements/mustach/10.png", type: "mustache" },
  ],
  more: [
    { id: 15, src: "/sketch elements/more/01.png", type: "extra" },
    { id: 16, src: "/sketch elements/more/02.png", type: "extra" },
  ],
};

function Sidebar() {
  const [activeCategory, setActiveCategory] = useState("head");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="sidebar">
      {/* Category Buttons */}
      <div className="button-list">
        {Object.keys(imagesByCategory).map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            style={{
              margin: "5px",
              backgroundColor: activeCategory === category ? "#ccc" : "#fff",
              cursor: "pointer",
            }}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Image List */}
      <div className="image-list">
        {imagesByCategory[activeCategory]?.map((image) => (
          <DraggableItem key={image.id} image={image.src} type={image.type} />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;