// AccommodationDetails.js
import React, { useState } from 'react';
import './AccomodationDetails.css'; // Import TransportDetails CSS file

function AccommodationDetails({ onAccommodationSubmit }) {
  const [accommodationDetails, setAccommodationDetails] = useState({
    accommodationType: '',
    accommodationName: '',
    checkInDate: '',
    checkOutDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAccommodationDetails(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Accommodation details submitted:', accommodationDetails);
    onAccommodationSubmit();
  };

  return (
    <div className="accommodation-details-container">
      <h2>Accommodation Details</h2>
      <form className="accommodation-details-form" onSubmit={handleSubmit}>
        <label>
          Accommodation Type:
          <select name="accommodationType" value={accommodationDetails.accommodationType} onChange={handleChange}>
            <option value="">Select Accommodation Type</option>
            <option value="Hotel">Hotel</option>
            <option value="Hostel">Hostel</option>
            <option value="Homestay">Homestay</option>
            <option value="Airbnb">Airbnb</option>
          </select>
        </label>
        <label>
          Accommodation Name:
          <input type="text" name="accommodationName" value={accommodationDetails.accommodationName} onChange={handleChange} />
        </label>
        <label>
          Check-in Date:
          <input type="date" name="checkInDate" value={accommodationDetails.checkInDate} onChange={handleChange} />
        </label>
        <label>
          Check-out Date:
          <input type="date" name="checkOutDate" value={accommodationDetails.checkOutDate} onChange={handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AccommodationDetails;
