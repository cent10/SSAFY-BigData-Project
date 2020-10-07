import axios from "axios";

class AuthenticationService {
  // send id, password to the SERVER
  executeJwtAuthenticationService(id, password) {
    return axios.post("http://j3a501.p.ssafy.io:8888/pts/users/login", {
      id,
      password,
    });
  }

  duplicateCheck(id) {
    console.log(id);
    return axios.get("http://j3a501.p.ssafy.io:8888/pts/users/" + id);
  }

  executeRegisterService(id, password, name) {
    sessionStorage.setItem("registeringId", id);
    sessionStorage.setItem("password", password);
    sessionStorage.setItem("nickname", name);
  }

  executeRegisterService2(height, weight, birthYear, gender) {
    return axios.post(`http://j3a501.p.ssafy.io:8888/pts/users/`, {
      id: sessionStorage.getItem("registeringId"),
      password: sessionStorage.getItem("password"),
      nickname: sessionStorage.getItem("nickname"),
      height: height,
      weight: weight,
      birthYear: birthYear,
      gender: gender,
    });
  }

  executeServeyService(like, goal, dislike, is_solo, is_active) {
    return axios.post(`http://j3a501.p.ssafy.io:8888/pts/favorites`, {
      uid: sessionStorage.getItem("registeringId"),
      like: like,
      goal: goal,
      dislike: dislike,
      solo: is_solo,
      active: is_active,
    });
  }

  executeMesureService(
    sitUp,
    pushUp,
    squat,
    runningJump,
    standingJump,
    twistSitUp
  ) {
    return axios.post(`http://j3a501.p.ssafy.io:8888/pts/measures`, {
      uid: sessionStorage.getItem("registeringId"),
      sitUp: sitUp,
      pushUp: pushUp,
      squat: squat,
      runningJump: runningJump,
      standingJump: standingJump,
      twistSitUp: twistSitUp,
    });
  }

  registerSuccessfulLoginForJwt(id, token) {
    console.log("===registerSuccessfulLoginForJwt===");
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("authenticatedId", id);
    this.setupAxiosInterceptors();
  }

  createJWTToken(token) {
    return token;
  }

  setupAxiosInterceptors() {
    axios.interceptors.request.use(
      (config) => {
        const token = sessionStorage.getItem("token");
        if (token) {
          config.headers["jwt-token"] = token;
        }
        // config.headers['Content-Type'] = 'application/json';
        return config;
      },
      (error) => {
        Promise.reject(error);
      }
    );
  }

  logout() {
    sessionStorage.removeItem("authenticatedId");
    sessionStorage.removeItem("token");
  }

  SuccessRegister() {
    sessionStorage.removeItem("registeringId");
    sessionStorage.removeItem("password");
    sessionStorage.removeItem("nickname");
  }

  isUserLoggedIn() {
    const token = sessionStorage.getItem("token");

    if (token) {
      return true;
    }
    return false;
  }

  isRegistering() {
    const registeringId = sessionStorage.getItem("registeringId");
    if (registeringId) {
      return true;
    }
    return false;
  }

  getLoggedInid() {
    let user = sessionStorage.getItem("authenticatedId");
    if (user === null) return "";
    return user;
  }
}

export default new AuthenticationService();
