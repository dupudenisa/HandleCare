import React, { Component } from 'react';
import MaterialTable from 'material-table';
import PatientDataService from '../../services/patient.service';

export default class Data extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { title: 'ID', field: 'id' },
        { title: 'Name', field: 'name' },
        { title: 'Current', field: 'currentResident' },
        { title: 'Food', field: 'food' },
        { title: 'Sleep', field: 'sleep' },
        { title: 'Exersize', field: 'exersize' },
        { title: 'Communication', field: 'communication' },

      ],
      data: [],

    };
  }

  componentDidMount() {
    this.retrieveData();
  }

  retrieveData() {
    PatientDataService.getAll()
      .then(response => {
        this.setState({
          data: response.data
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {

    const { columns, data } = this.state;

    return (
      <MaterialTable
        title="Patients"
        columns={columns}
        data={data}


        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();

                const data = [this.state.data];
                data.push(newData);

                PatientDataService.create(newData)
                .then(response => {
                  this.retrieveData();
                })
                .catch(error => {
                  console.log(error.message)

                })

              }, 100);

            }),



          onRowUpdate: (newData, oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();
                if (oldData) {

                  const data = [this.state.data];
                  data[data.indexOf(oldData)] = newData;
                  

                  PatientDataService.update(oldData.id, newData)
                    .then(response => {
                      this.retrieveData();
                    })
                    .catch(error => {
                      console.log(error.message)

                    })
                }
              }, 100);
            
            }),
            
          onRowDelete: (oldData) =>
            new Promise((resolve) => {
              setTimeout(() => {
                resolve();

                const data = [this.state.data];
                data.splice(data.indexOf(oldData), 1);

                PatientDataService.delete(oldData.id)
                  .then(response => {
                    this.retrieveData();
                  })
                  .catch(error => {
                    console.log(error.message)

                  })
              }, 100);
            }),
        }}
        
      />
      
    );
        
    
  }
}
