import React from 'react';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import DropDownMenu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

function CommentBox(props) {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
  
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    
  
    const handleClose = () => {
      setAnchorEl(null);

    };


    return (


        <form>
            <Container>

                <div>
                    <Button aria-controls="fade-menu" aria-haspopup="true" onClick={handleClick}>
                        Select Residents
                    </Button>
                    <DropDownMenu
                        id="fade-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        TransitionComponent={Fade}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </DropDownMenu>
                </div>

                <label htmlFor="comment">comment:</label>
                <input
                    onChange={props.handleInputChange}
                    value={props.value}
                    name="comment"
                    type="text"
                    className="form-control"
                    placeholder="comment something"
                    id="comment"
                />
                <br />
                <button onClick={props.handleFormSubmit} className="btn btn-primary">
                    comment
            </button>
            </Container>
        </form>
    );
}

export default CommentBox