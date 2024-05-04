// TransportDetails.js
import React, { useState } from 'react';
import './TransportDetails.css'; // Import TransportDetails CSS file

function TransportDetails() {
  const [transportDetails, setTransportDetails] = useState({
    transportType: '',
    departureTime: '',
    arrivalTime: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransportDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Transport details submitted:', transportDetails);
  };

  return (
    <div className="transport-details-container">
      <h2>Transport Details</h2>
      <form className="transport-details-form" onSubmit={handleSubmit}>
        <label>
          Transport Type:
          <select name="transportType" value={transportDetails.transportType} onChange={handleChange}>
            <option value="">Select Transport Type</option>
            <option value="Car">Car</option>
            <option value="Train">Train</option>
            <option value="Metro">Metro</option>
            <option value="Taxi">Taxi</option>
            {/* Add more options as needed */}
          </select>
        </label>
        <label>
          Departure Time:
          <input type="time" name="departureTime" value={transportDetails.departureTime} onChange={handleChange} />
        </label>
        <label>
          Arrival Time:
          <input type="time" name="arrivalTime" value={transportDetails.arrivalTime} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TransportDetails;
