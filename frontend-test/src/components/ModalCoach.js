import React from "react";

import { Modal, Button } from "react-bootstrap";

function ModalClass(props) {
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
            코치 소개
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            {/* 좌측 코치 사진 */}
            {/* <img src={props.coach.profile_photo} alt={""}/> */}
            <img
              style={{ float: "left" }}
              src={require("../static/image/coach.png")}
              alt={""}
            />
            <div style={{ float: "left", width: 20, height: 400 }}></div>

            {/* 우측 코치 경력 */}
            <h2>{props.name} 코치</h2>
            <h4>{props.coach.career}</h4>
            <p>
              좋아~ 아주 좋아~좋아~ 아주 좋아~좋아~ 아주 좋아~좋아~ 아주
              좋아~좋아~ 아주 좋아~좋아~ 아주 좋아~좋아~ 아주 좋아~좋아~ 아주
              좋아~좋아~ 아주 좋아~좋아~ 아주 좋아~좋아~ 아주 좋아~좋아~ 아주
              좋아~좋아~ 아주 좋아~좋아~ 아주 좋아~좋아~ 아주 좋아~좋아~ 아주
              좋아~좋아~ 아주 좋아~좋아~ 아주 좋아~좋아~ 아주 좋아~좋아~ 아주
              좋아~좋아~ 아주 좋아~좋아~ 아주 좋아~
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>
            닫기
          </Button>
          {/* 함수 설정할 것 */}
          <Button variant="info" onClick={() => {}}>
            연락하기
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalClass;
