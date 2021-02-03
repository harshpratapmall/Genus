import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Schedule from '@material-ui/icons/Schedule';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8,4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
 
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Schedule />
        </Avatar>
        <Typography component="h1" variant="h5">
          Scheduling a new class
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
         
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Teacher's Name"
                name="name"
                autoComplete=""
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Subject"
                label="Subject"
                name="subject"
                autoComplete=""
              />
            </Grid>
            <Grid item xs={4} >
              <TextField
                variant="filled"
                required
                fullWidth
                label="Date:-"
                disabled
              />
            </Grid>
            <Grid item xs={8} >
              <TextField
                variant="outlined"
                required
                fullWidth
                type="date"
              />
              </Grid>
            <Grid item xs={4} >
              <TextField
                variant="filled"
                required
                fullWidth
                label="Starting Time:-"
                disabled
              />
            </Grid>
            
            <Grid item xs={8} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="S_time"
                type="time"
                name="S_time"
              />
            </Grid>
            
            <Grid item xs={4} >
              <TextField
                variant="filled"
                required
                fullWidth
                label="Closing Time:-"
                disabled
              />
            </Grid>
            <Grid item xs={8} >
              <TextField
                variant="outlined"
                required
                fullWidth
                id="C_time"
                type="time"
                name="C_time"
              />
            </Grid>
            
            <Grid item xs={12}>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            DONE
          </Button>
        </form>
      </div>
    </Container>
  );
}