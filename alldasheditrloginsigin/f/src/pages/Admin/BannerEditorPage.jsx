// BannerEditorPage.jsx
import React, { useState } from "react";

const BannerEditorPage = () => {
  const [bgColor, setBgColor] = useState("#3498db");
  const [gradient, setGradient] = useState(false);
  const [text, setText] = useState("Your Banner Text");
  const [textColor, setTextColor] = useState("#ffffff");
  const [fontSize, setFontSize] = useState(32);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Simple Banner Editor</h2>

      {/* Controls */}
      <div className="mb-6 flex flex-col gap-4 max-w-md">
        <label>
          Background Color:{" "}
          <input
            type="color"
            value={bgColor}
            onChange={(e) => setBgColor(e.target.value)}
          />
        </label>

        <label>
          Gradient Background:{" "}
          <input
            type="checkbox"
            checked={gradient}
            onChange={(e) => setGradient(e.target.checked)}
          />
        </label>

        <label>
          Banner Text:{" "}
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </label>

        <label>
          Text Color:{" "}
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
          />
        </label>

        <label>
          Font Size:{" "}
          <input
            type="number"
            value={fontSize}
            onChange={(e) => setFontSize(parseInt(e.target.value))}
          />{" "}
          px
        </label>
      </div>

      {/* Banner Preview */}
      <div
        style={{
          height: "200px",
          width: "100%",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: textColor,
          fontSize: `${fontSize}px`,
          fontWeight: "bold",
          background: gradient
            ? `linear-gradient(90deg, ${bgColor} 0%, #ffffff 100%)`
            : bgColor,
          transition: "all 0.3s ease",
        }}
      >
        {text}
      </div>
    </div>
  );
};

export default BannerEditorPage;
