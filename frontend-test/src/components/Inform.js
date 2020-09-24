import React, { useState } from "react";
import "../static/css/Inform.css";
import bodyStyle01 from "../static/image/bodyForm/form-style01.svg";
// import pentaGraph from "../static/image/penta-graph.gif";
// import contributionGraph from "../static/image/contribution-graph.jpg";

import RadialChart from "./RadialChart";
import Heatmap from "./Heatmap";

function Inform() {
  // function truncate(str, n) {
  //   return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  // }

  // 레이더 그래프 데이터 필요
  // const [radar, setRadar] = useState([])

  // const [datedata, setDatedata] = useState([])

  // react 배포 오류 떄문에 ??
  const RadialChart2 = RadialChart;
  const Heatmap2 = Heatmap;

  return (
    <header className="inform">
      {/* background image */}
      <div className="part part-one">
        <img src={bodyStyle01} alt="bodyStyle" className="body-style" />
        <span className="body-rank">⭐⭐⭐</span>
      </div>
      <div className="part">
        <span className="body-name">하체발달형</span>
        <span className="body-description">
          바나나먹는몽키님은 대한민국에서 상위 35%에 속해있습니다. 현재 고객님의
          하체근력은 상당히 많이 발달했지만 BMI 지수가 조금 높아 식단조절과
          운동을 병행해야 되요. 또한, 팔과 상체 발달점수가 전체 점수에 비해 낮기
          때문에 저희 PTS는 상체 위주의 운동 코스를 추천드려요.
        </span>
      </div>
      <div className="part">
        {/* <img src={pentaGraph} alt="penta-graph" className="penta-graph" /> */}
        <RadialChart2
          upper={0.75}
          core={0.9}
          leg={0.99}
          back={0.89}
          arm={0.6}
        />
      </div>
      <div className="part">
        {/* <img
          src={contributionGraph}
          alt="contribution-graph"
          className="contribution-graph"
        /> */}
        <Heatmap2
          className="part-heatmap"
          datedata={[
            { date: "2020-09-01", count: 1 },
            { date: "2020-09-08", count: 6 },
            { date: "2020-09-15", count: 10 },
          ]}
        />
      </div>
    </header>
  );
}

export default Inform;
