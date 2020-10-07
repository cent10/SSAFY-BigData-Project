import React, { useEffect, useState } from "react";
import axios from "axios";
import "../static/css/Row.css";
// import YouTube from "react-youtube";

import ModalClass from "./ModalClass";

import Badge from "react-bootstrap/Badge";

function HealthClass({ title, keyword, token, uid }) {
  const [classes, setClasses] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [story, setStory] = useState("");
  const [cltitle, setCltitle] = useState("");
  const [coach, setCoach] = useState({});
  const [tags, setTags] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    async function fetchVideo() {
      const request = await axios.get(
        "http://j3a501.p.ssafy.io:8888/pts/class",
        {
          headers: {
            "jwt-auth-token": token,
          },
        }
      );
      // console.log(request.data);
      setClasses(request.data);
      return request;
    }
    fetchVideo();
  }, [keyword]);

  async function fetchCoach(coachId) {
    const request = await axios.get(
      `http://j3a501.p.ssafy.io:8888/pts/coaches/${coachId}`
    );
    console.log("asdf", request.data);
    setCoach(request.data);
    fetchName(request.data.uid);
    return request;
  }

  async function fetchName(uid) {
    const request = await axios.get(
      `http://j3a501.p.ssafy.io:8888/pts/users/${uid}`
    );
    // console.log("asdf", request.data);
    setName(request.data.nickname);
    return request;
  }

  const ModalClass2 = ModalClass;

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div className="rowrow">
      {/* title */}
      <h2 className="row__title">
        {title} <h4 className="hover">></h4>
      </h2>

      {/* container -> posters */}
      <div className="row__posters">
        {/* several rwo_poster */}
        {classes.map((cl) => (
          <div
            className="row__class__poster"
            style={{ width: "290px", height: "300px;" }}
          >
            {/* <img
              key={cl.id}
              onClick={() => {
                setStory(cl.story);
                setCltitle(cl.title);
                setCoach(fetchCoach(cl.coachId));
                setTags([cl.type1, cl.type2, cl.type3]);
                setModalShow(true);
              }}
              className={`row__class row__poster ${
                isLargeRow && "row__posterLarge"
              }`}
              src={cl.thumbnail}
              alt={cl.title}
              style={{ position: "absolute" }}
            />
            <h1
              style={{
                position: "absolute",
                color: "red",
                fontWeight: "bold",
              }}
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              .
            </h1> */}
            {/* <img
              key={cl.id}
              className={`row__class row__poster`}
              src={cl.thumbnail}
              alt={cl.title}
            /> */}
            <div
              className={`row__class row__poster`}
              style={{
                backgroundSize: "cover",
                backgroundImage: `url(${cl.thumbnail})`,
                backgroundRepeat: "no-repeat",
                width: "270px",
                height: "200px",
                display: "flex",
              }}
              onClick={() => {
                setStory(cl.story);
                setCltitle(cl.title);
                setCoach(fetchCoach(cl.coachId));
                setTags([cl.type1, cl.type2, cl.type3]);
                setModalShow(true);
              }}
            >
              <span
                style={{
                  fontSize: "30px",
                  fontWeight: "bold",
                  color: "red",
                  marginLeft: "240px",
                }}
              >
                .
              </span>
            </div>
            <h6 className="row__class__title" style={{ paddingTop: "200px;" }}>
              {truncate(cl.title, 18)}
            </h6>
            <h6>
              <span>
                <Badge variant="light">{cl.type1}</Badge>{" "}
                <Badge variant="light">{cl.type2}</Badge>{" "}
                <Badge variant="light">{cl.type3}</Badge>
              </span>
            </h6>
          </div>
        ))}
      </div>
      <ModalClass2
        className="modal-calss"
        show={modalShow}
        onHide={() => {
          setModalShow(false);
        }}
        story={story}
        title={cltitle}
        coach={coach}
        tags={tags}
        name={name}
        uid={uid}
      />
    </div>
  );
}

export default HealthClass;
