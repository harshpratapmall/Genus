import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';
import Publish from './publish'

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
      <Title>Notice Board</Title>
      
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          
        <Publish/>
        
          
        </Link>
      </div>
    </React.Fragment>
  );
}