import React from 'react';
import PatientDataService from '../../services/patient.service';
import Container from '@material-ui/core/Container';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

export default class DropDown extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            PatientInfo: [],
            selectedPatient: 0,
            anchorEl: null,
            
        }
    }


    componentDidMount() {
        this.retrieveData();
    }


    openMenu = (event) => {

        const anchorEl = event.currentTarget


        this.setState({
            anchorEl: anchorEl,
        });
        console.log(anchorEl)
    }

    handleClose = () => {
        this.setState({
            anchorEl: null,
        });
    };
  
  
    retrieveData() {

        PatientDataService.getAll()
            .then(response => {
                console.log(response.data);
                const data = response.data
                this.setState({
                    PatientInfo: data
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    handlePatientChange(event, index, value) {
    
        this.setState({
          selectedPatient: value
        });

        console.log(`You have selected ${this.state.PatientInfo[value]} color`);
    }

    render() {
        const patients = this.state.PatientInfo
        console.log(patients)
        const isOpen = Boolean(this.state.anchorEl)
        return (
            <div>
            <Container>
                <div>
                <Button aria-controls="fade-menu" 
                        aria-haspopup="true" 
                        onClick={this.openMenu}>
                        Select Residents
                </Button>
                <Menu 
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    value={this.state.selectedPatient}
                    onChange={this.handlePatientChange}
                    onClose={this.handleClose}
                    open={isOpen}>
                    
                    {patients.map((patient, index) =>
                        <MenuItem key={index}

                            value={index}

                            onClick={this.handleClose}

                           >{patient.name}</MenuItem>
                    )}
                </Menu>
                </div>
            </Container>
            </div>
        );
    }
}

