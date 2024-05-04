import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const InteractiveMap = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://restcountries.com/v3.1/region/europe');
      const data = await response.json();
      setCountries(data);
    };

    fetchData();
  }, []);

  const defaultPosition = [20, 0]; // A more central global position

  return (
    <MapContainer center={defaultPosition} zoom={2} style={{ height: '600px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {countries.map((country, index) => (
        country.capitalInfo?.latlng && (
          <Marker
            key={index}
            position={country.capitalInfo.latlng}
            icon={new L.Icon.Default()}
          >
            <Popup>
              <strong>{country.name.common}</strong><br/>
              Capital: {country.capital}<br/>
              Population: {country.population.toLocaleString()}
            </Popup>
          </Marker>
        )
      ))}
    </MapContainer>
  );
};

export default InteractiveMap;
