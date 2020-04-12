import React, { Component } from "react";
import PatientDataService from "../services/patient.service";
import { Link } from "react-router-dom";

export default class PatientsList extends Component {
  constructor(props) {
    super(props);
    this.onChangeSearchName = this.onChangeSearchName.bind(this);
    this.retrievePatients = this.retrievePatients.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActivePatient = this.setActivePatient.bind(this);
    this.removeAllPatients = this.removeAllPatients.bind(this);
    this.searchName = this.searchName.bind(this);

    this.state = {
      Patients: [],
      currentPatient: null,
      currentIndex: -1,
      searchName: ""
    };
  }

  componentDidMount() {
    this.retrievePatients();
  }

  onChangeSearchName(e) {
    const searchName = e.target.value;

    this.setState({
      searchName: searchName
    });
  }

  retrievePatients() {
    PatientDataService.getAll()
      .then(response => {
        this.setState({
          Patients: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrievePatients();
    this.setState({
      currentPatient: null,
      currentIndex: -1
    });
  }

  setActivePatient(Patient, index) {
    this.setState({
      currentPatient: Patient,
      currentIndex: index
    });
  }

  removeAllPatients() {
    PatientDataService.deleteAll()
      .then(response => {
        console.log(response.data);
        this.refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  }

  searchName() {
    PatientDataService.findByName(this.state.searchName)
      .then(response => {
        this.setState({
          Patients: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { searchName, Patients, currentPatient, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Name"
              value={searchName}
              onChange={this.onChangeSearchName}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={this.searchName}
              >
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Patients List</h4>

          <ul className="list-group">
            {Patients &&
              Patients.map((Patient, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActivePatient(Patient, index)}
                  key={index}
                >
                  {Patient.name}
                </li>
              ))}
          </ul>

          <button
            className="m-3 btn btn-sm btn-danger"
            onClick={this.removeAllPatients}
          >
            Remove All
          </button>
        </div>
        <div className="col-md-6">
          {currentPatient ? (
            <div>
              <h4>Patient</h4>
              <div>
                <label>
                  <strong>Name:</strong>
                </label>{" "}
                {currentPatient.name}
              </div>
              <div>
                <label>
                  <strong>Age:</strong>
                </label>{" "}
                {currentPatient.age}
              </div>
              <div>
                <label>
                  <strong>Status:</strong>
                </label>{" "}
                {currentPatient.currentResident ? "Yes" : "No"}
              </div>

              <Link
                to={"/patients/" + currentPatient.id}
                className="badge badge-warning"
              >
                Edit
              </Link>
            </div>
          ) : (
            <div>
              <br />
              <p>Please click on a Patient...</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}