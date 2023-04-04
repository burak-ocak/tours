import data from "./data.js";
import "./cards.css";
import { useEffect, useState } from "react";

function Cards() {

    const [expanded, setExpended] = useState(false);

    function updateExpanded() {
        setExpended(prev => !prev);
    };

    const [veri, veriGuncelle] = useState(data);

    function veriSil(id){
        const yeniVeri = veri.filter( (eleman)=>eleman.id !== id )
        veriGuncelle(yeniVeri);
    }

    

    return (
        <div className="anaDiv">

            {
                data.map((eleman) => {
                    return (
                        <div className="kok-etiket">
                            <div className="img">
                                <img src={eleman.image} alt="" />
                                <span className="sp">${eleman.price}</span>
                            </div>

                            <div className="card-body">
                                <h4>{eleman.name}</h4>
                                {expanded ? (
                                    <div className="paragraf expanded">
                                        <p className="pr">{eleman.info}</p>
                                    </div>
                                ) :
                                    (
                                        <div className="paragraf">
                                            <p className="pr">{eleman.info}</p>
                                        </div>
                                    )
                                }
                                <button className="read-more" onClick={updateExpanded}>Read More</button>
                                <button className="btn" onClick={()=>veriSil(veri.id)}>Not Interested</button>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Cards;