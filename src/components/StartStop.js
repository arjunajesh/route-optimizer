import React, { useState, useRef} from "react";
import {Autocomplete} from "@react-google-maps/api";
import {Card,CardContent,Grid} from "@mui/material";


const StartStop = ({type, setStartStop}) =>{
    const locationRef  = useRef(null);
    const [display,setDisplay] = useState(false);
    const [address, setAddress] = useState("");

    const Display = ({address, editButton}) =>{
        return(
            <div className="display">
                <p>{address}</p>
                <button onClick={editButton}>Edit</button>
            </div>
        );
    }
    const Edit = ({type, doneButton}) =>{
        return(
            <div className="edit">
                <Autocomplete>
                    <input placeholder={"Enter " + type} ref={locationRef}/>
                </Autocomplete>
                <button onClick={doneButton}>Done</button>
            </div>
        );
    }
    const editButton = () =>{
        setDisplay(!display);
    }
    const doneButton = () =>{
        setAddress(locationRef.current.value);
        setDisplay(!display);
        setStartStop(locationRef.current.value);
    }
    return(
        <Grid >
            <Card style={{margin:15}}>
                <CardContent>
                    {type}
                    {display ? <Display address={address} editButton={editButton}/>:<Edit type={type} doneButton={doneButton}/>}
                </CardContent>
            </Card>
        </Grid>
    );
}
export default StartStop;