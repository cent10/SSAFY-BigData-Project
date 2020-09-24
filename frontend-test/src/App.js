import React from "react";

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

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/main" component={Main} />
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
