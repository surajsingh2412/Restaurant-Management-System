import React, { useState, useEffect } from "react";

import "../../components/pages/tabledata.css";



function GenerateBill() {

  const [data, getData] = useState([]);


  const URL ="http://localhost:8080/Bill/getAll";



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

          <th>Table No</th>

          <th>Total Cost</th>

          
        </tr>

        {data.map((item, i) => (

          <tr key={i}>

            <td>{item.tableNo}</td>

            <td>{item.totalCost}</td>

          </tr>

        ))}

      </table>
     
    </>

  );

}



export default GenerateBill;
