import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faMapMarkerAlt, faSearch, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './SearchBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const SearchBar = ({ onSearchSubmit }) => {
    const [searchParams, setSearchParams] = useState({
        from: '',
        to: '',
        departureDate: new Date(),
        returnDate: new Date(),
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSearchParams(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleDateChange = (name, date) => {
        setSearchParams(prevState => ({
            ...prevState,
            [name]: date
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearchSubmit(searchParams); // Call the function passed from the parent component
    };

    return (
        <div className="search-bar">
            <form onSubmit={handleSubmit} className="form-grid">
                <div className="input-row">
                    <div className="input-group">
                        <FontAwesomeIcon icon={faPlaneDeparture} className="icon" />
                        <input
                            type="text"
                            className="form-control"
                            name="from"
                            value={searchParams.from}
                            onChange={handleChange}
                            placeholder="Where from"
                        />
                    </div>
                    <div className="input-group">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                        <input
                            type="text"
                            className="form-control"
                            name="to"
                            onChange={handleChange}
                            placeholder="Where to"
                        />
                    </div>
                    <div className="input-group date-picker">
                        <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
                        <DatePicker
                            selected={searchParams.departureDate}
                            onChange={(date) => handleDateChange('departureDate', date)}
                            className="form-control"
                        />
                    </div>
                    <div className="input-group date-picker">
                        <FontAwesomeIcon icon={faCalendarAlt} className="icon" />
                        <DatePicker
                            selected={searchParams.returnDate}
                            onChange={(date) => handleDateChange('returnDate', date)}
                            className="form-control"
                        />
                    </div>
                </div>
                <button type="submit" className="btn-search">
                    <FontAwesomeIcon icon={faSearch} /> Explore
                </button>
            </form>
        </div>
    );
};

export default SearchBar;