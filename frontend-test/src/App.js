import React, { useEffect } from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Link,
  // Redirect,
} from "react-router-dom";

import Home from "./Home";
import Main from "./Main";
import Search from "./Search";
import Video from "./components/Video";
import Login from "./components/LoginComponent";
import MainNav from "./components/MainNav";

import Sorry from "./Sorry";

// 로그인 인증
import AuthRoute from "./components/AuthenticatedRoute";
import RegiRoute from "./components/RegisteredRoute";
// 회원가입
import SignUp from "./components/SignUp";
import SignUp2 from "./components/SignUp2";
import Servey from "./components/Servey";
import Measures from "./components/measures";

function App() {
  const Home2 = Home;
  const Main2 = Main;
  const Video2 = Video;
  const Login2 = Login;
  const Search2 = Search;
  const MainNav2 = MainNav;

  const Sorry2 = Sorry;

  var windowWidth = window.innerWidth;

  useEffect(() => {
    window.addEventListener(
      "resize",
      function () {
        windowWidth = window.innerWidth;
        console.log("innerWidth", windowWidth);
        if (windowWidth > 922) {
          // console.log("asdf", this);
          this.location.reload();
        } else {
          // console.log("qwer", this);
          this.location.reload();
        }
      },
      true
    );
    return () => window.removeEventListener("resize", function () {});
  });

  return (
    <Router>
      <header>{windowWidth > 992 && <MainNav2 />}</header>
      <Switch>
        {/* <Route exact path="/" component={Home2} /> */}

        <Route exact path="/" component={windowWidth > 992 ? Home2 : Sorry2} />

        <Route exact path="/sorry" component={Sorry2} />

        <Route path="/login" component={Login2} />
        <Route path="/signup" component={SignUp} />
        <RegiRoute path="/signup2" component={SignUp2} />
        <RegiRoute path="/servey" component={Servey} />
        <RegiRoute path="/measures" component={Measures} />

        {/* <AuthRoute path="/main" component={Main2} /> */}
        {/*  */}
        {/* <Route exact path="/video/:videoUrl" component={Video2} /> */}
        <AuthRoute
          path="/main"
          render={(props) =>
            windowWidth > 992 ? <Main2 {...props} /> : <Sorry2 />
          }
        />
        <Route
          exact
          path="/search/:keyword"
          component={windowWidth > 992 ? Search2 : Sorry2}
        />
        <Route
          exact
          path="/video/:videoUrl"
          component={windowWidth > 992 ? Video2 : Sorry2}
        />
      </Switch>
    </Router>
    // <Router>
    //   <div className="app">
    //     {/* <Home /> */}
    //     {/* <Main /> */}
    //   </div>
    //   <Switch>
    //     <Route exact path="/">
    //       <Home />
    //     </Route>
    //     <Route path="/main">
    //       <Main />
    //     </Route>
    //   </Switch>
    // </Router>
  );
}

export default App;
