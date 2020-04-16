import React from 'react';
import { Bar } from 'react-chartjs-2';
import PatientDataService from '../../services/patient.service';


const state = {
    PatientInfo: [],

    labels: ['Food', 'Sleep', 'Exersize',
        'Communication'],
    datasets: [
        {
            label: 'Progress',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 1,

            data: []
        }
    ],

}

function getPatientName(patientName){

    

}

function getPatientInfo(){

    this.PatientInfo = PatientDataService.findByName();

}

export default class Progress extends React.Component {
    render() {
        return (
            <div>
                <Bar
                    data={state}
                    options={{

                        scales: {
                            yAxes: [{
                                ticks: {
                                    max: 100,
                                    min: 0,
                                    stepSize: 10
                                }
                            }]
                        },

                        title: {
                            display: true,
                            text: 'Total Progress',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'left'
                        }
                    }}
                />
            </div>
        );
    }
}

