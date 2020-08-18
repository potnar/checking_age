import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import Register from "./components/Register";
import Content from "./components/Content";
import Layout from "./components/Layout";

class WorkTask extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar title="Work Task" />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/register" component={Register} />
              <Route path="/content" component={Content} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
}

export default WorkTask;
