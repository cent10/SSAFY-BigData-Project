import React, { useEffect, useState } from "react";
import "../static/css/Coaches.css";

import axios from "axios";

import ModalCoach from "./ModalCoach";
import Carousel from "react-bootstrap/Carousel";

function Coaches({ title, token, uid }) {
  const [coaches, setCoaches] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [coach, setCoach] = useState({});
  const [src, setSrc] = useState("");
  const [name, setName] = useState("");
  const [index, setIndex] = useState(0);
  const [show2, setShow2] = useState(false);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    async function fetchCoaches() {
      const request = await axios.get(
        "http://j3a501.p.ssafy.io:8888/pts/coaches",
        {
          headers: {
            "jwt-auth-token": token,
          },
        }
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
    <div className="coaches">
      <h2 className="title">
        {title} <h4 className="hover">></h4>
      </h2>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        controls={false}
        interval={2000}
      >
        <Carousel.Item>
          <div className="coach__posters">
            {coaches.slice(0, 7).map((coach) => (
              <img
                className="coach__poster"
                onClick={() => {
                  // coach.image 가 로컬 경로라 적용 안됨  ??
                  setCoach(coach);
                  fetchName(coach.uid);
                  setSrc(coach.profilePhoto);
                  setModalShow(true);
                }}
                src={coach.profilePhoto}
                // src={require("../static/image/coach.png")}
                alt={coach.uid}
              />
            ))}
          </div>
        </Carousel.Item>
        {coaches[7] && (
          <Carousel.Item>
            <div className="coach__posters">
              {coaches.slice(7).map((coach) => (
                <img
                  className="coach__poster"
                  onClick={() => {
                    // coach.image 가 로컬 경로라 적용 안됨  ??
                    setCoach(coach);
                    fetchName(coach.uid);
                    setSrc(coach.profilePhoto);
                    setModalShow(true);
                  }}
                  src={coach.profilePhoto}
                  // src={require("../static/image/coach.png")}
                  alt={coach.uid}
                />
              ))}
            </div>
          </Carousel.Item>
        )}
      </Carousel>
      <ModalCoach2
        className="modal-coach"
        show={modalShow}
        onHide={() => {
          setModalShow(false);
          setShow2(false);
        }}
        coach={coach}
        src={src}
        name={name}
        show2={show2}
        onShow2={() => {
          setShow2(true);
        }}
        closeShow2={() => {
          setShow2(false);
        }}
        uid={uid}
      />
    </div>
  );
}

export default Coaches;
