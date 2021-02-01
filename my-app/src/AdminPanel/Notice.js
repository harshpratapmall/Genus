import React from 'react';
import Link from '@material-ui/core/Link';
import Title from './Title';
import Publish from './publish'

function preventDefault(event) {
  event.preventDefault();
}


export default function Notice() {
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