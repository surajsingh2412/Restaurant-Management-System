import React from "react";
import Input from "./Input.js";
import { useEffect } from "react";
import { useState } from "react";

export default function Mains({totalValue,setTotalValue,inputVal,setInputVal}) {

  const [data, getData] = useState([]);
 
  const URL ="http://localhost:8080/Menu/getAll";

  useEffect(() => {
    fetchData();
  });

  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())

      .then((response) => {
        getData(response);

      });
  };

  return (
    <section className="mains">
      <div className="menuicon">

MENU

<svg xlinkHref="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18.06 22.99h1.66c.84 0 1.53-.64 1.63-1.46L23 5.05h-5V1h-1.97v4.05h-4.97l.3 2.34c1.71.47 3.31 1.32 4.27 2.26 1.44 1.42 2.43 2.89 2.43 5.29v8.05zM1 21.99V21h15.03v.99c0 .55-.45 1-1.01 1H2.01c-.56 0-1.01-.45-1.01-1zm15.03-7c0-8-15.03-8-15.03 0h15.03zM1.02 17h15v2h-15z"/> </svg>



</div>
      {data.map((meal, index) => (
        <article className="menu-item" key={index}>
          <h3 className="mains-dishId">{meal.dishId} </h3>
          <h3 className="mains-name">{meal.name}</h3>
          <Input type="mains" name={meal.name} index={index} price={meal.cost} inputVal={inputVal} setInputVal={setInputVal} totalValue={totalValue} setTotalValue={setTotalValue}/>
          <strong className="mains-price">Rs. {meal.cost}</strong>
 
          <p className="mains-description">{meal.type}</p>
        </article>
      ))}
    </section>
  );
}
