import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../static/css/BestCoachVideo.css";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY2;

function BestCoachVideo({ title, keyword, isLargebcvideo }) {
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
    <div className="bcvideo">
      {/* title */}
      <h2 className="bcvideo__title">{title}</h2>

      {/* container -> posters */}
      <div className="bcvideo__posters">
        {/* several rwo_poster */}
        {videos.map((video) => (
          <Link className="bcvideo__link" to={`/video/${video.id.videoId}`}>
            <img
              className="bcvideo__poster"
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

export default BestCoachVideo;
