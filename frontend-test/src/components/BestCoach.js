import React from "react";
import "../static/css/BestCoach.css";
import backdropImage from "../static/image/bestcoach.png";

import BestCoachVideo from "./BestCoachVideo";

function BestCoach({ title, bestCoach, history }) {
  const BestCoachVideo2 = BestCoachVideo;

  return (
    <div className="bcoach">
      <h2 className="bcoach-title">{title}</h2>
      <div
        className="best-coach"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url(${backdropImage})`,
        }}
      >
        <div className="bcoach__contents">
          {/* title */}
          <h2 className="bcoach__title">{bestCoach.title}</h2>
          {/* subtitle */}
          <h2 className="bcoach__subtitle">{bestCoach.subtitle}</h2>
          {/* description */}
          {bestCoach.description.map((line) => (
            <h1 className="bcoach__description">{line}</h1>
          ))}
          {/* videos 구현 예정*/}
          <BestCoachVideo2
            className="bcoach__video"
            keyword="lofi"
            history={history}
          />
        </div>
      </div>
    </div>
  );
}

export default BestCoach;
