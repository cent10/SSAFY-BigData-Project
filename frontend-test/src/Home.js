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
        style={{ position: "fixed", right: 20, bottom: 20 }}
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
              <button className="start-button">시작하기</button>
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
                <h4>Shoreline</h4>
                <p className="text-black-50 mb-0">
                  Grayscale is open source and MIT licensed. This means you can
                  use it for any project - even commercial projects! Download
                  it, customize it, and publish your website!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="projects-section bg-light" id="projects">
        <div
          className="container"
          style={{ margin: "auto", padding: "2rem 0" }}
        >
          {/* <!-- Project One Row--> */}
          <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src={require("./static/assets/img/demo-image-01.jpg")}
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-left">
                    <h4 className="text-white">Misty</h4>
                    <p className="mb-0 text-white-50">
                      An example of where you can put an image of a project, or
                      anything else, along with a description.
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
              />
            </div>
            <div className="col-lg-6 order-lg-first">
              <div className="bg-black text-center h-100 project">
                <div className="d-flex h-100">
                  <div className="project-text w-100 my-auto text-center text-lg-right">
                    <h4 className="text-white">Mountains</h4>
                    <p className="mb-0 text-white-50">
                      Another example of a project with its respective
                      description. These sections work well responsively as
                      well, try this theme on a small screen!
                    </p>
                    <hr className="d-none d-lg-block mb-0 mr-0" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Signup--> */}
      {/* <section className="signup-section" id="signup">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-lg-8 mx-auto text-center">
              <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
              <h2 className="text-white mb-5">Subscribe to receive updates!</h2>
              <form className="form-inline d-flex">
                <input
                  className="form-control flex-fill mr-0 mr-sm-2 mb-3 mb-sm-0"
                  id="inputEmail"
                  type="email"
                  placeholder="Enter email address..."
                />
                <button className="btn btn-primary mx-auto" type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- Contact--> */}
      {/* <section className="contact-section bg-black">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Address</h4>
                  <hr className="my-4" />
                  <div className="small text-black-50">
                    4923 Market Street, Orlando FL
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-envelope text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Email</h4>
                  <hr className="my-4" />
                  <div className="small text-black-50">
                    <a href="#!">hello@yourdomain.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <div className="card py-4 h-100">
                <div className="card-body text-center">
                  <i className="fas fa-mobile-alt text-primary mb-2"></i>
                  <h4 className="text-uppercase m-0">Phone</h4>
                  <hr className="my-4" />
                  <div className="small text-black-50">+1 (555) 902-8832</div>
                </div>
              </div>
            </div>
          </div>
          <div className="social d-flex justify-content-center">
            <a className="mx-2" href="#!">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="mx-2" href="#!">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="mx-2" href="#!">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </section>
      <footer className="footer bg-black small text-center text-white-50">
        <div className="container">Copyright © 멋진 신사들</div>
      </footer> */}
      {/* footer */}
      <MainFooter2 />
    </div>
  );
}

export default Home;
