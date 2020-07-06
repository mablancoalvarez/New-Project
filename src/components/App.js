import React, { useState, useEffect } from 'react';
import '../stylesheets/App.scss';
import Maps from './Map';

function App() {

  const [localPosition, setLocalPosition] = useState()
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      setLocalPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,

      })

    })
  }, [])


  const renderMap = (position) => <Maps latitude={position.latitude} longitude={position.longitude} />

  return (
    <div className="App">
      {localPosition
        ? renderMap(localPosition)
        : null}
    </div>
  );

}

export default App;
