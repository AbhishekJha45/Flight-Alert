import React, { useState, useEffect } from 'react';
import Header from './Components/Header';
import FlightTable from './Components/FlightTable';
import FlightAddForm from './Components/Flight-add/flightAdd';
import FlightStatusUpdateForm from './Components/Flight-status-update/flightStatusUpdate';
import FlightSubscribeForm from './Components/Flight-status-subscribe/flightStatusSubscribe';
import FlightSearchForm from './Components/Flight-search/flightSearch';
import {getAllFlights} from './Services/flightService';
import {exportToCsv} from './Services/exportService';

function App() {
  const [hasAdminRole, setHasAdminRole] = useState(false);
  const [flights, setFlights] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // Fetch flights data when component mounts
    fetchFlights();
    setHasAdminRole(true); // Or any other logic to set admin role
  }, []);

  const fetchFlights = async () => {
    try {
      const response = await getAllFlights();
      setFlights(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleOpenSearchForm = () => {

  }
  const handleAddFlight = () => {
    // Open FlightAddForm dialog and handle result
  };

  const handleSubscribe = () => {
    // Open FlightSubscribeForm dialog and handle result
  };

  const handleDownload = () => {
    exportToCsv(flights, 'flight-data', [
      'flightId', 'flightNumber', 'originLocation', 'destinationLocation', 'flightType', 'terminalGate', 'arrivalTime', 'departureTime', 'status', 'delayed'
    ]);
  };

  const handleLogout = () => {
    // Handle logout
  };

  const handleEditFlight = (flight) => {
    // Open FlightStatusUpdateForm dialog and handle result
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredFlights = flights.filter(flight => flight.flightNumber.includes(filter));

  return (
    <div>
      <Header
        hasAdminRole={hasAdminRole}
        onAddFlight={handleAddFlight}
        onSubscribe={handleSubscribe}
        onDownload={handleDownload}
        onLogout={handleLogout}
      />
      <div className="main-body">
        <div className="filter-container">
          <input
            type="text"
            placeholder="Ex. Boeing 737"
            value={filter}
            onChange={handleFilterChange}
          />
          <button onClick={handleOpenSearchForm}>Search</button>
        </div>
        <FlightTable
          flights={filteredFlights}
          hasAdminRole={hasAdminRole}
          onEditFlight={handleEditFlight}
        />
      </div>
    </div>
  );
}

export default App;
