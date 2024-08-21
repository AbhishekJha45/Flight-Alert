import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

export const getAllFlights = () => {
  return axios.get(`${API_BASE_URL}/flight-service`);
};

export const searchFlightData = (data) => {
  return axios.get(createSearchUri(data));
};

export const addFlight = (data) => {
  return axios.post(`${API_BASE_URL}/flight-service`, data);
};

export const updateFlightStatus = (data, id) => {
  return axios.patch(`${API_BASE_URL}/flight-service/${id}`, data);
};

export const subscribeToFlightStatus = (data) => {
  return axios.post('http://localhost:3001/api/flight-notification-service/subscribe', data);
};

const createSearchUri = (data) => {
  const queryParams = [];
  if (data.flightNumber) queryParams.push(`flightNumber=${data.flightNumber}`);
  if (data.status) queryParams.push(`status=${data.status}`);
  if (data.flightType) queryParams.push(`flightType=${data.flightType}`);
  if (data.originLocation) queryParams.push(`originLocation=${data.originLocation}`);
  if (data.destinationLocation) queryParams.push(`destinationLocation=${data.destinationLocation}`);
  if (data.terminalGate) queryParams.push(`terminalGate=${data.terminalGate}`);

  return `${API_BASE_URL}/flight-service/search?${queryParams.join('&')}`;
};
