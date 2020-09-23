import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../static/css/Row.css";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

function HealthVideo({ title, keyword, isLargeRow }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideo() {
      const request = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            key: API_KEY,
            part: "snippet",
            type: "video",
            q: keyword,
            maxResults: 12,
          },
        }
      );
      setVideos(request.data.items);
      return request;
    }
    fetchVideo();
  }, [keyword]);

  // console.log(keyword);
  // console.log(videos);

  // const opts = {
  //   height: "390",
  //   width: "100%",
  //   playerVars: {
  //     autoplay: 1,
  //   },
  // };

  return (
    <div className="rowrow">
      {/* title */}
      <h2 className="row__title">{title}</h2>

      {/* container -> posters */}
      <div className="row__posters">
        {/* several rwo_poster */}
        {videos.map((video) => (
          <Link className="row__link" to={`/video/${video.id.videoId}`}>
            <img
              className="row__poster"
              key={video.id.videoId}
              src={video.snippet.thumbnails.high.url}
              alt={video?.snippet.title}
            />
          </Link>
        ))}
      </div>
      {/* {videoUrl && <YouTube videoId={videoUrl} opts={opts} />} */}
    </div>
  );
}

export default HealthVideo;
