import React from "react";
import { Modal, Button } from "react-bootstrap";

import Badge from "react-bootstrap/Badge";

import axios from "axios";

function ModalClass(props) {
  console.log(props);

  function getFormatDate(date) {
    var year = date.getFullYear();
    var month = 1 + date.getMonth();
    month = month >= 10 ? month : "0" + month;
    var day = date.getDate();
    day = day >= 10 ? day : "0" + day;
    return year + "-" + month + "-" + day;
  }
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
          <Button
            variant="danger"
            onClick={props.onHide}
            style={{ height: 38, verticalAlign: "middle" }}
          >
            닫기
          </Button>
          {/* 함수 설정할 것 */}
          <Button
            variant="info"
            onClick={() => {
              window.open(
                "https://hangouts.google.com/call/" + props.coach.uid
              );
              var today = new Date();
              axios.post(
                "http://j3a501.p.ssafy.io:8888/pts/logs",
                {
                  day: getFormatDate(today),
                  point: 3,
                  uid: props.uid,
                },
                null
              );
            }}
            style={{ height: 38, verticalAlign: "middle" }}
          >
            참여하기
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalClass;
