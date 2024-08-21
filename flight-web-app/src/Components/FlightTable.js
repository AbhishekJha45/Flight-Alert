import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { format } from 'date-fns';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

function FlightTable({ flights, hasAdminRole, onEditFlight }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Flight Number</TableCell>
            <TableCell>Origin</TableCell>
            <TableCell>Destination</TableCell>
            <TableCell>Flight Type</TableCell>
            <TableCell>Terminal</TableCell>
            <TableCell>Arrival Time</TableCell>
            <TableCell>Departure Time</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {flights.map((flight) => (
            <TableRow key={flight.flightNumber}>
              <TableCell>{flight.flightNumber}</TableCell>
              <TableCell>{flight.originLocation}</TableCell>
              <TableCell>{flight.destinationLocation}</TableCell>
              <TableCell>{flight.flightType}</TableCell>
              <TableCell>{flight.terminalGate}</TableCell>
              <TableCell>{format(new Date(flight.arrivalTime), 'PPpp')}</TableCell>
              <TableCell>{format(new Date(flight.departureTime), 'PPpp')}</TableCell>
              <TableCell>
                {hasAdminRole && (
                  <IconButton color="primary" onClick={() => onEditFlight(flight)}>
                    <EditIcon />
                  </IconButton>
                )}
                {flight.status}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default FlightTable;
