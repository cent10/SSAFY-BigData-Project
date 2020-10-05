import React from "react";

import { Modal, Button } from "react-bootstrap";

function ModalClass(props) {
  console.log(props.coach.career);
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
            <img
              style={{
                float: "left",
                objectFit: "contain",
                width: "400px",
                marginRight: 20,
              }}
              src={props.coach.profilePhoto}
              alt={""}
            />

            {/* 우측 코치 경력 */}
            <h2>{props.name} 코치</h2>
            <h4>
              <pre style={{ whiteSpace: "pre-wrap" }}>{props.coach.career}</pre>
            </h4>
            <br />
            <pre style={{ whiteSpace: "pre-wrap" }}>{props.coach.story}</pre>
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
