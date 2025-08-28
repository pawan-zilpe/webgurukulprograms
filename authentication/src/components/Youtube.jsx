import React, { useState } from "react";
import axios from "axios";
const Youtube = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    axios
      .get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          q: search,
          key: "your api key",
          part: "snippet",
        },
      })
      .then((response) => {
        setResult(response.data.items);
        console.log(response);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      {" "}
      <p>
        Search Image:{" "}
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <button onClick={handleSearch}>search</button>
      </p>
      {result.map((item, index) => {
        return (
          <iframe
            width="791"
            height="336"
            src={"https://www.youtube.com/embed/" + item.id.videoId}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        );
      })}
    </div>
  );
};

export default Youtube;
