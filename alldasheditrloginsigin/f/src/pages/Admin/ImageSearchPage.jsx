import React, { useState } from "react";
import axios from "axios";

const API_KEY = "YOUR_GOOGLE_API_KEY"; // Google API Key
const CX = "YOUR_CSE_ID"; // Custom Search Engine ID

const ImageSearchPage = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);
    try {
      const res = await axios.get(
        `https://www.googleapis.com/customsearch/v1?q=${query}&cx=${CX}&key=${
          452888033903 -
          i61da8bj9f06iaqrjrg36h1ql5jq0bui.apps.googleusercontent.com
        }&searchType=image&num=10`
      );
      setImages(res.data.items || []);
    } catch (err) {
      console.error(err);
      alert("Error fetching images.");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Google Image Search</h1>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Images..."
          className="flex-1 px-3 py-2 border rounded"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Search
        </button>
      </div>

      {loading && <p>Loading...</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <div key={i} className="border rounded overflow-hidden">
            <img
              src={img.link}
              alt={img.title}
              className="w-full h-48 object-cover"
            />
            <p className="p-2 text-sm">{img.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSearchPage;
