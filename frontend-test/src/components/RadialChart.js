import RadarChart from "react-svg-radar-chart";
import "react-svg-radar-chart/build/css/index.css";

import React from "react";

function RadialChart(props) {
  const data = [
    {
      data: {
        arm: props.arm,
        leg: props.leg,
        core: props.core,
        chest: props.chest,
        fat: props.fat,
      },
      meta: { color: "#1D4E89" },
    },
  ];

  const captions = {
    // columns 나중에 수정할 것
    arm: "팔",
    leg: "다리",
    core: "코어",
    chest: "가슴",
    fat: "체지방",
  };
  return (
    <div>
      <RadarChart captions={captions} data={data} size={400} />
    </div>
  );
}

export default RadialChart;
