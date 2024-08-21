
# Flight Arrival Departure App
The Flight Arrival Departure Management app is a web application that facilitates various functionalities related to flight management, subscriptions, and notifications. The application allows users to view all flight data, with delay flights highlighted for easy identification. Users can subscribe to their preferred flight status (delay, arrival, departure) and receive email notifications based on their subscription preferences. On the admin side, users with appropriate permissions can add new flights, update flight statuses (arrival, departure, delay), and download flight data.


### Features
## User Functionality
1. View All Flight Data: Users can view all flight data, and delayed flights are highlighted to stand out.

2. Flight Status Subscription: Users can subscribe to their preferred flight status (delay, arrival, departure) to receive notifications.

3. Email Notifications: Users will receive email notifications based on their subscription preferences.(user will recive email notifications from abhishekjha.documents@gmail.com)

## Admin Functionality:

1. Add New Flights: Admin users can add new flights to the system.

2. Update Flight Status: Admin users can update flight statuses such as arrival, departure, and delay.

3. Download Flight Data: Admin users can download flight data for further analysis. (Currently support .CSV format)


### Installation and Usage

### Prerequisites
Before running the Flight Arrival Departure App, you need to have the following software installed on your system:

1. Node.js (https://nodejs.org)
3. Backend Server (assuming it's already set up and running at http://localhost:3000 and http://localhost:3001 for flight-service and flight-notification service APIs respectively)

### Installation

# Step 1: Clone the repository:
        git clone [flight-departure-arrival-app](https://github.com/AbhishekJha45/Indigo-Frontend).git

# Step 2:move to the given directory
        cd Indigo-Frontend

# Step 3:Install the dependencies using npm
        npm install

# Step 4:Start the angular app
        npm start                


### Backend servers
private readonly flightsApiUrl = 'http://localhost:3000/api/flights';
private readonly flightStatusApiUrl = 'http://localhost:3001/api/flights/flight-status';
private readonly flightSubscribeApiUrl = 'http://localhost:3001/api/flights/subscribe';


### App Sign-In Process and Test Account Usage

When signing in to the application, users will be redirected to the firebase authentication UI page for role based access control.
So if client credentials are used then ui will be loaded as client view where client can access the functionality assigned to them.

### Admin Account:

### User Account:

### Admin Role Features
Add Flights
Download Flight Data to .CSV file
Update Flight Status
View Flight Data
Subscribe to Flight Status Updates

### User Role Features
View Flight 
Subscribe to Flight Status Updates

Feel free to use these test accounts to explore and interact with the various features available to both admin and user roles in the application.             

### Unit Testing
ng test
This will execute the unit tests using Karma.