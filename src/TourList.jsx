import Tours from "./Tours";
import "./tourlist.css";
import turlar from "./data";
import { useState } from "react";

function TourList({setLoad}) {

    const [data, setData] = useState(turlar);

    function deleteData(id){
        let newData = data.filter( eleman => eleman.id !== id );
        setData(newData);
    };

    if(data.length === 0){
        return(
            <div className="last">
                <p>No Tours Left</p>
                <button onClick={setLoad}>Refresh</button>
            </div>
        )
    }

    return (
        <div className="page">
            <h2>Our Tours</h2>
            <div className="cards">
                {data.map((eleman) => {
                        return(<Tours deleteData={deleteData} bilgi={eleman} />)
                })}
            </div>
        </div>
    )
}

export default TourList;