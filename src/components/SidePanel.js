import React, { useState, useRef} from "react";
import Stops from './Stops.js'
import {Autocomplete} from "@react-google-maps/api";
import StartStop from './StartStop.js'
//const google = window.google;
function SidePanel({callbackRouteInfo}){
    const locationRef = useRef(null);
    const [id,setId] = useState(0);
    const [inputList,setInputList] = useState([]);
    const [start, setStart] = useState();
    const [destination, setDestination] = useState();

    const handleSubmit = (event) => {
        if(locationRef.current.value.trim()){
            let newList = [...inputList, [locationRef.current.value, id]];
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
   
    async function sendRouteInfo(){
        const waypts = [];
        for(let i = 0; i < inputList.length; i++){
            waypts.push({
                location: inputList[i][0],
                stopover: true,
            })
        }
        const routeInfo = {
            start: start,
            destination: destination,
            waypts: waypts,
        }
        callbackRouteInfo(routeInfo);
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
                <button onClick={sendRouteInfo}>Calculate Route</button>
            </div>
            
        </div>
    );
    
}
export default SidePanel;