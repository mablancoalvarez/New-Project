import React, { useEffect } from 'react';
import L from 'leaflet';
import { Marker, Popup } from 'react-leaflet'

function Maps({ latitude, longitude }) {
  console.log(latitude)
  console.log(longitude)
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

  const addMarkers = ([latitude, longitude]) =>  <Marker position={[latitude, longitude]}>
    <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
  </Marker> 

  return <div id="map">
     {/* <Marker position={[latitude, longitude]}>
      <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
    </Marker> */}
    {addMarkers}
  </div>
}

export default Maps;