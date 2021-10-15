import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Header } from "./containers/Header";
import { Footer } from "./containers/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style/style.css";
import { Home } from "./containers/body/Home";
import { Project } from "./containers/body/Project";
import { Tutorial } from "./containers/body/Tutorial";
import { Team } from "./containers/body/Team";

function App() {
  useEffect(() => {
    document.querySelectorAll(".nav-uncheck").forEach((element) =>
      element.addEventListener("click", () => {
        document.getElementById("check").checked = false;
      })
    );
  }, []);

  return (
    <>
      <Router>
        <Header />
        <section className="nav-uncheck min-h-screen bg-light-401">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/project"
              render={() => {
                return (
                  <>
                    <Project />
                  </>
                );
              }}
            />
            <Route
              path="/tutorial"
              render={() => {
                return (
                  <>
                    <Tutorial />
                  </>
                );
              }}
            />
            <Route exact path="/team" component={Team} />
            <Redirect to="/" />
          </Switch>
          <Footer />
        </section>
      </Router>
    </>
  );
}

export default App;
