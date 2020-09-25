import React from "react";
import YouTube from "react-youtube";

import "../static/css/Video.css";

import Badge from "react-bootstrap/Badge";

function Video(props) {
  console.log(props);
  const opts = {
    width: "100%",
    height: "800",
    playerVars: {
      autoplay: 1,
      controls: 0,
      disablekb: 1,
      loop: 1,
      modestbranding: 1,
    },
  };

  return (
    <div className="youtube-video-player">
      <h4 style={{ color: "white" }}>
        &nbsp;&nbsp;&nbsp;&nbsp;
        {props.location.state.title} &nbsp;&nbsp;{" "}
        {props.location.state.tags.map((tag) => (
          <>
            <Badge variant="light">{tag}</Badge>
            &nbsp;
          </>
        ))}
      </h4>
      {/* <h1>youtube url {props.match.params.videoUrl}</h1> */}
      <YouTube
        videoId={props.match.params.videoUrl}
        opts={opts}
        // 멈추면 뒤로가기 버튼 나오게?
        // onPause={() => {
        //   alert("그만봅니까? 뒤로가기");
        // }}
        onEnd={() => {
          // 화면 끝날 때 함수로 조작 가능? 카운트 추가??
          alert("asdf");
        }}
      />
      {/* <div className="youtube-back-button-wrap">
        <Link to={"/main"}>
          <button className="youtube-back-button">메인으로</button>
        </Link>
      </div> */}
    </div>
  );
}

export default Video;
