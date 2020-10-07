import React, { useEffect, useState } from "react";

import { Modal, Button } from "react-bootstrap";

function ModalCoach2(props) {
  // console.log(props.coach.career);

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
              src={props.coach ? props.coach.profilePhoto : ""}
              alt={""}
            />

            {/* 우측 코치 경력 */}
            <h2>{props.coachname} 코치</h2>
            <h4>
              <pre style={{ whiteSpace: "pre-wrap" }}>
                {props.coach ? props.coach.career : ""}
              </pre>
            </h4>
            <br />
            <pre style={{ whiteSpace: "pre-wrap" }}>
              {props.coach ? props.coach.story : ""}
            </pre>
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
    </div>
  );
}

export default ModalCoach2;
