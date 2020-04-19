import React from 'react';
import PatientDataService from '../../services/patient.service';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Progress from '../progress';

export default class DropDown extends React.Component {

    constructor(props) {
        super(props);


        this.state = {
            PatientInfo: [],
            PatientName: "",
            selectedPatient: 0,
            anchorEl: null,
        }

        this.name = this.state.PatientName
    }


    renderProgress = (PatientName) => {


        let myComponent;
        if (PatientName != "") {
            myComponent = <Progress key={this.state.PatientName} name={PatientName} />

        } else {

        }

        return (
            myComponent
        );

        console.log(myComponent)

    }


    componentDidMount() {
        this.retrieveData();
        //this.renderProgress();
    }



    retrieveData() {

        PatientDataService.getAll()
            .then(response => {
                //console.log(response.data);
                const data = response.data
                this.setState({
                    PatientInfo: data
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    handlePatientChange = (event) => {

        this.setState({
            PatientName: event.target.value,
        });


    }

    render() {

        return (
            <div>
                <Container>
                    <div>
                        <FormControl style={{ padding: 10 }}>
                            <InputLabel style={{ padding: 10 }}>Select Resident</InputLabel>
                            <Select style={{ width: 150 }}
                                onChange={this.handlePatientChange}
                                value={this.state.PatientName}
                            >

                                {this.state.PatientInfo.map((patient, i) =>
                                    <MenuItem
                                        value={patient.name}
                                        key={i}


                                    >{patient.name}</MenuItem>
                                )}



                            </Select>
                        </FormControl>

                        {this.renderProgress(this.state.PatientName)}

                    </div>
                </Container>

            </div>
        );



    }
}

