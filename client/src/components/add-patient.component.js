import React, { Component } from "react";
import PatientDataService from "../services/patient.service";

export default class AddPatient extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeAge = this.onChangeAge.bind(this);
    this.savePatient = this.savePatient.bind(this);
    this.newPatient = this.newPatient.bind(this);

    this.state = {
      id: null,
      name: "",
      age: "", 
      currentResident: true,

      submitted: false
    };
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeAge(e) {
    this.setState({
      age: e.target.value
    });
  }

  savePatient() {
    var data = {
      name: this.state.name,
      age: this.state.age
    };

    PatientDataService.create(data)
      .then(response => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          age: response.data.age,
          currentResident: response.data.currentResident,

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newPatient() {
    this.setState({
      id: null,
      name: "",
      age: "",
      currentResident: true,

      submitted: false
    });
  }

  render() {
    return (
        <div className="submit-form">
          {this.state.submitted ? (
            <div>
              <h4>You submitted successfully!</h4>
              <button className="btn btn-success" onClick={this.newPatient}>
                Add
              </button>
            </div>
          ) : (
            <div>
              <div className="form-group">
                <label htmlFor="Name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  required
                  value={this.state.name}
                  onChange={this.onChangeName}
                  name="Name"
                />
              </div>
  
              <div className="form-group">
                <label htmlFor="Age">Age</label>
                <input
                  type="text"
                  className="form-control"
                  id="Age"
                  required
                  value={this.state.age}
                  onChange={this.onChangeAge}
                  name="Age"
                />
              </div>
  
              <button onClick={this.savePatient} className="btn btn-success">
                Submit
              </button>
            </div>
          )}
        </div>
      );
    }
}