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
  let querry = window.location.search.split("?").slice(1, 2).join();
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
        {querry ? <Redirect to={process.env.PUBLIC_URL + querry} /> : <></>}
        <Header />
        <section className="nav-uncheck min-h-screen bg-light-401">
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + "/"} component={Home} />
            <Route
              path={process.env.PUBLIC_URL + "/project"}
              render={() => {
                return (
                  <>
                    <Project />
                  </>
                );
              }}
            />
            <Route
              path={process.env.PUBLIC_URL + "/tutorial"}
              render={() => {
                return (
                  <>
                    <Tutorial />
                  </>
                );
              }}
            />
            <Route
              exact
              path={process.env.PUBLIC_URL + "/team"}
              component={Team}
            />
            <Redirect to={process.env.PUBLIC_URL + "/"} />
          </Switch>
          <Footer />
        </section>
      </Router>
    </>
  );
}

export default App;
