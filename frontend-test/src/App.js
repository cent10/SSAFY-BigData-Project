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
  const Home2 = Home;
  const Main2 = Main;
  const Video2 = Video;
  return (
    <Router>
      <Route exact path="/" component={Home2} />
      <Route exact path="/main" component={Main2} />
      <Route exact path="/video/:videoUrl" component={Video2} />
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
