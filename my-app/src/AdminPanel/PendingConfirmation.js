import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Schedule() {
  return (
    <React.Fragment>
      <Title>Scheduled Classes</Title>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell><b><u>Details</u></b></TableCell>
            <TableCell><b><u>Confirm</u></b></TableCell>
            <TableCell><b><u>Reject</u></b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
              <TableCell>
                  <Table>
                      <TableBody>
                          <table class="">
                        <tr>
                            <th>Name:</th>
                            <td>abcd</td>
                        </tr>
                        <tr>
                            <th>Email:</th>
                            <td>abcd</td>
                        </tr>
                        <tr>
                            <th>Father's Name:</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Mother's Name:</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Father's Occupation:</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Mother's Occupation</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Student's Contact:</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Date of Birth:</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Class:</th>
                            <td></td>
                        </tr>
                        <tr>
                            <th>School/College:</th>
                            <td></td>
                        </tr>
                        </table>
                        </TableBody>

                  </Table>
              </TableCell>
              <TableCell ><button className="btn btn-success">Confirm &#9989;</button></TableCell>
              <TableCell ><button className="btn btn-danger">Reject &#10060;</button></TableCell>

            </TableRow>
          
        </TableBody>
      </Table>
    </React.Fragment>
  );
}