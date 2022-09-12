

import React, { useState, useEffect } from "react";

import "../../components/pages/tabledata.css";



function Orders() {

  const [data, getData] = useState([]);
  const [tableNo,setTableNo] = useState();
  const [totalCost,setTotalCost] = useState();


  const URL ="http://localhost:8080/Order/getAll";



  useEffect(() => {

    fetchData();

  });



  const fetchData = () => {

    fetch(URL)

      .then((res) => res.json())



      .then((response) => {

        console.log(response);

        getData(response);

      });

  };





  return (

    <>

  

      <table className="ordertable">

        <tr>

          <th>Order Id</th>

          <th>Table No</th>

          <th>dish Id</th>

          <th>Status</th>
          
          <th>Special Request</th>

     

          
        </tr>

        {data.map((item, i) => (

          <tr key={i}>

            <td>{item.orderId}</td>

            <td>{item.tableNo}</td>

            <td>{item.dishId}</td>

            <td>{item.status}</td>

            <td>{item.specialRequest}</td>

           
          </tr>

        ))}

      </table>
        <div className="surajsirji">
        <div className="ADDBUTTON">
      <a href="/AddOrder" className="Add">
          <button type="submit" className="btn btn--primary btn--medium">Place Order</button>
          </a>
          </div>
        <div className="ADDBUTTON">
      <a href="/ViewBill " className="Add">
          <button type="submit" className="btn btn--primary btn--medium">Generate Bill</button>
          </a>
    
    </div>  


      </div>




	  

    </>

  );

}



export default Orders;
