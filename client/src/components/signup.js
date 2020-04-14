import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';


export default function SignUp() {
    return (

        <Container>

            <div>

                <TextField>Username</TextField>
                <TextField>Password</TextField>

                <Button>SignUp</Button>

            </div>


        </Container>

    )
}
