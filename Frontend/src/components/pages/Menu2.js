import React, { useState } from "react";
// import "../../App.css";
import { Provider } from "../../Context";
import Mains from "./Mains";
import Total from "./Total";
// import Footer from "../../components/Footer";
import "../../styles.css";
import { mains } from "../../menu";
// import { Button } from "../../components/Button";
// import { Link } from "react-router-dom";
// import AddMenu from "./AddMenu";
// import {mains} from "../../menu.json";

export default function Menu2({ dishId, name, type }) {
  //const [price, setPrice] = useState(0);
  const [inputVal, setInputVal] = useState(0);
  const [totalValue, setTotalValue] = useState(0);
  return (
    <div>
      <Provider>
        <div className="menu">
          <Mains totalValue={totalValue} setTotalValue={setTotalValue} inputVal={inputVal} setInputVal={setInputVal}/>

         
       
        </div>
         <div className="confirmbutton">
         <a href="/AddOrder">
                <button className="btnn"> <Total totalValue={totalValue}/>Place Order</button>
              </a>
         </div>
           

      </Provider>


      <h4 className="dishId">{dishId} </h4>
      <h3 className="fname">{name} </h3>
      <div className="type">
        <p>{type} </p>
      </div>
      <br /> 
      <p className="amount">
        {""} {totalValue}{" "}
      </p>

      
    </div>
  );
}
