
import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import Container from '@material-ui/core/Container';

export default function SignIn() {

  return (
    <Container>

    <div>

        <TextField label="UserName"></TextField>
        <br></br>

        <TextField label="Password"></TextField>

        <br></br>
        <Button>Sign in</Button>
        <Button>SignUp</Button>

    </div>


</Container>

  );
}