import React from 'react';
import { Bar } from 'react-chartjs-2';
import PatientDataService from '../services/patient.service';
export default class Progress extends React.Component {

    constructor(props) {
        super(props);
        this.name = props.name;

        this.state = {
            PatientInfo: [],
            PatientName: [],

            labels: ['Food', 'Sleep', 'Exersize',
                'Communication'],
            datasets:
                [{
                    label: 'Progress',
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 1,
                    data: []
                }],
        }
    }

    componentDidMount() {
        this.getPatientInfo();

    }

    getPatientInfo() {

        PatientDataService.findByName(this.props.name)
            .then(response => {
                console.log(this.props.name)
                console.log(response.data);
                const data = [response.data[0].food, response.data[0].sleep, response.data[0].exersize, response.data[0].communication]
                this.setState({
                    datasets:
                        [{
                            label: 'Progress',
                            backgroundColor: 'rgba(75,192,192,1)',
                            borderColor: 'rgba(0,0,0,1)',
                            borderWidth: 1,
                            data: data
                        }],
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        return (
            <div>
                <Bar
                    data={this.state}
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

