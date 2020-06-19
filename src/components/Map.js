import React, {useEffect} from 'react';
import  L  from 'leaflet';
// import { TileLayer, Marker, Popup} from 'react-leaflet';

// 


 function Maps({latitude,longitude}) {
  
  console.log(latitude)
  console.log(longitude)
   useEffect( ()  => {
   L.map('map', { 
      center: [latitude, longitude],
      zoom: 16,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });console.log(latitude)
  }, []);

    return  <div id="map"></div>
  }

  export default Maps;