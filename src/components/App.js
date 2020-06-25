import React,{ useState } from 'react';
import '../stylesheets/App.scss';
import Maps from './Map';
;

const geoPosition = {
  longitude: '',
  latitude: '',
}

function App() {

   const [{longitude, latitude}, setLocalPosition] =  useState(geoPosition)
  // useEffect(() => {
    // create map
    navigator.geolocation.getCurrentPosition(function(position){
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    setLocalPosition({
        latitude : position.coords.latitude,
        longitude : position.coords.longitude,
        
    })
    
      })
       let position = [latitude, longitude];
  
  return (
    <div className="App">
      
      
      <Maps latitude={latitude} longitude={longitude}/>
   
    </div>
  );
  
}

export default App;
