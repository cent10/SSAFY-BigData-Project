import React, { useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  // Switch,
  // Link,
  // Redirect,
} from "react-router-dom";

import Home from "./Home";
import Main from "./Main";
import Search from "./Search";
import Video from "./components/Video";
import Login from "./components/Login";
import MainNav from "./components/MainNav";

import Sorry from "./Sorry";

// 로그인 인증
import { signIn } from "./components/auth";
import AuthRoute from "./components/AuthRoute";

function App() {
  const [user, setUser] = useState(null);
  const authenticated = user != null;

  const login = ({ email, password }) => setUser(signIn({ email, password }));
  const logout = () => setUser(null);

  const Home2 = Home;
  const Main2 = Main;
  const Video2 = Video;
  const Login2 = Login;
  const Search2 = Search;
  const MainNav2 = MainNav;

  const Sorry2 = Sorry;

  const windowWidth = window.innerWidth;

  return (
    <Router>
      <header>
        {windowWidth > 992 && <MainNav2 isLoggedIn={user} logout={logout} />}
      </header>

      <Route exact path="/" component={windowWidth > 992 ? Home2 : Sorry2} />

      {/* 밑에 AuthRoute 랑 겹쳐서 2개가 나온다 */}
      {/* <Route exact path="/main" component={Main} /> */}

      <Route
        path="/login"
        render={(props) => (
          <Login2 authenticated={authenticated} login={login} {...props} />
        )}
      />

      <AuthRoute
        authenticated={authenticated}
        path="/main"
        render={(props) => <Main2 user={user} {...props} />}
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
