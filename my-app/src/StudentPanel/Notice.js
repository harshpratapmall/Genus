import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Notice() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title><u>Notice Board</u></Title>
      <h6 >Here are the important informations </h6>
    </React.Fragment>
  );
}