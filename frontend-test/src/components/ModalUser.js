import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button } from "react-bootstrap";
import ModalChangeImg from "./ModalChangeImg";
import ModalChangeNickname from "./ModalChangeNickname";
import ModalCoach2 from "./ModalCoach2";
function ModalClass(props) {
  const [modalChangeImgShow, setModalChangeImgShow] = useState(false);
  const [modalChangeNickname, setModalChangeNickname] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [profile, setProfile] = useState(null);
  const [nickname, setNickname] = useState(null);
  const [coach, setCoach] = useState(null);
  const [coachname, setCoachname] = useState(null);

  async function fetchCoach(uid) {
    const request = await axios.get(
      "http://j3a501.p.ssafy.io:8888/pts/coaches/" + uid,
      {}
    );
    setCoach(request.data);
    return request;
  }

  // console.log(props.contact);
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h4>
              {nickname ? nickname : props.nickname}
              <span
                style={{
                  fontSize: 15,
                  verticalAlign: "top",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setModalChangeNickname(true);
                }}
              >
                ✏
              </span>
              님의 마이페이지
            </h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ float: "left", textAlign: "center", marginRight: 30 }}>
            <img
              src={profile ? profile : props.profile}
              alt="Avatar"
              className="nav__avatar"
              style={{ width: 200, height: 200 }}
            />
            <br />
            {/* 사진 변경하기 */}
            <Button
              variant="primary"
              onClick={() => {
                setModalChangeImgShow(true);
              }}
              style={{ height: 38, verticalAlign: "middle" }}
            >
              이미지 변경
            </Button>
          </div>
          <h4>내가 연락한 코치들</h4>
          <div style={{ display: "inline" }}>
            {props.contact &&
              props.contact.map((coach) => (
                <Button
                  variant="outline-info"
                  onClick={() => {
                    setCoachname(coach.nickname);
                    fetchCoach(coach.coachId);
                    setModalShow(true);
                  }}
                  style={{
                    marginRight: 10,
                    height: 38,
                    verticalAlign: "middle",
                  }}
                >
                  {coach.nickname}
                </Button>
              ))}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={props.onHide}
            style={{ height: 38, verticalAlign: "middle" }}
          >
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
      <ModalChangeImg
        show={modalChangeImgShow}
        onHide={() => {
          setModalChangeImgShow(false);
        }}
        onSetting={(profile) => {
          setProfile(profile);
          setModalChangeImgShow(false);
        }}
      ></ModalChangeImg>
      <ModalChangeNickname
        show={modalChangeNickname}
        nickname={nickname ? nickname : props.nickname}
        onHide={() => {
          setModalChangeNickname(false);
        }}
        onSetting={(nickname) => {
          setNickname(nickname);
          setModalChangeNickname(false);
        }}
      ></ModalChangeNickname>
      <ModalCoach2
        className="modal-coach"
        show={modalShow}
        onHide={() => {
          setModalShow(false);
        }}
        coach={coach}
        coachname={coachname}
      />
    </div>
  );
}

export default ModalClass;
