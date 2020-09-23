import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";

import React from "react";

function RadialChart(props) {
  const data = [
    {
      data: {
        upper: props.upper,
        core: props.core,
        leg: props.leg,
        back: props.back,
        arm: props.arm,
      },
      meta: { color: "blue" },
    },
  ];

  const captions = {
    // columns 나중에 수정할 것
    upper: "상체",
    core: "코어",
    leg: "다리",
    back: "등",
    arm: "팔",
  };
  return (
    <div>
      <RadarChart captions={captions} data={data} size={400} />
    </div>
  );
}

export default RadialChart;
