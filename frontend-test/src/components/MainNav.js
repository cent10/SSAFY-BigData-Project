import React, { useEffect, useState } from "react";
import logo from "../static/image/logo.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import cardSearch from "@iconify/icons-mdi/card-search";
import ModalUser from "./ModalUser";
import { withRouter } from "react-router-dom";
import AuthenticationService from "./AuthenticationService.js";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import "../static/css/MainNav.css";

import axios from "axios";

import Profile1 from "../static/assets/Archive2/1.png";
import Profile2 from "../static/assets/Archive2/2.png";
import Profile3 from "../static/assets/Archive2/3.png";
import Profile4 from "../static/assets/Archive2/4.png";
import Profile5 from "../static/assets/Archive2/5.png";
import Profile6 from "../static/assets/Archive2/6.png";
import Profile7 from "../static/assets/Archive2/7.png";
import Profile8 from "../static/assets/Archive2/8.png";
import Profile9 from "../static/assets/Archive2/9.png";

function MainNav({ history }) {
  const [show, handleShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
  const [value, setValue] = useState(null);

  const uid = sessionStorage.getItem("authenticatedId");
  const [profile, setProfile] = useState(null);
  // const [user, setUser] = useState(null);
  const [nickname, setNickname] = useState(null);
  // logout handling
  // console.log(profile);

  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      const request = await axios.get(
        `http://j3a501.p.ssafy.io:8888/pts/users/${uid}`
      );
      setProfile(request.data.profile);
      setNickname(request.data.nickname);
      // setUser(request.data)

      const request2 = await axios.get(
        `http://j3a501.p.ssafy.io:8888/pts/coaches/contacts/${uid}`
      );
      setContact(request2.data);

      return request;
    }
    fetchProfile();

    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, [uid, modalShow]);

  function profile2(num) {
    if (num == "1") {
      return Profile1;
    } else if (num == "2") {
      return Profile2;
    } else if (num == "3") {
      return Profile3;
    } else if (num == "4") {
      return Profile4;
    } else if (num == "5") {
      return Profile5;
    } else if (num == "6") {
      return Profile6;
    } else if (num == "7") {
      return Profile7;
    } else if (num == "8") {
      return Profile8;
    } else if (num == "9") {
      return Profile9;
    } else {
      return Profile1;
    }
  }

  return (
    <div className={`nav__main ${show && "nav__white"}`}>
      {isUserLoggedIn && (
        <Link className="nav__linkmain" to={"/main"}>
          <img src={logo} alt="PTS logo" className="nav__logo" />
        </Link>
      )}
      {!isUserLoggedIn && (
        <Link className="nav__linkmain" to={"/"}>
          <img src={logo} alt="PTS logo" className="nav__logo" />
        </Link>
      )}

      <div className="nav__right">
        {!isUserLoggedIn && (
          <Link to={"/login"}>
            {/* {"로그인"} */}
            <button className="start-button">로그인</button>
          </Link>
        )}
        {isUserLoggedIn && (
          <InputGroup className="mb-3">
            <FormControl
              placeholder="검색어를 입력하세요"
              aria-label="검색어를 입력하세요"
              aria-describedby="basic-addon2"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  history.push("/search/" + value);
                  setValue("");
                }
              }}
              style={{ height: 38 }}
            />
            <InputGroup.Append
              onClick={() => {
                history.push("/search/" + value);
                setValue("");
              }}
              style={{ cursor: "pointer", height: 38 }}
            >
              <InputGroup.Text id="basic-addon2">검색</InputGroup.Text>
            </InputGroup.Append>
            &nbsp;
            {isUserLoggedIn && (
              <Link to={"/"} onClick={AuthenticationService.logout}>
                <button className="start-button">Logout</button>
              </Link>
            )}
            &nbsp;
            <img
              src={profile2(profile)}
              alt="Avatar"
              className="nav__avatar"
              /* my page modal */
              onClick={() => {
                setModalShow(true);
              }}
              style={{ width: 38, height: 38 }}
            />
          </InputGroup>
        )}
      </div>
      <ModalUser
        className="modal-user"
        show={modalShow}
        onHide={() => {
          setModalShow(false);
        }}
        nickname={nickname}
        profile={profile2(profile)}
        contact={contact}
      />
    </div>
  );
}

/* If you're using react router you need to wrap your component withRouter to have the history prop injected into your component. */
export default withRouter(MainNav);
