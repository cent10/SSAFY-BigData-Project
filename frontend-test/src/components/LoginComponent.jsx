import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService.js";
import { Link } from "react-router-dom";
import "../static/css/login.css";

class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: sessionStorage.getItem("authenticatedId") || "",
      password: "",
      token: sessionStorage.getItem("token") || "",
      hasLoginFailed: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  loginClicked() {
    AuthenticationService.executeJwtAuthenticationService(
      this.state.id,
      this.state.password
    )
      .then((response) => {
        this.setState({
          token: response.headers["jwt-auth-token"],
        });
        AuthenticationService.registerSuccessfulLoginForJwt(
          this.state.id,
          this.state.token
        );
        this.props.history.push("/main");
      })
      .catch(() => {
        this.setState({ hasLoginFailed: true });
      });
  }

  render() {
    return (
      <div>
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
              {/* <h2 className="text-white-50 mx-auto mt-2 mb-5 buttonDiv">Login</h2> */}
              <input
                className="inputButton"
                value={this.state.id}
                onChange={this.handleChange}
                type="text"
                name="id"
                placeholder="ID"
              />
              <input
                className="inputButton"
                value={this.state.password}
                onChange={this.handleChange}
                type="password"
                name="password"
                placeholder="password"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    this.loginClicked();
                  }
                }}
              />
              {this.state.hasLoginFailed && (
                <span className="loginFail">
                  아이디와 비밀번호를 확인해주세요!!
                </span>
              )}
              <div>
                <button
                  className="inputButton"
                  onClick={this.loginClicked}
                  style={{
                    outline: "none",
                    border: "none",
                    color: "#fff",
                    pointer: "cursor",
                    borderRadius: 10,
                    backgroundColor: "rgba(51, 51, 51, 0.5)",
                    display: "inline-block",
                  }}
                >
                  로그인
                </button>
                {/* <Link to={"/signup"}> */}
                <button
                  className="inputButton"
                  onClick={() => this.props.history.push("/signup")}
                  style={{
                    outline: "none",
                    border: "none",
                    color: "#fff",
                    pointer: "cursor",
                    borderRadius: 10,
                    backgroundColor: "rgba(51, 51, 51, 0.5)",
                    display: "inline-block",
                  }}
                >
                  아이디가 없으신가요?
                </button>
                {/* </Link> */}
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default LoginComponent;
