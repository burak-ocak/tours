import { useEffect, useState } from "react";
import TourList from "./TourList";
import "./app.css";

function App(){

    const [load, setLoad] = useState(true);

    useEffect(()=>{
        setTimeout(() => {
            setLoad(false);
        }, 3000);
    });

    return(
        <div>
            {
                load ? <p className="load">Loading...</p> : <TourList setLoad={setLoad}/>
            }
        </div>
    )
}

export default App;