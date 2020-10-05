import React from "react";

function Sorry(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        color: "white",
        flexDirection: "column",
      }}
    >
      <h1>
        <br />
        죄송합니다
      </h1>
      <h1>저희 PTS 페이지는</h1>
      <h1>데스크탑에</h1>
      <h1>최적화되어있습니다</h1>
      <br />
      <h1>이미 데스크탑에서</h1>
      <h1>접속중이시라면</h1>
      <h1>창을 최대화하시고</h1>
      <h1>새로고침 해주세요</h1>
    </div>
  );
}

export default Sorry;
