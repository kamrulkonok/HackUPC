// import React from 'react';
import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import InteractiveMap from './components/InteractiveMap';
import TransportDetails from './components/TransportDetails';
import AccomodationDetails from './components/AccomodationDetails';
import DestinationCarousel from './components/DestinationCarousel';
import EventList from './components/EventList';


import morningBreathworkImage from './images/morningbreathwork.jpeg';
import natureWalkImage from './images/naturewalk.jpeg';

import './App.css';

// Define sample events data
const sampleEvents = [
    { id: 1, name: "Art Expo", description: "Annual art exhibition in London", lat: 51.5074, lng: -0.1278 },
    { id: 2, name: "Music Fest", description: "Live music festival with various artists", lat: 51.509, lng: -0.135 },
    { id: 3, name: "Food Market", description: "Explore local and international cuisines", lat: 51.515, lng: -0.141 }
];



const events = [
    { id: 1, name: "Morning Breathwork Session", description: "Energise Our Day", image: morningBreathworkImage,  date: "Thu, May 9",
    time: "9:00 AM CEST",
    location: "Badalona Beach",
    attendeesCount: 8,
    isFree: true},
    { id: 2, name: "Nature Walk", description: "Scenic routes", image: natureWalkImage, date: "Thu, May 9",
    time: "9:00 AM CEST",
    location: "Badalona Beach",
    attendeesCount: 8,
    isFree: true },
    { id: 3, name: "Morning Nature Walk", description: "Scenic routes", image: natureWalkImage, date: "Thu, May 9",
    time: "9:00 AM CEST",
    location: "Badalona Beach",
    attendeesCount: 8,
    isFree: true },
    { id: 4, name: "Morning Breathwork Session", description: "Energise Our Day", image: morningBreathworkImage, date: "Thu, May 9",
    time: "9:00 AM CEST",
    location: "Badalona Beach",
    attendeesCount: 8,
    isFree: true },
    // More events
];

  

function App() {
    const [searchSubmitted, setSearchSubmitted] = useState(false);

    const handleSearchSubmit = () => {
        setSearchSubmitted(true);
    };
    return (
        <div className="App">
            <header className="App-header">
                <h1>TravelPerk Pro</h1>
                <nav className="App-navigation">
                    <ul>
                        <li><a href="/login">Log In</a></li>
                        <li><a href="/signup">Sign Up</a></li>
                    </ul>
                </nav>
            </header>
            <main>
            {!searchSubmitted && (
                    <>
                        <SearchBar onSearchSubmit={handleSearchSubmit} />
                        <InteractiveMap events={sampleEvents}/> {/* Render InteractiveMap only if search not submitted */}
                    </>
                )}
                {searchSubmitted && (
                    <>
                    <h2>Destinations</h2>
                        <DestinationCarousel />
                        <h2>Events Near You</h2> 
                        <EventList events={events} />
                    </>
                )}
            </main>
            <footer className="App-footer">
                <p>© 2024 TravelPerk, Inc.</p>
            </footer>
        </div>
    );
}

export default App;
