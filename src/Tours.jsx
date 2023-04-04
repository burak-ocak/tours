import {  useState } from "react";
import "./tours.css";

function Tours({ bilgi, deleteData }) {

    const [goster, gosterGuncelle] = useState(false);

    function pGoster() {
        gosterGuncelle(onceki => !onceki);
    };


    return (
        <div className="kok-etiket" key={bilgi.id}>
            <div className="cardHead">
                <img src={bilgi.image} alt="" />
                <span className="sp">${bilgi.price}</span>
            </div>

            <div className="cardBody">
                <h4>{bilgi.name}</h4>
                {goster ? (
                    <div className="">
                        <p>{bilgi.info} </p>
                    </div>
                ) : (
                    <div className="pr">
                        <p>{bilgi.info} </p>
                    </div>
                )}
                <button className="show" onClick={pGoster}>Devamını gör</button>
                <button className="btn" onClick={()=>deleteData(bilgi.id)}>Not Interested</button>
            </div>
        </div>
    )
};

export default Tours;