import { useState } from "react";
import "./tours.css";

function Tours({ eleman, upgradeTours }) {

    const [show, setShow] = useState(false);

    function showP() {
        setShow(onceki => !onceki);
    }

    return (
        <div className="card">
            <div className="card-head">
                <img src={eleman.image} alt="" />
                <span>${eleman.price}</span>
            </div>
            <div className="card-body">
                <h4>{eleman.name}</h4>

                {
                    show ? (<div className="">
                        <p>{eleman.info}</p>
                    </div>) : (
                        <div className="pr">
                            <p>{eleman.info}</p>
                        </div>)
                }

                <button className="btnDevam" onClick={showP}>Devamını Oku</button>
                <button className="btnNot" onClick={() => upgradeTours(eleman.id)}>Not Interesting</button>
            </div>
        </div>
    )
};

export default Tours;