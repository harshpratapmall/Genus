import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Timer from '@material-ui/icons/Timer';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import AssignmentIcon from '@material-ui/icons/Assignment';

export const mainListItems = (
  <div>
    
    <ListItem button selected="true">
      <ListItemIcon>
        <Timer />
      </ListItemIcon>
      <ListItemText primary="Scheduled Class" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentInd />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItem>
   
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="ABCD" />
    </ListItem>
  </div>
);