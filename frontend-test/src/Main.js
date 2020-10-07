import React, { useEffect, useState } from "react";

import HealthVideo from "./components/HealthVideo";
import HealthClass from "./components/HealthClass";
import Inform from "./components/Inform";
import BestCoach from "./components/BestCoach";
import Coaches from "./components/Coaches";
import MainFooter from "./components/MainFooter";
import AuthenticationService from "./components/AuthenticationService.js";
import "./static/css/Main.css";

import axios from "axios";

function Main({ history }) {
  const HealthVideo2 = HealthVideo;
  const HealthClass2 = HealthClass;
  const Inform2 = Inform;
  const BestCoach2 = BestCoach;
  const Coaches2 = Coaches;
  const MainFooter2 = MainFooter;
  const id = AuthenticationService.getLoggedInid();

  const uid = sessionStorage.getItem("authenticatedId");
  const [nickname, setNickname] = useState(null);

  const token = sessionStorage.getItem("token");

  // console.log("token\n", token);

  useEffect(() => {
    async function fetchNickname() {
      const request = await axios.get(
        `http://j3a501.p.ssafy.io:8888/pts/users/${uid}`
      );
      setNickname(request.data.nickname);
      return request;
    }
    fetchNickname();
  }, []);

  return (
    <div className="main">
      {/* Inform */}
      <Inform2 uid={uid} nickname={nickname} />

      {/* Health Video */}
      <HealthVideo2
        title={`${nickname}님에게 추천되는 상체 발달 운동법`}
        keyword="pushup posture"
        history={history}
        token={token}
        uid={uid}
      />

      {/* Health Class */}
      <HealthClass2
        title={`${nickname}님이 관심있을 만한 클래스`}
        keyword="yoga class"
        token={token}
        uid={uid}
      />

      {/* Best Coach */}
      <BestCoach2
        title="이달의 우수 PT 코치"
        bestCoach={{
          title: "태 영 휘 트 니 스",
          subtitle: "태영휘트니스 - 정태영",
          description: [
            "한국체육대학교 사회체육학부 스포츠청소년지도학과 졸업",
            "대한보디빌딩협회 지도자 2급",
            "생활체육지도자3급",
          ],
        }}
        history={history}
        uid={uid}
      />

      {/* Coaches */}
      <Coaches2
        title={`${nickname}님과 성향이 일치하는 코치`}
        token={token}
        uid={uid}
      />

      {/* Footer */}
      <MainFooter2 />
    </div>
  );
}

export default Main;
