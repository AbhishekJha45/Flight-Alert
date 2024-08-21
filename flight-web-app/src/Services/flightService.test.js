import axios from 'axios';
import {
  getAllFlights,
  searchFlightData,
  addFlight,
  updateFlightStatus,
  subscribeToFlightStatus
} from './FlightService';

jest.mock('axios');

describe('FlightService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should get all flights', async () => {
    const responseData = {};
    axios.get.mockResolvedValue(responseData);

    const response = await getAllFlights();

    expect(response).toEqual(responseData);
    expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/api/flight-service');
  });

  it('should search flight data', async () => {
    const responseData = {};
    axios.get.mockResolvedValue(responseData);

    const searchParams = { flightNumber: '123' };
    const response = await searchFlightData(searchParams);

    expect(response).toEqual(responseData);
    expect(axios.get).toHaveBeenCalledWith(
      'http://localhost:3000/api/flight-service/search?flightNumber=123'
    );
  });

  it('should add a flight', async () => {
    const responseData = {};
    axios.post.mockResolvedValue(responseData);

    const newFlight = { flightNumber: '123' };
    const response = await addFlight(newFlight);

    expect(response).toEqual(responseData);
    expect(axios.post).toHaveBeenCalledWith(
      'http://localhost:3000/api/flight-service',
      newFlight
    );
  });

  it('should update flight status', async () => {
    const responseData = {};
    axios.patch.mockResolvedValue(responseData);

    const updateData = { status: 'DELAY' };
    const flightId = 1;
    const response = await updateFlightStatus(updateData, flightId);

    expect(response).toEqual(responseData);
    expect(axios.patch).toHaveBeenCalledWith(
      'http://localhost:3000/api/flight-service/1',
      updateData
    );
  });

  it('should subscribe to flight status', async () => {
    const responseData = {};
    axios.post.mockResolvedValue(responseData);

    const subscriptionData = { flightNumber: '123' };
    const response = await subscribeToFlightStatus(subscriptionData);

    expect(response).toEqual(responseData);
    expect(axios.post).toHaveBeenCalledWith(
      'http://localhost:3001/api/flight-notification-service/subscribe',
      subscriptionData
    );
  });
});

