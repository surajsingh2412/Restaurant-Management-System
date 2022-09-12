import React, { useContext } from "react";
import { Context } from "../../Context";
import menu from "../../menu";

export default function Total({totalValue}) {


  const [items] = useContext(Context);

 
    

  




  return (
    <div className="total">
     {/* <a href="/Orders" ><button> Confirm Order</button>
       </a>  */}

      <span className="total-title">Total:</span>
      <span className="total-price">Rs. {totalValue}</span>
    </div>
  );
}


// od no  items quantity total price status