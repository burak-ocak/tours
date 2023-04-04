import { useEffect, useState } from "react";
import "./app.css";
import Cards from "./Cards";


function App(){
    const [load, setLoad] = useState(true);
    
     useEffect( ()=>{
         setTimeout(() => {
             setLoad(false);
         }, 3000);
     }, [] );

    

    return(
        <div className="container" >
            {load ? <p>Loading...</p> : <Cards />}
        </div>
    )
};

export default App;