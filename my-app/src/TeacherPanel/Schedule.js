import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, time, subject, duration) {
  return { id, date, time, subject, duration};
}

const rows = [
  createData(0, '16 Mar, 2020', '00:01 am',  'Maths', '45 min'),
  createData(1, '16 Mar, 2020', '00:01 am',  'Maths', '45 min'),
  createData(2, '16 Mar, 2020', '00:01 am',  'Maths', '45 min'),
  
  createData(0, '16 Mar, 2020', '00:01 am',  'Maths', '45 min'),
  createData(1, '16 Mar, 2020', '00:01 am',  'Maths', '45 min'),
  createData(2, '16 Mar, 2020', '00:01 am',  'Maths', '45 min'),
];

export default function Schedule() {
  
  return (
    <React.Fragment>
      <Title>Scheduled Classes</Title>
      <Table size="large">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Subject</TableCell>
            <TableCell >Duration</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.subject}</TableCell>
              <TableCell>{row.duration}</TableCell>
              <TableCell >{row.amount}</TableCell>
              <TableCell ><button className="btn btn-success">Start Class</button></TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}