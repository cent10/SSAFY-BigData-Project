import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../static/css/BestCoachVideo.css";

function BestCoachVideo({ title }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideo() {
      const request = await axios.get(
        "http://j3a501.p.ssafy.io:8888/pts/videos/best"
      );
      setVideos(request.data);
      return request;
    }
    fetchVideo();
  }, []);

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
      {/* container -> posters */}
      <div className="bcvideo__posters">
        {/* several rwo_poster */}
        {videos.map((video) => (
          <Link
            className="bcvideo__link"
            to={{
              pathname: `/video/${video.url}`,
              state: {
                title: video.title,
                tags: [video.type1, video.type2, video.type3],
              },
            }}
          >
            <img
              className="bcvideo__poster"
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

export default BestCoachVideo;
