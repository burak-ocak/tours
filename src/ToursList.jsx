import { useState } from "react";
import Tours from "./Tours";
import turlar from "./data.js";
import "./tourlist.css";

function ToursList({setLoad}) {

    const [tours, setTours] = useState(turlar);

    function upgradeTours(id) {
        let newTours = tours.filter((eleman) => eleman.id !== id);
        setTours(newTours);
    };

    if(tours.length === 0){
        return(
            <div className="last">
                <p>No Tours Left</p>
                <button onClick={setLoad}>Refresh</button>
            </div>
        )
    }



    return (
        <div>
            <h2 className="baslik">Out Tours</h2>

            <div className="kok">
                {
                    tours.map((eleman) => <Tours eleman={eleman} upgradeTours={upgradeTours} />)
                }
            </div>

        </div>
    )
};

export default ToursList;