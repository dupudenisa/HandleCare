import React, { Component } from "react";
import PatientDataService from "../services/patient.service";

export default class Patient extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.getPatient = this.getPatient.bind(this);
    this.updateCurrentResident = this.updateCurrentResident.bind(this);
    this.updatePatient = this.updatePatient.bind(this);
    this.deletePatient = this.deletePatient.bind(this);

    this.state = {
      currentPatient: {
        id: null,
        name: "",
        age: "",
        currentResident: false
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getPatient(this.props.match.params.id);
  }

  onChangeName(e) {
    const name = e.target.value;

    this.setState(function(prevState) {
      return {
        currentPatient: {
          ...prevState.currentPatient,
          name: name
        }
      };
    });
  }

  onChangeAge(e) {
    const age = e.target.value;
    
    this.setState(prevState => ({
      currentPatient: {
        ...prevState.currentPatient,
        age: age
      }
    }));
  }

  getPatient(id) {
    PatientDataService.get(id)
      .then(response => {
        this.setState({
          currentPatient: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updateCurrentResident(status) {
    var data = {
      id: this.state.currentPatient.id,
      name: this.state.currentPatient.name,
      age: this.state.currentPatient.age,
      currentResident: status
    };

    PatientDataService.update(this.state.currentPatient.id, data)
      .then(response => {
        this.setState(prevState => ({
          currentPatient: {
            ...prevState.currentPatient,
            currentResident: status
          }
        }));
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  updatePatient() {
    PatientDataService.update(
      this.state.currentPatient.id,
      this.state.currentPatient
    )
      .then(response => {
        console.log(response.data);
        this.setState({
          message: "The Patient was updated successfully!"
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  deletePatient() {    
    PatientDataService.delete(this.state.currentPatient.id)
      .then(response => {
        console.log(response.data);
        this.props.history.push('/Patients')
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentPatient } = this.state;

    return (
      <div>
        {currentPatient ? (
          <div className="edit-form">
            <h4>Patient</h4>
            <form>
              <div className="form-group">
                <label htmlFor="name">name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={currentPatient.name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="form-group">
                <label htmlFor="age">age</label>
                <input
                  type="text"
                  className="form-control"
                  id="age"
                  value={currentPatient.age}
                  onChange={this.onChangeAge}
                />
              </div>

              <div className="form-group">
                <label>
                  <strong>Status:</strong>
                </label>
                {currentPatient.currentResident ? "currentResident" : "Pending"}
              </div>
            </form>

            {currentPatient.currentResident ? (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updateCurrentResident(false)}
              >
                Remove as Current Resident
              </button>
            ) : (
              <button
                className="badge badge-primary mr-2"
                onClick={() => this.updateCurrentResident(true)}
              >
                Set as Current Resident
              </button>
            )}

            <button
              className="badge badge-danger mr-2"
              onClick={this.deletePatient}
            >
              Delete
            </button>

            <button
              type="submit"
              className="badge badge-success"
              onClick={this.updatePatient}
            >
              Update
            </button>
            <p>{this.state.message}</p>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Patient...</p>
          </div>
        )}
      </div>
    );
  }
}