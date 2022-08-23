import './App.css';
import SidePanel from './components/SidePanel.js'
import React, { useState} from "react";

import Map from './components/Map.js'
import { useLoadScript} from "@react-google-maps/api";

function App() {
  const libraries = ["places"];
  const [directionResult, setDirectionResult] = useState(null);
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: 'AIzaSyBqfMca14nG4xosHZS6cVxGdtV2VRtGYSw',
    libraries,
  })
  if(loadError) return "Error loading maps";
  if(!isLoaded) return "Loading Maps";
  
  const directionResultCallBack = (result) =>{
    console.log("something got called back")
    setDirectionResult(result);
  }

  return (
    <div className="Main">
      <div className="Nav-info">
        <SidePanel setDirectionResult={directionResultCallBack}/>
      </div>
      <Map directionResult={directionResult}/>
    </div>
  );
}

export default App;
