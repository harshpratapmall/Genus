import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';



function createData(sr_no, name, sub) {
  return {sr_no, name, sub };
}

const rows = [
  createData(1, 'Teacher1', 'Sub1'),
  createData(2, 'Teacher2', 'Sub2'),
  createData(3, 'Teacher3', 'Sub3'),
  createData(4, 'Teacher4', 'Sub4'),
  createData(5, 'Teacher5', 'Sub5'),
];

export default function BasicTable() {


  return (
    <Container maxWidth="lg">
        
    <center><h4>Teacher's List</h4></center>
    <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Serial Number</b></TableCell>
            <TableCell ><b>Name</b></TableCell>
            <TableCell ><b>Subject</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              
              <TableCell>{row.sr_no}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.sub}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
  );
}
