import React, { useEffect } from "react";
import "./static/css/Home.css";

import MainFooter from "./components/MainFooter";

import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Home() {
  const MainFooter2 = MainFooter;

  const pageHeight = window.innerHeight;
  var position = window.scrollY;

  function handleScroll(e) {
    var scroll = window.scrollY;
    if (scroll > position) {
      if (scroll % pageHeight == 0) {
      } else if (scroll < pageHeight) {
        window.scroll({ top: pageHeight, behavior: "smooth" });
        // window.scrollTo(0, pageHeight);
      } else if (scroll < pageHeight * 2) {
        window.scroll({ top: pageHeight * 2, behavior: "smooth" });
        // window.scrollTo(0, pageHeight * 2);
      } else if (scroll < pageHeight * 3) {
        window.scroll({ top: pageHeight * 3, behavior: "smooth" });
        // window.scrollTo(0, pageHeight * 3);
      } else {
        window.scroll({ top: pageHeight * 4, behavior: "smooth" });
        // window.scrollTo(0, document.body.scrollHeight);
      }
    } else {
      if (scroll % pageHeight == 0) {
      } else if (scroll < pageHeight) {
        window.scroll({ top: 0, behavior: "smooth" });
        // window.scrollTo(0, 0);
      } else if (scroll < pageHeight * 2) {
        window.scroll({ top: pageHeight, behavior: "smooth" });
        // window.scrollTo(0, pageHeight);
      } else if (scroll < pageHeight * 3) {
        window.scroll({ top: pageHeight * 2, behavior: "smooth" });
        // window.scrollTo(0, pageHeight * 2);
      } else {
        window.scroll({ top: pageHeight * 3, behavior: "smooth" });
        // window.scrollTo(0, pageHeight * 3);
      }
    }
    position = scroll;
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className="home">
      {/* <!-- Masthead--> */}
      <Button
        variant="secondary"
        style={{
          position: "fixed",
          right: 20,
          bottom: 20,
          width: 38,
          height: 38,
        }}
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        ▲
      </Button>
      <header className="masthead" id="page-top">
        <div className="container d-flex h-100 align-items-center">
          <div className="mx-auto text-center">
            <h1 className="mx-auto my-0 text-uppercase">
              Persnal
              <br />
              Training
              <br />
              Service
            </h1>
            <h2 className="text-white-50 mx-auto mt-2 mb-5">
              온라인 고객 맞춤형 트레이닝 서비스 플랫폼
            </h2>
            <Link to={"/signup"}>
              {/* {"시작하기"} */}
              <button className="start-button">회원가입</button>
            </Link>
            {/* <a className="btn btn-primary js-scroll-trigger" href="#about">
              Log In
            </a> */}
          </div>
        </div>
      </header>
      {/* <!-- About--> */}
      <section className="about-section text-center" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <h2 className="text-white mb-4">PTS와 함께하세요</h2>
              <p className="text-white-50">
                PTS는 시공간의 제약을 받는 오프라인 영역의
                {/* <br /> */}
                PT와 GX에 빅데이터를 접목시켜
                {/* <br /> */}
                온라인에서 저렴한 가격으로 이용할 수 있는
                {/* <br /> */}
                고객 맞춤형 트레이닝 서비스 플랫폼입니다
              </p>
            </div>
          </div>
          <img
            className="img-fluid"
            src={require("./static/assets/img/ipad.png")}
            alt=""
          />
        </div>
      </section>
      {/* <!-- Projects--> */}
      <section className="projects-section bg-light" id="projects">
        <div
          className="container"
          style={{ margin: "auto", padding: "10rem 0" }}
        >
          {/* <!-- Featured Project Row--> */}

          <div className="row align-items-center no-gutters mb-4 mb-lg-5">
            <div className="col-xl-8 col-lg-7">
              <img
                className="img-fluid mb-3 mb-lg-0"
                src={require("./static/assets/img/bg-masthead.jpg")}
                alt=""
              />
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="featured-text text-center text-lg-left">
                <h4>PTS는</h4>
                <p className="text-black-50 mb-0">
                  당신의 신체를 점수로 시각화해줍니다
                  <br />
                  당신에게 필요한 운동비디오를 추천합니다
                  <br />
                  당신에게 필요한 운동 클래스를 추천합니다
                  <br />
                  당신과 잘 맞는 PT 코치를 추천합니다
                  <br />
                  당신이 건강하길 바랍니다
                  <br />
                  당신을 응원합니다
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="projects-section bg-light" id="projects">
        <div
          className="container"
          style={{ margin: "auto", padding: "6rem 0" }}
        >
          {/* <!-- Project One Row--> */}
          <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src={require("./static/assets/img/demo-image-01.jpg")}
                alt=""
                style={{ width: 500, marginLeft: 70 }}
              />
            </div>
            <div className="col-lg-6">
              <div
                className="bg-black text-center h-100 project"
                style={{ width: 500 }}
              >
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-left">
                    <h4 className="text-white">집에서도</h4>
                    <p className="mb-0 text-white-50">
                      당신에게 필요한 맞춤형 운동을 하세요
                      <br />
                      다른 사람들과 함께 운동을 하세요
                      <br />
                      내가 운동을 어떻게 하고 있는지 관리하세요
                    </p>

                    <hr className="d-none d-lg-block mb-0 ml-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Project Two Row--> */}
          <div className="row justify-content-center no-gutters">
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src={require("./static/assets/img/demo-image-02.jpg")}
                alt=""
                style={{ width: 500 }}
              />
            </div>
            <div className="col-lg-6 order-lg-first">
              <div
                className="bg-black text-center h-100 project"
                style={{ width: 500, marginLeft: 70 }}
              >
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-right">
                    <h4 className="text-white">PTS에서</h4>
                    <p className="mb-0 text-white-50">
                      당신이 어떤 신체유형인지 파악하세요
                      <br />
                      당신이 원하는 운동을 찾아보세요
                      <br />
                      당신과 잘 맞는 코치들을 만나세요
                      <br />더 건강한 모습으로 변화하세요
                      <br />
                      PTS는 당신을 응원합니다
                    </p>
                    <hr className="d-none d-lg-block mb-0 mr-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <MainFooter2 />
    </div>
  );
}

export default Home;
