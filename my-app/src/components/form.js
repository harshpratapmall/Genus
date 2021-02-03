import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import StorageIcon from '@material-ui/icons/Storage';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './login.css';
import { useState } from 'react'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="blue" >
      GENUS
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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

  
const form = (e) => {
  e.preventDefault()
  console.log(firstName)
  console.log(lastName)
  console.log(fatherName)
  console.log(motherName)
  console.log(firstName)
  console.log(F_occupation)
  console.log(M_occupation)
  console.log(no_father)
  console.log(no_mother)
  console.log(no_stu)
  console.log(email)
  console.log(DOB)
  console.log(standard)
  console.log(Pre_res)
  console.log(insti)  
}
const [firstName, setfirstName] = useState('');
const [lastName, setlastName] = useState('');
const [fatherName, setfatherName] = useState('');
const [motherName, setmotherName] = useState('');
const [F_occupation, setF_occupation] = useState('');
const [M_occupation, setM_occupation] = useState('');
const [no_father, setno_father] = useState('');
const [no_mother, setno_mother] = useState('');
const [no_stu, setno_stu] = useState('');
const [email, setEmail] = useState('');
const [DOB, setDOB] = useState('');
const [standard, setstandard] = useState('');
const [Pre_res, setPre_res] = useState('');
const [insti, setinsti] = useState('');

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <StorageIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Form
        </Typography>
        <form className={classes.form} onSubmit={form}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={firstName}
                onInput={ e=>setfirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                value={lastName}
                onInput={ e=>setlastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="fatherName"
                label="Father's Name"
                name="fatherName"
                autoComplete="fatherName"
                value={fatherName}
                onInput={ e=>setfatherName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="motherName"
                label="Mother's Name"
                type="text"
                id="motherName"
                autoComplete="motherName"
                value={motherName}
                onInput={ e=>setmotherName(e.target.value)}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="F_occupation"
                variant="outlined"
                required
                fullWidth
                id="F_occupation"
                label="Father's Occupation"
                value={F_occupation}
                onInput={ e=>setF_occupation(e.target.value)}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="M_occupation"
                label="Mother's Occupation"
                name="M_occupation"
                autoComplete="M_occupation"
                value={M_occupation}
                onInput={ e=>setM_occupation(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="no_father"
                label="Contact Number(Father)"
                name="no_father"
                autoComplete="no_father"
                type="number"
                value={no_father}
                onInput={ e=>setno_father(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="no_mother"
                label="Contact Number(Mother) "
                name="no_mother"
                autoComplete="no_mother"
                type="number"
                value={no_mother}
                onInput={ e=>setno_mother(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="no_stu"
                label="Contact Number(Student) "
                name="no_stu"
                autoComplete="no_stu"
                type="number"
                value={no_stu}
                onInput={ e=>setno_stu(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="E-mail ID(Student) "
                name="email"
                autoComplete="email"
                value={email}
                type="email"
                onInput={ e=>setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <Button disabled >
            <h6> <u>Date of Birth
                (as on marksheets)</u>: </h6>
            </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="DOB"
                label=""
                name="DOB"
                autoComplete="DOB"
                type="date"
                value={DOB}
                onInput={ e=>setDOB(e.target.value)}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="standard"
                label="Class"
                name="standard"
                autoComplete="class"
                type="number"
                value={standard}
                onInput={ e=>setstandard(e.target.value)}
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="Pre_res"
                label="Previous Clasas Result (%)"
                name="Pre_res"
                autoComplete="Pre_res"
                type="number"
                value={Pre_res}
                onInput={ e=>setPre_res(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="insti"
                label="School/College"
                name="insti"
                autoComplete="insti"
                type="text"
                value={insti}
                onInput={ e=>setinsti(e.target.value)}
              />
            </Grid>

            
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" required/>}
                label="I declare that the information submitted above is true and correct to best of my knowledge and belief"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}