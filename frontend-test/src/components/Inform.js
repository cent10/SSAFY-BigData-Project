import React, { useEffect, useState } from "react";
import "../static/css/Inform.css";

import bodyStyle1 from "../static/assets/Archive/1.png";
import bodyStyle2 from "../static/assets/Archive/2.png";
import bodyStyle3 from "../static/assets/Archive/3.png";
import bodyStyle4 from "../static/assets/Archive/4.png";
import bodyStyle5 from "../static/assets/Archive/5.png";
import bodyStyle6 from "../static/assets/Archive/6.png";
import bodyStyle7 from "../static/assets/Archive/7.png";

// import pentaGraph from "../static/image/penta-graph.gif";
// import contributionGraph from "../static/image/contribution-graph.jpg";

import axios from "axios";

import RadialChart from "./RadialChart";
import Heatmap from "./Heatmap";

function Inform({ uid, nickname }) {
  // function truncate(str, n) {
  //   return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  // }

  // 레이더 그래프 데이터 필요
  // const [radar, setRadar] = useState([])

  // const [datedata, setDatedata] = useState([])

  // react 배포 오류 떄문에 ??
  const RadialChart2 = RadialChart;
  const Heatmap2 = Heatmap;

  const [user, setUser] = useState({});
  const [result, setResult] = useState({});
  const [datedata, setDatedata] = useState([]);

  useEffect(() => {
    async function fetchUser() {
      const request = await axios.get(
        `http://j3a501.p.ssafy.io:8888/pts/silhouettes/${uid}`
      );
      setUser(request.data);
      return request;
    }
    fetchUser();

    async function fetchResult() {
      const request = await axios.get(
        `http://j3a501.p.ssafy.io:8888/pts/results/${uid}`
      );
      // console.log("asdf", request);
      setResult(request.data);
      return request;
    }
    fetchResult();

    async function fetchDatedata() {
      const request = await axios.get(
        `http://j3a501.p.ssafy.io:8888/pts/logs/${uid}`
      );
      console.log("asdf", request);
      setDatedata(request.data);
      return request;
    }
    fetchDatedata();

    console.log("asdf2", datedata);
  }, [uid]);

  function bodyrank(num) {
    if (num == 1) {
      return `⭐`;
    } else if (num == 2) {
      return `⭐⭐`;
    } else if (num == 3) {
      return `⭐⭐⭐`;
    } else if (num == 4) {
      return `⭐⭐⭐⭐`;
    } else {
      return `⭐⭐⭐⭐⭐`;
    }
  }

  function bodyStyle(num) {
    if (num == 1) {
      return bodyStyle1;
    } else if (num == 2) {
      return bodyStyle2;
    } else if (num == 3) {
      return bodyStyle3;
    } else if (num == 4) {
      return bodyStyle4;
    } else if (num == 5) {
      return bodyStyle5;
    } else if (num == 6) {
      return bodyStyle6;
    } else {
      return bodyStyle7;
    }
  }

  function datedata2() {
    var datedata3 = [];
    datedata.forEach((date) =>
      datedata3.push({ date: date.day, count: date.point })
    );

    // console.log("asdf", datedata3);
    return datedata3;
  }

  return (
    <header className="inform">
      {/* background image */}
      <div className="part part-one">
        <img src={bodyStyle(user.ID)} alt="bodyStyle" className="body-style" />
        <span className="body-rank">{bodyrank(user.STAR)}</span>
      </div>
      <div className="part">
        <span className="body-name">{user.FEATURE}</span>
        <span className="body-description">
          {nickname}님은 {user.DESCRIPTION}
        </span>
      </div>
      <div className="part">
        {/* <img src={pentaGraph} alt="penta-graph" className="penta-graph" /> */}
        <RadialChart2
          bmi={result.bmi}
          arm={result.arm / 5}
          leg={result.leg / 5}
          core={result.core / 5}
          chest={result.chest / 5}
          fat={result.fat / 5}
        />
      </div>
      <div className="part">
        {/* <img
          src={contributionGraph}
          alt="contribution-graph"
          className="contribution-graph"
        /> */}
        <Heatmap2 className="part-heatmap" datedata={datedata2()} />
      </div>
    </header>
  );
}

export default Inform;
