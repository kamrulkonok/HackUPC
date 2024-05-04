// FlightDetails.js
import React, { useState } from 'react';

function FlightDetails() {
  const [flightDetails, setFlightDetails] = useState({
    departureCity: '',
    arrivalCity: '',
    departureDate: '',
    returnDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFlightDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Flight details submitted:', flightDetails);
  };

  return (
    <div>
      <h2>Flight Details</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Departure City:
          <input type="text" name="departureCity" value={flightDetails.departureCity} onChange={handleChange} />
        </label>
        <label>
          Arrival City:
          <input type="text" name="arrivalCity" value={flightDetails.arrivalCity} onChange={handleChange} />
        </label>
        <label>
          Departure Date:
          <input type="date" name="departureDate" value={flightDetails.departureDate} onChange={handleChange} />
        </label>
        <label>
          Return Date:
          <input type="date" name="returnDate" value={flightDetails.returnDate} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FlightDetails;
