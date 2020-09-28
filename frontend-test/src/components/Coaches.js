import React, { useEffect, useState } from "react";
import "../static/css/Coaches.css";

import axios from "axios";

import ModalCoach from "./ModalCoach";

function Coaches({ title }) {
  const [coaches, setCoaches] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [coach, setCoach] = useState({});
  const [src, setSrc] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    async function fetchCoaches() {
      const request = await axios.get(
        "http://j3a501.p.ssafy.io:8888/pts/coaches"
      );
      // console.log(request.data);
      setCoaches(request.data);
      return request;
    }
    fetchCoaches();
  }, []);

  async function fetchName(uid) {
    const request = await axios.get(
      `http://j3a501.p.ssafy.io:8888/pts/users/${uid}`
    );
    // console.log("asdf", request.data);
    setName(request.data.nickname);
    return request;
  }

  const ModalCoach2 = ModalCoach;
  return (
    <div>
      <h2 className="title">{title}</h2>
      <div className="coach__posters">
        {coaches.map((coach) => (
          <img
            className="coach__poster"
            onClick={() => {
              // coach.image 가 로컬 경로라 적용 안됨  ??
              setCoach(coach);
              fetchName(coach.uid);
              setSrc(coach.profile_photo);
              setModalShow(true);
            }}
            // src={require("" + coach.image)}
            src={require("../static/image/coach.png")}
            alt={coach.uid}
          />
        ))}
      </div>
      <ModalCoach2
        className="modal-coach"
        show={modalShow}
        onHide={() => {
          setModalShow(false);
        }}
        coach={coach}
        src={src}
        name={name}
      />
    </div>
  );
}

export default Coaches;
