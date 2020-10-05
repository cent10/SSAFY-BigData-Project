import React from "react";
import { Modal, Button } from "react-bootstrap";

import Badge from "react-bootstrap/Badge";

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
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>
            {props.tags.map((tag) => (
              <>
                <Badge variant="dark">{tag}</Badge>&nbsp;
              </>
            ))}
          </h4>
          <div>
            {/* 좌측 코치 사진 */}
            <img
              style={{
                float: "left",
                objectFit: "cover",
                width: 400,
              }}
              src={props.coach.profilePhoto}
              alt={""}
            />
            {/* 우측 코치 경력 */}
            <div style={{ float: "left", width: 20, height: 400 }}></div>
            <div>
              <h2>{props.name} 코치</h2>
              <h4>{props.coach.career}</h4>
              <br />
              <p>{props.story}</p>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>
            닫기
          </Button>
          {/* 함수 설정할 것 */}
          <Button variant="info" onClick={() => {}}>
            신청하기
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalClass;
