import React, { useEffect, useState } from "react";

import axios from "axios";

import { Modal, Button } from "react-bootstrap";

function ModalClass(props) {
  const [coach, setCoach] = useState({});
  useEffect(() => {
    async function fetchCoach() {
      const request = await axios.get(
        `http://j3a501.p.ssafy.io:8888/pts/coaches/${props.coachId}`
      );
      console.log("asdf", request.data);
      setCoach(request.data);
      return request;
    }
    fetchCoach();
  }, []);

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
          <h4>{coach.uid} 코치</h4>
          <div>
            {/* 좌측 코치 사진 */}
            {/* <img src={coach.profile_photo} /> */}
            {/* 우측 코치 경력 */}
            <h4>{coach.career}</h4>
          </div>
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
