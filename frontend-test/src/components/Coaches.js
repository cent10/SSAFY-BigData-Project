import React, { useState } from "react";
import "../static/css/Coaches.css";

import ModalCoach from "./ModalCoach";

const coaches = [
  { name: "김계란", image: "../static/image/coach.png" },
  { name: "김계란", image: "../static/image/coach.png" },
  { name: "김계란", image: "../static/image/coach.png" },
  { name: "김계란", image: "../static/image/coach.png" },
  { name: "김계란", image: "../static/image/coach.png" },
  { name: "김계란", image: "../static/image/coach.png" },
  { name: "김계란", image: "../static/image/coach.png" },
  { name: "김계란", image: "../static/image/coach.png" },
  { name: "김계란", image: "../static/image/coach.png" },
  { name: "김계란", image: "../static/image/coach.png" },
  { name: "김계란", image: "../static/image/coach.png" },
  { name: "김계란", image: "../static/image/coach.png" },
  { name: "김계란", image: "../static/image/coach.png" },
];

// coaches 원래 불러와야함
// function Coaches({title, coaches}) {
function Coaches({ title }) {
  // cosnt [coaches, setCoaches] = useState([]));
  const [modalShow, setModalShow] = useState(false);
  const [src, setSrc] = useState("");
  return (
    <div>
      <h2 className="title">{title}</h2>
      <div className="coach__posters">
        {coaches.map((coach) => (
          <img
            className="coach__poster"
            onClick={() => {
              // coach.image 가 로컬 경로라 적용 안됨  ??
              setSrc(coach.image);
              setModalShow(true);
              console.log(src);
            }}
            // src={require("" + coach.image)}
            src={require("../static/image/coach.png")}
            alt={coach.name}
          />
        ))}
      </div>
      <ModalCoach
        className="modal-coach"
        show={modalShow}
        onHide={() => {
          setModalShow(false);
        }}
        src={src}
      />
    </div>
  );
}

export default Coaches;
