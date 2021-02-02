import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Timer from '@material-ui/icons/Timer';
import AssignmentInd from '@material-ui/icons/AssignmentInd';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/AvTimer';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ListAltIcon from '@material-ui/icons/ListAlt';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <Timer />
      </ListItemIcon>
      <ListItemText primary="Schedule a class" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentInd />
      </ListItemIcon>
      <ListItemText primary="Add a Teacher" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Pending Confirmation" />
    </ListItem>
    <ListItem button >
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Rescheduling a class" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Recorded Classes" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <ListAltIcon />
      </ListItemIcon>
      <ListItemText primary="Student's List" />
    </ListItem>

    <ListItem button>
      <ListItemIcon>
        <ListAltIcon />
      </ListItemIcon>
      <ListItemText primary="Teacher's List" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>More Options</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="ABCD" />
    </ListItem>

  </div>
);