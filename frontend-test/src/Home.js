import React from "react";
import "./static/css/Home.css";

import MainFooter from "./components/MainFooter";

import { Link } from "react-router-dom";

function Home() {
  const MainFooter2 = MainFooter;

  return (
    <div className="home">
      {/* <!-- Masthead--> */}
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
            <Link to={"/main"}>
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
              <h2 className="text-white mb-4">Built with Bootstrap 4</h2>
              <p className="text-white-50">
                Grayscale is a free Bootstrap theme created by Start Bootstrap.
                It can be yours right now, simply download the template on
                <a href="https://startbootstrap.com/template-overviews/grayscale/">
                  the preview page
                </a>
                . The theme is open source, and you can use it for any purpose,
                personal or commercial.
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
        <div className="container">
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
      <section className="signup-section" id="signup">
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
      </section>
      {/* <!-- Contact--> */}
      <section className="contact-section bg-black">
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
      </footer>
      {/* footer */}
      <MainFooter2 />
    </div>
  );
}

export default Home;
