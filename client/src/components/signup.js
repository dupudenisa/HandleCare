import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import UserDataService from '../services/user.services';

export default class SignUp extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
          UserName: "",
          Password: "",
          user: {},
        }
      }
    
      handleOnUsernameChange = event => {
        console.log('Click');
        console.log(event.target.value);
        const username = event.target.value
        this.setState({
          UserName: username
        })
      };
    
    
      handleOnPasswordChange = event => {
        console.log('Click');
        console.log(event.target.value);
        const password = event.target.value
        this.setState({
          Password: password
        })
      };
    
      sendLogIn = () => {
    
        console.log(this.state.user)
        const username = this.state.UserName
        const password = this.state.Password
        const user = {username, password}
        console.log(user)
        this.setState({
          user: user
        })
        UserDataService.signUp(user)
          .then(response => {
            console.log(response.status)
            browserHistory.push('/patients');
            window.location.reload()
          }).catch(error => {
            console.log(error)
          })
      }
    render() {
    return (

        <Container>

            <div>
            <br></br>
                <TextField onChange={this.handleOnUsernameChange} label="UserName"></TextField>
                <br></br>

                <TextField onChange={this.handleOnPasswordChange} label="Password"></TextField>

                <br></br>

                <Button  onClick={this.sendLogIn}>SignUp</Button>


            </div>


        </Container>

    )
    }
}
