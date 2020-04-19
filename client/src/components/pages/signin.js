import { browserHistory } from 'react-router';
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import UserDataService from '../../services/user.services';
import Container from '@material-ui/core/Container';

export default class SignIn extends Component {
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
    UserDataService.signIn(user)
      .then(response => {
        console.log(response)
        console.log(response.status)
        browserHistory.push('/patients');
        window.location.reload()
      }).catch(error => {
        console.log(error.message)
      })
  }

  render() {
    return (
      <Container>

        <div>

          <TextField
            onChange={this.handleOnUsernameChange}
            label="UserName" />
          <br></br>

          <TextField
            onChange={this.handleOnPasswordChange}
            label="Password" />

          <br></br>
          <Button onClick={this.sendLogIn}>Sign in</Button>
          <Button href="signup">SignUp</Button>

        </div>


      </Container>

    );

  }

}