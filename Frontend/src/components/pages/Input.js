import React, { useContext,useRef,useEffect } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";
import { Context } from "../../Context";
import "../../styles.css";
export default function Input({ type, name, index, price,inputVal,setInputVal,totalValue,setTotalValue}) {
  const [items, updateItem] = useContext(Context);
  //const prevCountRef = useRef(); 
  //useEffect(() => {setTotalValue(totalValue - inputVal*price) }, [inputVal]);
  return (
    <input
    className="input"
      type="text1"
      inputmode="numeric"
      pattern="[0-9]*"
      key = {index}
      //onChange={({ target }) =>{ updateItem(type, index, target.value);setPrice(price) }}
      onChange={(e)=>{setTotalValue(totalValue + e.target.value*price)}}
      // name={name.replace(" ", "-").toLowerCase()}
    />
  );
}
