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
            제목 코치 김계란
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>코치 소개하기</h4>
          {/* 좌측 코치 사진 */}
          {/* <img src={props.src} /> */}
          {/* 우측 코치 경력 */}
          <p>
            좋아~ 아주 좋아~좋아~ 아주 좋아~좋아~ 아주 좋아~좋아~ 아주
            좋아~좋아~ 아주 좋아~좋아~ 아주 좋아~좋아~ 아주 좋아~좋아~ 아주
            좋아~좋아~ 아주 좋아~좋아~ 아주 좋아~좋아~ 아주 좋아~좋아~ 아주
            좋아~좋아~ 아주 좋아~좋아~ 아주 좋아~좋아~ 아주 좋아~좋아~ 아주
            좋아~좋아~ 아주 좋아~좋아~ 아주 좋아~좋아~ 아주 좋아~좋아~ 아주
            좋아~좋아~ 아주 좋아~좋아~ 아주 좋아~
          </p>
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
