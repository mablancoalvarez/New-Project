import React, { useEffect } from 'react';
import L from 'leaflet';

function Maps({ latitude, longitude }) {
  useEffect(() => {
    L.map('map', {
      center: [latitude, longitude],
      zoom: 14,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });
  });

  return <div id="map"></div>
}

export default Maps;