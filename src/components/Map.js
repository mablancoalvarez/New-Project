import React from 'react';
import  L  from 'leaflet';
// import { TileLayer, Marker, Popup} from 'react-leaflet';

// 


function Maps() {
  // const [{longitude, latitude}, setLocalPosition] = useState(geoPosition)
  //   useEffect(() => {
  //     // create map
  //     navigator.geolocation.getCurrentPosition(function(position){
  //       console.log("Latitude is :", position.coords.latitude);
  //       console.log("Longitude is :", position.coords.longitude);
  //       setLocalPosition({
  //         latitude : position.coords.latitude,
  //         longitude : position.coords.longitude,
          
  //     })
  //       })
        
  //      let position = [latitude, longitude];
  //      console.log(position)
      L.map('map', {
        center:(40.360345599999995,-3.6896767999999995),
        zoom: 12,
        layers: [
          L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution:
              '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          }),
        ]
      });
    // }, []);

    return <div id="map"></div>
  }

  export default Maps;