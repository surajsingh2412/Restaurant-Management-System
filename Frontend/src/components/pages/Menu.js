

import React, { useState, useEffect } from "react";

import "../../components/pages/tabledata.css";



function Menu() {

  const [data, getData] = useState([]);

  const URL ="http://localhost:8080/Menu/getAll";



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
  
  

          const deleteitem =(dishId)=>{
            fetch(`http://localhost:8080/Menu/delete/${dishId}`,
            {
              method:`DELETE`
            }).then((response )=>{
               
                  fetchData() 
                
            })

            }
  return (

    <>

    

     



     

      <table className="TT">

        <tr>

          <th>dish Id</th>

          <th>name </th>

          <th>cost </th>

          <th>type</th>

          <th>Delete </th>

        </tr>

        {data.map((item, i) => (

          <tr key={i}>

            <td>{item.dishId}</td>

            <td>{item.name}</td>

            <td>{item.cost}</td>

            <td>{item.type}</td>

            {/* <i class="fa fa-trash" aria-hidden="true"></i></td> */}
            <td> <button onClick={()=>deleteitem(item.dishId)}><i class="fa fa-trash"></i></button> </td>
          </tr>

        ))}

      </table>
	  <div className='ADDBUTTON'>
		<a href="/AddMenu" className="Add">
        <button type="submit" className="btn btn--primary btn--medium">ADD ITEM</button>
         </a>
  
 		</div>

    </>

  );

}

export default Menu;
