import React,{useState, useEffect} from 'react';
import '../stylesheets/App.scss';
import Maps from './Map';
;

function App() {

  useEffect(() => {
     navigator.geolocation.getCurrentPosition(function(position){
    console.log("Latitude is :", position.coords.latitude);
    console.log("Longitude is :", position.coords.longitude);
    });
})


  return (
    <div className="App">
      <Maps />
    </div>
  );

}

export default App;
