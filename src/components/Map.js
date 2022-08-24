import {GoogleMap, DirectionsRenderer} from '@react-google-maps/api'
import React, {useState} from "react";

const center={lat:40, lng:-74}
function Map({directionInfo}){
    console.log(directionInfo);
    const [directionResult, setDirectionResult] = useState();
     
    async function calculateRoute(){
        if(directionInfo===null) return;
        //console.log(start + ", " + destination);
        const directionsService = new window.google.maps.DirectionsService();
        const results = await directionsService.route({
            origin: directionInfo.start,
            destination: directionInfo.destination,
            travelMode: window.google.maps.TravelMode.DRIVING
        })
        setDirectionResult(results);
    }
    calculateRoute();
    return(
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMap  center={center} zoom={10} mapContainerStyle={{width:'100%', height:'100%'}}>
                {directionResult && <DirectionsRenderer directions={directionResult}/>}
            </GoogleMap>
        </div>
       
    );
}
export default Map;