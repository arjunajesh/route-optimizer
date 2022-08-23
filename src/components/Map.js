import {GoogleMap, DirectionsRenderer} from '@react-google-maps/api'
import React from "react";

const center={lat:40, lng:-74}
function Map({directionResult}){
    console.log('render occured');
    return(
        
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMap  center={center} zoom={10} mapContainerStyle={{width:'100%', height:'100%'}}>
                {directionResult && <DirectionsRenderer directions={directionResult}/>}
            </GoogleMap>
        </div>
       
    );
}
export default Map;