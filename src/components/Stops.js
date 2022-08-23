import {Card,CardContent,Grid} from "@mui/material";

const Stops = ({inputList, onDelete}) =>{
    
    const inputCards = inputList.map((input)=>{
        return(
            <Grid key={input[1]} >
            <Card style={{margin:15}}>
                <CardContent >
                    {input[0]}
                    <button onClick={()=>onDelete(input[1])}>Delete</button>
                </CardContent>
            </Card>
        </Grid>
        );
    });
    
    return(
        <div>
            {inputCards}
        </div>
    );
    
}
export default Stops;