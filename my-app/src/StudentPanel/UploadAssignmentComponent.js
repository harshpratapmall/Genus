import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Title from './Title';
import Grid from '@material-ui/core/Grid';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Schedule() {
  return (
    <React.Fragment>
      <Grid elevation={6} >
        <div >
        <center><Title >Upload Assignment</Title></center>
      <form  ><center>
            <TextField
              variant="standard"
              margin="normal"
              required={true}
              label="Subject"
              id="subject"
              name="Subject"
              autoComplete="Subject"
              autoFocus
            /><br/>
            <TextField
              variant="standard"
              margin="normal"
              required={true}
              label="Assignment Name"
              id="Assignment"
              name="Assignment"
              autoComplete="AssignmentName"
              autoFocus
            /><br/>
            <TextField
              variant="outlined"
              margin="normal"
              required={true}
              name="Uplaod"
              type="file"
              id="file"
            />
            <br />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Upload
            </Button>
            </center>
          
          </form>
          </div>
          </Grid>
    </React.Fragment>
  );
}