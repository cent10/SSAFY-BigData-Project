import React, { useEffect, useState } from "react";
import axios from "axios";
import "../static/css/Row.css";

import Badge from "react-bootstrap/Badge";
import Carousel from "react-bootstrap/Carousel";

import AuthenticationService from "./AuthenticationService.js";

function HealthVideo({ title, keyword, isLargeRow, history, token, uid }) {
  const [videos, setVideos] = useState([]);
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    async function fetchVideo() {
      const request = await axios
        .get("http://j3a501.p.ssafy.io:8888/pts/videos", {
          headers: {
            "jwt-auth-token": token,
          },
        })
        // .then()
        .catch(AuthenticationService.logout);
      if (request) {
        setVideos(request.data);
      }
      return request;
    }
    fetchVideo();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  function getFormatDate(date) {
    var year = date.getFullYear();
    var month = 1 + date.getMonth();
    month = month >= 10 ? month : "0" + month;
    var day = date.getDate();
    day = day >= 10 ? day : "0" + day;
    return year + "-" + month + "-" + day;
  }

  return (
    <div className="rowrow">
      {/* title */}
      <h2 className="row__title">
        {title} <h4 className="hover">></h4>
      </h2>

      {/* container -> posters */}
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        controls={false}
        interval={2000}
      >
        <Carousel.Item>
          <div className="row__posters">
            {/* several rwo_poster */}
            {videos.slice(0, 7).map((video) => (
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
                    history.push(`/video/${video.url}`, {
                      title: video.title,
                      tags: [video.type1, video.type2, video.type3],
                    });
                    var today = new Date();
                    // console.log(today);
                    // console.log(getFormatDate(today));
                    axios.post(
                      "http://j3a501.p.ssafy.io:8888/pts/logs",
                      {
                        day: getFormatDate(today),
                        point: 1,
                        uid: uid,
                      },
                      null
                    );
                  }}
                />
                {/* </Link> */}
                <h6
                  className="row__class__title"
                  style={{ paddingTop: "200px;" }}
                >
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
        </Carousel.Item>
        {videos[6] && (
          <Carousel.Item>
            <div className="row__posters">
              {/* several rwo_poster */}
              {videos.slice(6).map((video) => (
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
                      history.push(`/video/${video.url}`, {
                        title: video.title,
                        tags: [video.type1, video.type2, video.type3],
                      });
                      var today = new Date();
                      axios.post(
                        "http://j3a501.p.ssafy.io:8888/pts/logs",
                        {
                          day: getFormatDate(today),
                          point: 1,
                          uid: uid,
                        },
                        null
                      );
                    }}
                  />
                  {/* </Link> */}
                  <h6
                    className="row__class__title"
                    style={{ paddingTop: "200px;" }}
                  >
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
          </Carousel.Item>
        )}
      </Carousel>
    </div>
  );
}

export default HealthVideo;
