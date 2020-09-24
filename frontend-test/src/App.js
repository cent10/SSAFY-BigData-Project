import React, {useState} from "react";

import {
  BrowserRouter as Router,
  Route,
  // Switch,
  // Link,
  // Redirect,
} from "react-router-dom";

import Home from "./Home";
import Main from "./Main";
import Video from "./components/Video";
import Login from "./components/Login"
import MainNav from "./components/MainNav";
// 로그인 인증
import { signIn } from './components/auth';
import AuthRoute from './components/AuthRoute';

function App() {
  const [user, setUser] = useState(null);
  const authenticated = user != null;

  const login = ({ email, password }) => setUser(signIn({ email, password }));
  const logout = () => setUser(null);

  return (
    <Router>
      <header>
        <MainNav isLoggedIn={user} logout={logout} />  
      </header>
      <Route exact path="/" component={Home} />
      <Route exact path="/main" component={Main} />
      <Route
            path="/login"
            render={props => (
              <Login authenticated={authenticated} login={login} {...props} />
            )}
      />
      <AuthRoute
            authenticated={authenticated}
            path="/main"
            render={props => <Main user={user} {...props} />}
      />
      <Route exact path="/video/:videoUrl" component={Video} />
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
