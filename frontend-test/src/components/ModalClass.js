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
                marginRight: 20,
              }}
              src={props.coach.profilePhoto}
              alt={""}
            />
            {/* 우측 코치 경력 */}
            <div>
              <h2>{props.name} 코치</h2>
              <h4>
                <pre style={{ whiteSpace: "pre-wrap" }}>
                  {props.coach.career}
                </pre>
              </h4>
              <br />
              <pre style={{ whiteSpace: "pre-Wrap" }}>{props.story}</pre>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>
            닫기
          </Button>
          {/* 함수 설정할 것 */}
          <Button variant="info" onClick={() => {}}>
            참여하기
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalClass;
