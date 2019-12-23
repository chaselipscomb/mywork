import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './style.css';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import NewLanding from "./pages/NewLanding";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <Router>
    <React.Fragment>
      <Route component={Sidebar} />
      <Switch>
      <Route exact path="mywork/" component={NewLanding} />
      <Route exact path="mywork/About" component={About} />
      <Route exact path="mywork/Portfolio" component={Portfolio} />
      <Route exact path="mywork/Skills" component={Skills} />
      <Route exact path="mywork/Contact" component={Contact} />
      </Switch>
      </React.Fragment>
  </Router>
  );
}

export default App;
