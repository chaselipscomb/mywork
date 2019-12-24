import React, { Component } from 'react';
import { HashRouter, Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './style.css';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import NewLanding from "./pages/NewLanding";
import Sidebar from "./components/Sidebar";


class App extends Component {
  render() {
    return (
      <HashRouter basename="/">
        <div>

          <hr />
          <Route component={Sidebar} />
          <Route exact path="/" component={NewLanding} />
          <Route path="/About" component={About} />
          <Route path="/Skills" component={Skills} />
          <Route path="/Portfolio" component={Portfolio} />

        </div>
      </HashRouter>
      // <Router>
      //   <React.Fragment>
      //     {/* <Route component={Sidebar} /> */}
      //     {/* <Route exact path="/mywork/About" component={ About} /> */}
      //     <Route>
      //       <Route component={Sidebar} />
      //       <Route component={Skills} />
      //       <Route path="/" component={NewLanding} />
      //       <Route path="/Skills" component={Skills} />
      //       <Route path="/mywork/Skills" component={Skills} />
      //       <Route path="/mywork/portfolio" component={Skills} />


            
            
      //       <Route path="/About">
      //         <About />
      //       </Route>
      //       <Route path="/mywork/About">
      //         <About />
      //       </Route>

      //       {/* <Switch>
      //         <Route exact path="/" component={NewLanding} />
      //         <Route exact path="/mywork/About" component={About} />
      //         <Route exact path="/mywork/Portfolio" component={Portfolio} />
      //         <Route exact path="/mywork/Skills" component={Skills} />
      //         <Route exact path="/mywork/Contact" component={Contact} />
      //       </Switch> */}
      //     </Route>
      //   </React.Fragment>
      // </Router>
    );
  }
}

export default App;
