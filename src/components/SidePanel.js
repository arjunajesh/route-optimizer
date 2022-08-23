import React, { useState, useRef} from "react";
import Stops from './Stops.js'
import {Autocomplete} from "@react-google-maps/api";
import StartStop from './StartStop.js'
//const google = window.google;
function SidePanel({setDirectionResult}){
    const locationRef = useRef(null);
    const [id,setId] = useState(0);
    const [inputList,setInputList] = useState([]);
    const [start, setStart] = useState();
    const [destination, setDestination] = useState();

    const handleSubmit = (event) => {
        console.log('submitting element with id: ' + id)
        if(locationRef.current.value.trim()){
            let newList = [...inputList, [locationRef.current.value, id]];
            console.log(newList);
            locationRef.current.value = "";
            setId(id +1);
            setInputList(newList);
        }
    }
    const onDelete = (id) =>{
        const newList = inputList.filter((input)=>{
            return input[1]!==id;
        });
        setInputList(newList);
    }
   
    async function calculateRoute(){
        if(start===undefined || destination===undefined) return;
        console.log(start + ", " + destination);
        const directionsService = new window.google.maps.DirectionsService();
        const results = await directionsService.route({
            origin: start,
            destination: destination,
            travelMode: window.google.maps.TravelMode.DRIVING
        })
        setDirectionResult(results);
    }

    return(
        <div>
            
            <StartStop type="Start" setStartStop={setStart}/>
            <Stops inputList={inputList} onDelete={onDelete}/>
            <StartStop type="Destination" setStartStop={setDestination}/>
            <div style={{margin:15}} >
                <Autocomplete>
                    <input placeholder="Address of Stop" ref={locationRef}/>
                </Autocomplete>
                <button onClick={handleSubmit}>Add</button>
                <button onClick={calculateRoute}>Calculate Route</button>
            </div>
            
        </div>
    );
    
}
export default SidePanel;