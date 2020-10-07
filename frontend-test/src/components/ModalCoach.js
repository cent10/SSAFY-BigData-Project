import React, { useEffect, useState } from "react";

import { Modal, Button } from "react-bootstrap";

import Alert from "react-bootstrap/Alert";

import axios from "axios";

function ModalCoach(props) {
  // console.log(props.coach.career);

  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {props.show2 && (
          <Alert
            variant="info"
            onClose={() => {
              props.closeShow2();
            }}
            dismissible
          >
            <Alert.Heading>{props.name} 코치님께 연락되었습니다.</Alert.Heading>
          </Alert>
        )}
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
          <Button
            variant="danger"
            onClick={props.onHide}
            style={{ height: 38, verticalAlign: "middle" }}
          >
            <span>닫기</span>
          </Button>
          {/* 함수 설정할 것 */}
          <Button
            variant="info"
            onClick={() => {
              props.onShow2(true);
              axios.post(
                "http://j3a501.p.ssafy.io:8888/pts/coaches/contacts",
                {
                  coachId: props.coach.uid,
                  uid: props.uid,
                },
                null
              );
            }}
            style={{ height: 38, verticalAlign: "middle" }}
          >
            <span>연락하기</span>
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalCoach;
