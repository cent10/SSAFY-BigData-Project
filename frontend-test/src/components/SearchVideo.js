import React, { useEffect, useState } from "react";
import axios from "axios";
import "../static/css/Row.css";

import Badge from "react-bootstrap/Badge";

function HealthVideo({ title, keyword, history }) {
  const [videos, setVideos] = useState([
    // {
    //   id: 0,
    //   thumbnail:
    //     "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJuIYqiLdVHQ6lcAD2ricU7XzyZkpk9TPQRg&usqp=CAU",
    //   title: "검색 결과가 없습니다",
    //   type1: "단어 오타",
    //   type2: "다른 키워드",
    //   type3: null,
    // },
  ]);

  useEffect(() => {
    async function fetchVideo() {
      const request = await axios.get(
        "http://j3a501.p.ssafy.io:8888/pts/videos/search/" + keyword
      );
      setVideos(request.data);
      return request;
    }
    fetchVideo();
  }, [keyword]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="rowrow">
      {/* title */}
      <h2 className="row__title">
        {title} <h4 className="hover">></h4>
      </h2>

      {/* container -> posters */}
      <div className="row__posters">
        {/* several rwo_poster */}
        {!videos.length && (
          <h3
            style={{
              margin: "auto",
              color: "white",
            }}
          >
            검색된 비디오가 없습니다
          </h3>
        )}
        {videos.map((video) => (
          <div
            className="row__class__poster"
            style={{ width: "290px", height: "300px;" }}
          >
            <img
              className="row__poster"
              key={video.id}
              src={video.thumbnail}
              alt={video.title}
              onClick={() => {
                if (video.title != "검색 결과가 없습니다") {
                  history.push(`/video/${video.url}`, {
                    title: video.title,
                    tags: [video.type1, video.type2, video.type3],
                  });
                }
              }}
            />
            {/* </Link> */}
            <h6 className="row__class__title" style={{ paddingTop: "200px;" }}>
              {truncate(video.title, 18)}
            </h6>
            <h6>
              <span>
                <Badge variant="light">{video.type1}</Badge>{" "}
                <Badge variant="light">{video.type2}</Badge>{" "}
                <Badge variant="light">{video.type3}</Badge>
              </span>
            </h6>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HealthVideo;
