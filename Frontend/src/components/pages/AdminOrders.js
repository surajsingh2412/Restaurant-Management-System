


import React, { useState, useEffect } from "react";

import "../../components/pages/tabledata.css";



function AdminOrders() {
  const [orderId,setOrderId] = useState();
  const [data, getData] = useState([]);
  const [item, setItem] = useState();
  //const [users,setUsers] = useState([]);
  // const [selects,setSelects]=useState();
  const [status,setStatus]= useState();
  const URL ="http://localhost:8080/Order/getAll";



  useEffect(() => {

    fetchData();

  });



  const fetchData = () => {

    fetch(URL)

      .then((res) => res.json())
      .then((response) => {

        //console.log(response);
        //setUsers(response);
        // setOrderId(response[0].orderId);
        // setStatus(response[0].status);
        getData(response);
        
      });

  };


  const deleteitem =(orderId)=>{
    fetch(`http://localhost:8080/Order/delete/${orderId}`,
    {
      method:`DELETE`
    }).then((response )=>{
        //response.json().filter(orderId=>(response.orderId==orderId)).then(()=>
        
          //console.log(response)
          fetchData() 
        
    })

    }

  
  const updateUser =()=>{
    // let item={status}
    console.warn(`http://localhost:8080/Order/update/${orderId}`);
    const obj = {status : `${status}`};
    fetch(`http://localhost:8080/Order/update/${orderId}`, {
       method: 'PUT',
       headers:{
          'Accept':'application/json',
         'Content-Type':'application/json'
       },
       body:JSON.stringify(obj)
     })
  }

  return (

    <>

  

      <table className="ordertable">

        <tr>

          <th>Order Id</th>

          <th>Table No</th>

          <th>dish Id</th>

          <th>Status</th>
          
          <th>Special Request</th>

          <th>Delete</th>

          <th>Update Status</th>
        </tr>

        {data.map((item, i) => (

          <tr key={i}>

            <td>{item.orderId}</td>

            <td>{item.tableNo}</td>

            <td>{item.dishId}</td>

            <td>{item.status}</td>

            <td>{item.specialRequest}</td>

            <td> <button onClick={()=>deleteitem(item.orderId)}><i class="fa fa-trash" aria-hidden="true"></i></button> </td>

            <td> <button onClick={()=>{setItem(item);setStatus(item.status);setOrderId(item.orderId)}}><i class="fas fa-edit"></i></button>


              </td>
          </tr>

        ))}

      </table>

<div className= "surajsirji2">
      <div className="update2"> 
      <input className="in" placeholder="orderId" type="text" value={orderId}/> <br /><br />
        <input className="in" placeholder="status" type="text" value={status}  onChange={(e)=>{setStatus(e.target.value)}} /> <br /><br />
        <button className="btn btn--primary btn--medium" onClick={updateUser}>Change Status</button>  
      </div>
      <div className='combined1'>
      <a href="/GenerateBill " className="Add">
          <button type="submit" className="btn btn--primary btn--medium">View all Bills</button>
          </a>
    
      </div>
</div>
    </>

  );

}
export default AdminOrders;
