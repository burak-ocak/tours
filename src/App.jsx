import { useEffect, useState } from "react";
import ToursList from "./ToursList";
import "./app.css";


function App() {
    const [load, setLoad] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoad(false);
        }, 3000);
    });


    return (
        <div>
            {
                load ? <p className="p">Loading...</p> : <ToursList setLoad={setLoad} />
            }
        </div>
    );
};

export default App;