import axios from "axios";
import React from "react";
import { Modal, Button } from "react-bootstrap";

import Profile1 from "../static/assets/Archive2/1.png";
import Profile2 from "../static/assets/Archive2/2.png";
import Profile3 from "../static/assets/Archive2/3.png";
import Profile4 from "../static/assets/Archive2/4.png";
import Profile5 from "../static/assets/Archive2/5.png";
import Profile6 from "../static/assets/Archive2/6.png";
import Profile7 from "../static/assets/Archive2/7.png";
import Profile8 from "../static/assets/Archive2/8.png";
import Profile9 from "../static/assets/Archive2/9.png";

function ModalChangeImg(props) {
  function fetchUserProfile(num){
    console.log(sessionStorage.getItem('authenticatedId'))
    console.log(num)
    axios.put(`http://j3a501.p.ssafy.io:8888/pts/users/`+sessionStorage.getItem("authenticatedId"), {
      id: sessionStorage.getItem("authenticatedId"),
      profile : num
    }).then((response) => {
      console.log(response)
    })
    .catch((e) => {
      console.log(e)
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
            <h4>이미지 변경</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
              src={Profile1}
              alt="Avatar"
              className="nav__avatar"
              onClick={() => {
                fetchUserProfile(1)
                props.onSetting(Profile1)
              }}
              style={{ width: 150, height: 150 }}
            />
          <img
              src={Profile2}
              alt="Avatar"
              className="nav__avatar"
              onClick={() => {
                fetchUserProfile(2)
                props.onSetting(Profile2)
              }}
              style={{ width: 150, height: 150 }}
            />
          <img
              src={Profile3}
              alt="Avatar"
              className="nav__avatar"
              onClick={() => {
                fetchUserProfile(3)
                props.onSetting(Profile3)
              }}
              style={{ width: 150, height: 150 }}
            />
          <img
              src={Profile4}
              alt="Avatar"
              className="nav__avatar"
              onClick={() => {
                fetchUserProfile(4)
                props.onSetting(Profile4)
              }}
              style={{ width: 150, height: 150 }}
            />
          <img
              src={Profile5}
              alt="Avatar"
              className="nav__avatar"
              onClick={() => {
                fetchUserProfile(5)
                props.onSetting(Profile5)
              }}
              style={{ width: 150, height: 150 }}
            />
          <img
              src={Profile6}
              alt="Avatar"
              className="nav__avatar"
              onClick={() => {
                fetchUserProfile(6)
                props.onSetting(Profile6)
              }}
              style={{ width: 150, height: 150 }}
            />
          <img
              src={Profile7}
              alt="Avatar"
              className="nav__avatar"
              onClick={() => {
                fetchUserProfile(7)
                props.onSetting(Profile7)
              }}
              style={{ width: 150, height: 150 }}
            />
          <img
              src={Profile8}
              alt="Avatar"
              className="nav__avatar"
              onClick={() => {
                fetchUserProfile(8)
                props.onSetting(Profile8)
              }}
              style={{ width: 150, height: 150 }}
            />
          <img
              src={Profile9}
              alt="Avatar"
              className="nav__avatar"
              onClick={() => {
                fetchUserProfile(9)
                props.onSetting(Profile9)
              }}
              style={{ width: 150, height: 150 }}
            />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalChangeImg;
