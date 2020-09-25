import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";

import axios from "axios";

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
            {/* <img style={{ display: "inline" }} src={props.coach.src} /> */}
            <img
              style={{ float: "left", width: 400, height: 400 }}
              src={
                "data:image/jpeg;base64,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"
              }
            />
            {/* 우측 코치 경력 */}
            <div style={{ float: "left", width: 20, height: 400 }}></div>
            <div>
              <h2>{props.coach.uid} 코치</h2>
              <h4>{props.coach.career}</h4>
              <br />
              <p>
                클래스 설명 클래스 설명 클래스 설명 클래스 설명 클래스 설명
                클래스 설명 클래스 설명 클래스 설명 클래스 설명 클래스 설명
                클래스 설명 클래스 설명 클래스 설명 클래스 설명 클래스 설명
                클래스 설명 클래스 설명 클래스 설명 클래스 설명 클래스 설명
                클래스 설명 클래스 설명 클래스 설명 클래스 설명 클래스 설명
                클래스 설명 클래스 설명 클래스 설명 클래스 설명 클래스 설명
                클래스 설명 클래스 설명 클래스 설명 클래스 설명 클래스 설명
                클래스 설명 클래스 설명
              </p>
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
