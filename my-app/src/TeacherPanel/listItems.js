import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Timer from '@material-ui/icons/Timer';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <Timer />
      </ListItemIcon>
      <ListItemText primary="Scheduled Class" />
    </ListItem>
   
  </div>
);
