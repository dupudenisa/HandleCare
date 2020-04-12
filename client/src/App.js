import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import AddPatient from "./components/add-patient.component";
import Patient from "./components/patient.component";
import PatientsList from "./components/patients-list.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand navbar-dark bg-dark">
            <a href="/patients" className="navbar-brand">
              api
            </a>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/patients"} className="nav-link">
                  patients
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/add"} className="nav-link">
                  Add
                </Link>
              </li>
            </div>
          </nav>

          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/patients"]} component={PatientsList} />
              <Route exact path="/add" component={AddPatient} />
              <Route path="/patients/:id" component={Patient} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}


export default App;
