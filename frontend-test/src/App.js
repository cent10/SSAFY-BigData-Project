import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  // Link,
  // Redirect,
} from "react-router-dom";

import Home from "./Home";
import Main from "./Main";
import Video from "./components/Video";
import Login from "./components/LoginComponent";
import MainNav from "./components/MainNav";
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
  const MainNav2 = MainNav;

  return (
    <Router>
      <header>
        <MainNav2 isLoggedIn={false} />
      </header>
      <Switch>
        <Route exact path="/" component={Home2} />

        {/* 밑에 AuthRoute 랑 겹쳐서 2개가 나온다 */}
        {/* <Route exact path="/main" component={Main} /> */}

        <Route path="/login" component={Login2}/>
        <Route path="/signup" component={SignUp}/>
        <RegiRoute path="/signup2" component={SignUp2}/>
        <RegiRoute path="/servey" component={Servey}/>
        <RegiRoute path="/measures" component={Measures}/>

        <AuthRoute path="/main" component={Main2}/>

        <Route exact path="/video/:videoUrl" component={Video2} />

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
