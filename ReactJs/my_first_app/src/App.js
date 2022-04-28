import React from "react";
import Card from "./components/MyDesign";
import Data from "./data.json";


// mapping data to the components
function APP(){
    return <div>
     <Card name={Data[0].name} id={Data[0].ID} address={Data[0].Address}/>,
    
    </div>
}


export default APP;