import React, { useEffect, useState } from "react";
import axios from "axios";
import "../static/css/BestCoachVideo.css";

import Carousel from "react-bootstrap/Carousel";

import moment from "moment-timezone/builds/moment-timezone-with-data";

function BestCoachVideo({ title, history, uid }) {
  const [videos, setVideos] = useState([]);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

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
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        controls={false}
        interval={2000}
      >
        <Carousel.Item>
          <div className="bcvideo__posters">
            {/* several rwo_poster */}
            {videos.slice(0, 5).map((video) => (
              <img
                className="bcvideo__poster"
                key={video.id}
                src={video.thumbnail}
                alt={video.title}
                onClick={() => {
                  history.push(`/video/${video.url}`, {
                    title: video.title,
                    tags: [video.type1, video.type2, video.type3],
                  });
                  var today = moment().tz("Asia/Seoul").format("YYYY-MM-DD");
                  // console.log(today);
                  axios.post(
                    "http://j3a501.p.ssafy.io:8888/pts/logs",
                    {
                      day: today,
                      point: 1,
                      uid: uid,
                    },
                    null
                  );
                }}
              />
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="bcvideo__posters">
            {/* several rwo_poster */}
            {videos.slice(4).map((video) => (
              <img
                className="bcvideo__poster"
                key={video.id}
                src={video.thumbnail}
                alt={video.title}
                onClick={() => {
                  history.push(`/video/${video.url}`, {
                    title: video.title,
                    tags: [video.type1, video.type2, video.type3],
                  });
                  var today = moment().tz("Asia/Seoul").format("YYYY-MM-DD");
                  // console.log(today);
                  axios.post(
                    "http://j3a501.p.ssafy.io:8888/pts/logs",
                    {
                      day: today,
                      point: 1,
                      uid: uid,
                    },
                    null
                  );
                }}
              />
            ))}
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default BestCoachVideo;
