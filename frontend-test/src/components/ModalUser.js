import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ModalChangeImg from "./ModalChangeImg"
function ModalClass(props) {
  const [modalChangeImgShow, setModalChangeImgShow] = useState(false);
  const [profile, setProfile] = useState(props.profile);
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
            <h4>{props.nickname}님의 마이페이지</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          <img
            src= {profile}
            alt="Avatar"
            className="nav__avatar"
            style={{width:200,height:200}}
          />
          {/* 사진 변경하기 */}
          <div>
            <Button variant="primary" onClick={() => {
              setModalChangeImgShow(true)
            }}>
              이미지 변경
            </Button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>
            닫기
          </Button>
        </Modal.Footer>
      </Modal>
      <ModalChangeImg show={modalChangeImgShow} onHide={() => {
          setModalChangeImgShow(false);
        }} onSetting={(profile)=>{
          setProfile(profile)
          setModalChangeImgShow(false);
        }}></ModalChangeImg>
    </div>
  );
}

export default ModalClass;
