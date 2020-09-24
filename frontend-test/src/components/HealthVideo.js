import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../static/css/Row.css";

function HealthVideo({ title, keyword, isLargeRow }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideo() {
      const request = await axios.get(
        "http://j3a501.p.ssafy.io:8888/pts/videos"
      );
      setVideos(request.data);
      return request;
    }
    fetchVideo();
  }, [keyword]);

  return (
    <div className="rowrow">
      {/* title */}
      <h2 className="row__title">{title}</h2>

      {/* container -> posters */}
      <div className="row__posters">
        {/* several rwo_poster */}
        {videos.map((video) => (
          <Link className="row__link" to={`/video/${video.url}`}>
            <img
              className="row__poster"
              key={video.id}
              src={video.thumbnail}
              alt={video.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HealthVideo;
