import axios from "axios";
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function ModalChangeNickname(props) {
  const [change, setChange] = useState("");

  function fetchUserNickname(nickname) {
    // console.log(sessionStorage.getItem("authenticatedId"));
    // console.log(num);
    axios
      .put(
        `http://j3a501.p.ssafy.io:8888/pts/users/` +
          sessionStorage.getItem("authenticatedId"),
        {
          id: sessionStorage.getItem("authenticatedId"),
          nickname: nickname,
        }
      )
      .then((response) => {
        // console.log(response);
      })
      .catch((e) => {
        // console.log(e);
      });
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
            <h4>닉네임 변경</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup className="mb-3">
            <FormControl
              placeholder={props.nickname}
              aria-describedby="basic-addon2"
              onChange={(e) => {
                setChange(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  fetchUserNickname(change);
                  props.onSetting(change);
                }
              }}
              style={{ height: 38 }}
            />
            <InputGroup.Append>
              <Button
                variant="outline-secondary"
                onClick={() => {
                  fetchUserNickname(change);
                  props.onSetting(change);
                }}
                style={{ height: 38, verticalAlign: "middle" }}
              >
                변경
              </Button>
            </InputGroup.Append>
          </InputGroup>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalChangeNickname;
